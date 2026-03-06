import { useState } from 'react'
import { Link } from 'react-router-dom'
import useMathCaptcha from '../hooks/useMathCaptcha'
import './MitgliedWerden.css'

export default function MitgliedWerden() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    organisation: '',
    nachricht: ''
  })
  const [datenschutz, setDatenschutz] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const captcha = useMathCaptcha()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!captcha.isCorrect) {
      setStatus({ type: 'error', message: 'Die Sicherheitsfrage wurde nicht korrekt beantwortet.' })
      return
    }

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const res = await fetch('/api/mitglied-werden', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ vorname: '', nachname: '', email: '', organisation: '', nachricht: '' })
        setDatenschutz(false)
        captcha.reset()
      } else {
        setStatus({ type: 'error', message: data.error || 'Ein Fehler ist aufgetreten.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Verbindungsfehler. Bitte versuchen Sie es später erneut.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="mitglied-werden" className="mitglied-werden section">
      <div className="container">
        <div className="section-header">
          <h2>Mitgliedschaft beantragen</h2>
          <p className="section-subtitle">
            Füllen Sie das Formular aus – wir melden uns persönlich bei Ihnen
            und klären die weiteren Schritte.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <span className="step-number">1</span>
            <span className="step-label">Formular absenden</span>
          </div>
          <div className="step-line" aria-hidden="true"></div>
          <div className="step">
            <span className="step-number">2</span>
            <span className="step-label">Persönliche Rückmeldung</span>
          </div>
          <div className="step-line" aria-hidden="true"></div>
          <div className="step">
            <span className="step-number">3</span>
            <span className="step-label">Willkommen im Verein</span>
          </div>
        </div>

        <div className="mitglied-werden-layout">
          <form className="mitglied-werden-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-row form-row-2">
              <div className="form-group">
                <label htmlFor="mw-vorname">Vorname *</label>
                <input type="text" id="mw-vorname" name="vorname" value={formData.vorname} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="mw-nachname">Nachname *</label>
                <input type="text" id="mw-nachname" name="nachname" value={formData.nachname} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row form-row-2">
              <div className="form-group">
                <label htmlFor="mw-email">E-Mail *</label>
                <input type="email" id="mw-email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="mw-organisation">Unternehmen / Organisation</label>
                <input type="text" id="mw-organisation" name="organisation" value={formData.organisation} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mw-nachricht">Nachricht (optional)</label>
              <textarea id="mw-nachricht" name="nachricht" rows="2" value={formData.nachricht} onChange={handleChange}></textarea>
            </div>

            <div className="form-group form-captcha">
              <label htmlFor="mw-captcha">Sicherheitsfrage: Was ergibt {captcha.task.a} + {captcha.task.b}? *</label>
              <input
                type="text"
                id="mw-captcha"
                inputMode="numeric"
                autoComplete="off"
                value={captcha.input}
                onChange={(e) => captcha.setInput(e.target.value)}
                required
              />
            </div>

            <div className="form-group form-checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={datenschutz}
                  onChange={(e) => setDatenschutz(e.target.checked)}
                  required
                />
                <span>
                  Ich habe die <Link to="/datenschutz" target="_blank">Datenschutzerklärung</Link> gelesen
                  und bin mit der Verarbeitung meiner Daten einverstanden. *
                </span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Wird gesendet...' : 'Mitgliedschaft beantragen'}
              </button>
              <a href="#kontakt" className="btn btn-secondary">Fragen vorab klären</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
