import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import nodemailer from 'nodemailer'
import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: join(__dirname, '..', '.env') })

const app = express()
const PORT = process.env.PORT || 3001

// --- Middleware ---
app.use(helmet({
  contentSecurityPolicy: false // Wird vom Frontend/Proxy gesteuert
}))
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}))
app.use(express.json({ limit: '1mb' }))

// --- Rate Limiting (einfach) ---
const rateLimits = new Map()
function rateLimit(windowMs = 60000, maxRequests = 5) {
  return (req, res, next) => {
    const ip = req.ip || req.socket?.remoteAddress
    const now = Date.now()
    const windowStart = now - windowMs

    if (!rateLimits.has(ip)) {
      rateLimits.set(ip, [])
    }

    const requests = rateLimits.get(ip).filter(t => t > windowStart)
    requests.push(now)
    rateLimits.set(ip, requests)

    if (requests.length > maxRequests) {
      return res.status(429).json({
        error: 'Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut.'
      })
    }
    next()
  }
}

// Cleanup alte Eintraege alle 5 Minuten
setInterval(() => {
  const cutoff = Date.now() - 120000
  for (const [ip, times] of rateLimits.entries()) {
    const filtered = times.filter(t => t > cutoff)
    if (filtered.length === 0) rateLimits.delete(ip)
    else rateLimits.set(ip, filtered)
  }
}, 300000)

// --- E-Mail Transporter ---
let transporter = null

function getTransporter() {
  if (transporter) return transporter

  // Falls SMTP konfiguriert ist
  if (process.env.SMTP_HOST) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })
    return transporter
  }

  // Fallback: Logs ausgeben (Development)
  return null
}

// --- Validierung ---
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(str) {
  if (typeof str !== 'string') return ''
  return str.trim().replace(/<[^>]*>/g, '').substring(0, 2000)
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// --- API Routes ---

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Kontaktformular
app.post('/api/kontakt', rateLimit(60000, 3), async (req, res) => {
  try {
    const { name, email, nachricht } = req.body

    // Validierung
    const errors = []
    if (!name || sanitize(name).length < 2) errors.push('Bitte geben Sie Ihren Namen an.')
    if (!email || !validateEmail(email)) errors.push('Bitte geben Sie eine gültige E-Mail-Adresse an.')
    if (!nachricht || sanitize(nachricht).length < 10) errors.push('Bitte schreiben Sie eine Nachricht (mind. 10 Zeichen).')

    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(' ') })
    }

    const cleanData = {
      name: sanitize(name),
      email: sanitize(email),
      nachricht: sanitize(nachricht),
      datum: new Date().toISOString()
    }

    const transport = getTransporter()

    if (transport) {
      await transport.sendMail({
        from: `"Förderverein IWI Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'info@iwi-hs-niederrhein.de',
        replyTo: cleanData.email,
        subject: `Kontaktanfrage von ${escapeHtml(cleanData.name)}`,
        html: `
          <h2>Neue Kontaktanfrage über die Website</h2>
          <table style="border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${escapeHtml(cleanData.name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">E-Mail:</td><td style="padding:8px;">${escapeHtml(cleanData.email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Datum:</td><td style="padding:8px;">${escapeHtml(cleanData.datum)}</td></tr>
          </table>
          <h3>Nachricht:</h3>
          <p>${escapeHtml(cleanData.nachricht).replace(/\n/g, '<br>')}</p>
        `
      })
      console.log(`[KONTAKT] E-Mail gesendet von ${cleanData.name} (${cleanData.email})`)
    } else {
      // Development: Log ausgeben
      console.log('[KONTAKT] Neue Anfrage (kein SMTP konfiguriert):')
      console.log(JSON.stringify(cleanData, null, 2))
    }

    res.json({ success: true, message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.' })

  } catch (err) {
    console.error('[KONTAKT] Fehler:', err.message)
    res.status(500).json({ error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' })
  }
})

// Mitgliedschaftsformular
app.post('/api/mitglied-werden', rateLimit(60000, 3), async (req, res) => {
  try {
    const { zielgruppe, paket, vorname, nachname, email, organisation, nachricht } = req.body

    // Validierung
    const errors = []
    const validZielgruppen = ['unternehmen', 'alumni', 'studierende']
    const validPakete = ['basis', 'netzwerk', 'partner', 'alumni', 'studierende']

    if (!zielgruppe || !validZielgruppen.includes(zielgruppe)) errors.push('Bitte wählen Sie eine Zielgruppe.')
    if (!paket || !validPakete.includes(paket)) errors.push('Bitte wählen Sie ein Mitgliedschaftspaket.')
    if (!vorname || sanitize(vorname).length < 2) errors.push('Bitte geben Sie Ihren Vornamen an.')
    if (!nachname || sanitize(nachname).length < 2) errors.push('Bitte geben Sie Ihren Nachnamen an.')
    if (!email || !validateEmail(email)) errors.push('Bitte geben Sie eine gültige E-Mail-Adresse an.')

    if (errors.length > 0) {
      return res.status(400).json({ error: errors.join(' ') })
    }

    const paketLabels = {
      basis: 'Unternehmen – Basis (500 € p. a.)',
      netzwerk: 'Unternehmen – Netzwerk (1.500 € p. a.)',
      partner: 'Unternehmen – Partner (3.000 € p. a.)',
      alumni: 'Alumni / Förderfreunde (50–120 € p. a.)',
      studierende: 'Studierende (kostenlos / 10 € p. a.)'
    }

    const zielgruppeLabels = {
      unternehmen: 'Unternehmen',
      alumni: 'Alumni / Förderfreund',
      studierende: 'Studierende/r'
    }

    const cleanData = {
      zielgruppe: zielgruppeLabels[zielgruppe] || zielgruppe,
      paket: paketLabels[paket] || paket,
      vorname: sanitize(vorname),
      nachname: sanitize(nachname),
      email: sanitize(email),
      organisation: sanitize(organisation || ''),
      nachricht: sanitize(nachricht || ''),
      datum: new Date().toISOString()
    }

    const transport = getTransporter()

    if (transport) {
      // E-Mail an den Verein
      await transport.sendMail({
        from: `"Förderverein IWI Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'info@iwi-hs-niederrhein.de',
        replyTo: cleanData.email,
        subject: `Neue Mitgliedschaftsanfrage: ${escapeHtml(cleanData.vorname)} ${escapeHtml(cleanData.nachname)}`,
        html: `
          <h2>Neue Mitgliedschaftsanfrage</h2>
          <table style="border-collapse:collapse;">
            <tr><td style="padding:8px;font-weight:bold;">Zielgruppe:</td><td style="padding:8px;">${escapeHtml(cleanData.zielgruppe)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Paket:</td><td style="padding:8px;">${escapeHtml(cleanData.paket)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${escapeHtml(cleanData.vorname)} ${escapeHtml(cleanData.nachname)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">E-Mail:</td><td style="padding:8px;">${escapeHtml(cleanData.email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Organisation:</td><td style="padding:8px;">${escapeHtml(cleanData.organisation) || '–'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;">Datum:</td><td style="padding:8px;">${escapeHtml(cleanData.datum)}</td></tr>
          </table>
          ${cleanData.nachricht ? `<h3>Nachricht:</h3><p>${escapeHtml(cleanData.nachricht).replace(/\n/g, '<br>')}</p>` : ''}
        `
      })

      console.log(`[MITGLIED] Anfrage gesendet für ${cleanData.email}`)
    } else {
      console.log('[MITGLIED] Neue Anfrage (kein SMTP konfiguriert):')
      console.log(JSON.stringify(cleanData, null, 2))
    }

    res.json({
      success: true,
      message: 'Vielen Dank! Ihre Mitgliedschaftsanfrage wurde erfolgreich übermittelt. Ein Mitglied des Vorstands wird sich persönlich bei Ihnen melden.'
    })

  } catch (err) {
    console.error('[MITGLIED] Fehler:', err.message)
    res.status(500).json({ error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.' })
  }
})

// --- Statische Dateien (Production) ---
const distPath = join(__dirname, '..', 'dist')
if (existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get('{*path}', (req, res) => {
    if (!req.path.startsWith('/api')) {
      res.sendFile(join(distPath, 'index.html'))
    }
  })
}

// --- Server starten ---
app.listen(PORT, () => {
  console.log(`\n  Förderverein IWI – Backend`)
  console.log(`  Server läuft auf Port ${PORT}`)
  console.log(`  API: http://localhost:${PORT}/api/health`)
  console.log(`  SMTP: ${process.env.SMTP_HOST ? 'konfiguriert' : 'nicht konfiguriert (Dev-Modus)'}`)
  console.log()
})
