import './Foerderdetails.css'

export default function Foerderdetails() {
  return (
    <section className="foerderdetails section">
      <div className="container">
        <div className="section-header">
          <h2>Förderung im Detail</h2>
          <p className="section-subtitle">
            Alle Informationen zu Voraussetzungen, Ablauf und Antragsunterlagen auf einen Blick.
          </p>
        </div>

        <div className="foerderdetails-block foerderdetails-placeholder">
          <h3>Projektförderung</h3>
          <p>Detaillierte Informationen zu Förderkriterien, Ablauf und Antragsunterlagen für die Projektförderung folgen in Kürze.</p>
          <div className="foerderdetails-downloads">
            <a href="/downloads/foerderkriterien.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Förderkriterien
            </a>
            <a href="#kontakt" className="btn btn-secondary btn-small">Projektidee einreichen</a>
          </div>
        </div>

        <div className="foerderdetails-block" id="auslandsfoerderung">
          <h3>Auslandsförderung</h3>
          <div className="foerderdetails-grid">
            <div>
              <h4>Fördervoraussetzungen</h4>
              <ul>
                <li>Studium am FB Ingenieurwissenschaften und Informatik der HSNR</li>
                <li>Überdurchschnittliche Studienleistungen</li>
                <li>Zusage eines Studienplatzes oder Praxissemesters im Ausland</li>
                <li>Motivationsschreiben mit Darstellung persönlicher Eignung</li>
              </ul>
            </div>
            <div>
              <h4>Benötigte Unterlagen</h4>
              <ul>
                <li>Formloses Bewerbungsschreiben (Darstellung der Motivation)</li>
                <li><a href="/downloads/Vorlage 1_Antragsformular.pdf" target="_blank" rel="noopener noreferrer">Antragsformular</a> (ausgefüllt)</li>
                <li><a href="/downloads/Vorlage 2_Kurzgutachten.pdf" target="_blank" rel="noopener noreferrer">Kurzgutachten</a> einer Professorin/eines Professors</li>
                <li>Statusbogen (Nachweis der erbrachten Studienleistungen)</li>
              </ul>
            </div>
          </div>
          <div className="foerderdetails-ablauf">
            <h4>Ablauf</h4>
            <div className="stepper">
              <div className="stepper-step">
                <div className="stepper-number">1</div>
                <div className="stepper-content">
                  <strong>Unterlagen zusammenstellen</strong>
                  <span>Bewerbungsschreiben, Antragsformular, Kurzgutachten und Statusbogen</span>
                </div>
              </div>
              <div className="stepper-step">
                <div className="stepper-number">2</div>
                <div className="stepper-content">
                  <strong>Beim Dekan einreichen</strong>
                  <span>Antrag schriftlich einreichen – Frist: jeweils 28. Februar</span>
                </div>
              </div>
              <div className="stepper-step">
                <div className="stepper-number">3</div>
                <div className="stepper-content">
                  <strong>Entscheidung</strong>
                  <span>Prüfung durch den Dekan, finale Entscheidung durch den Förderverein</span>
                </div>
              </div>
            </div>
            <p className="foerderdetails-note">Die Förderung beträgt einmalig 600&nbsp;€. Ein Rechtsanspruch besteht nicht.</p>
          </div>
          <div className="foerderdetails-downloads">
            <a href="/downloads/Vorlage 1_Antragsformular.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Antragsformular
            </a>
            <a href="/downloads/Vorlage 2_Kurzgutachten.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Kurzgutachten
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
