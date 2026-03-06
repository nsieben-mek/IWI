import { useState } from 'react'
import './MitgliedWerden.css'

export default function MitgliedWerden() {
  const [formData, setFormData] = useState({
    zielgruppe: '',
    paket: '',
    vorname: '',
    nachname: '',
    email: '',
    organisation: '',
    nachricht: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        setFormData({ zielgruppe: '', paket: '', vorname: '', nachname: '', email: '', organisation: '', nachricht: '' })
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

            <div className="form-row form-row-3">
              <div className="form-group">
                <label htmlFor="zielgruppe">Ich bin *</label>
                <select id="zielgruppe" name="zielgruppe" value={formData.zielgruppe} onChange={handleChange} required>
                  <option value="">Bitte auswählen</option>
                  <option value="unternehmen">Unternehmen</option>
                  <option value="alumni">Alumni / Förderfreund</option>
                  <option value="studierende">Studierende/r</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="paket">Mitgliedschaftspaket *</label>
                <select id="paket" name="paket" value={formData.paket} onChange={handleChange} required>
                  <option value="">Bitte auswählen</option>
                  <option value="basis">Basis (500 € p. a.)</option>
                  <option value="netzwerk">Netzwerk (1.500 € p. a.)</option>
                  <option value="partner">Partner (3.000 € p. a.)</option>
                  <option value="alumni">Alumni (50–120 € p. a.)</option>
                  <option value="studierende">Studierende (kostenlos / 10 € p. a.)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="organisation">Organisation / Unternehmen</label>
                <input type="text" id="organisation" name="organisation" value={formData.organisation} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row form-row-3">
              <div className="form-group">
                <label htmlFor="vorname">Vorname *</label>
                <input type="text" id="vorname" name="vorname" value={formData.vorname} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="nachname">Nachname *</label>
                <input type="text" id="nachname" name="nachname" value={formData.nachname} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="nachricht">Nachricht (optional)</label>
              <textarea id="nachricht" name="nachricht" rows="2" value={formData.nachricht} onChange={handleChange}></textarea>
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
