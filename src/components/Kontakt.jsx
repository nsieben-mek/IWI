import { useState } from 'react'
import { Link } from 'react-router-dom'
import useMathCaptcha from '../hooks/useMathCaptcha'
import './Kontakt.css'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', message: data.message })
        setFormData({ name: '', email: '', nachricht: '' })
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
    <section id="kontakt" className="kontakt section">
      <div className="container">
        <div className="section-header">
          <h2>Kontakt aufnehmen</h2>
          <p className="section-subtitle">
            Ob Mitgliedschaft, Förderung oder Kooperation: Wir antworten schnell und unkompliziert.
          </p>
        </div>

        <div className="kontakt-content">
          <form className="kontakt-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="kontakt-name">Name *</label>
                <input type="text" id="kontakt-name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="kontakt-email">E-Mail *</label>
                <input type="email" id="kontakt-email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="kontakt-nachricht">Nachricht *</label>
              <textarea id="kontakt-nachricht" name="nachricht" rows="4" value={formData.nachricht} onChange={handleChange} required></textarea>
            </div>

            <div className="form-group form-captcha">
              <label htmlFor="kontakt-captcha">Sicherheitsfrage: Was ergibt {captcha.task.a} + {captcha.task.b}? *</label>
              <input
                type="text"
                id="kontakt-captcha"
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

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>
          </form>

          <div className="kontakt-info">
            <div className="kontakt-person">
              <div className="kontakt-person-avatar">
                <img src="/images/wimmer.jpg" alt="Dr. Ralf Wimmer, Vorstandsvorsitzender des Fördervereins IWI" />
              </div>
              <div className="kontakt-person-info">
                <strong>Dr. Ralf Wimmer</strong>
                <span className="kontakt-person-role">Vorsitzender des Fördervereins</span>
                <span className="kontakt-person-org">Stv. Hauptgeschäftsführer, Unternehmerschaft Niederrhein</span>
              </div>
            </div>

            <div className="kontakt-details">
              <div className="kontakt-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <strong>E-Mail</strong>
                  <p>info@iwi-hs-niederrhein.de</p>
                </div>
              </div>

              <div className="kontakt-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>Adresse</strong>
                  <p>
                    Förderverein der ingenieurwissenschaftlichen<br />
                    Fachbereiche der Hochschule Niederrhein,<br />
                    Standort Krefeld e.&thinsp;V.<br />
                    c/o Unternehmerschaft Niederrhein e.&thinsp;V.<br />
                    Ostwall 227<br />
                    47798 Krefeld
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
