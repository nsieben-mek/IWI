import './Foerderdetails.css'

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const einzelprojektItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    text: 'Prototypen & technische Umsetzungen'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="4 15 4 20 20 20 20 15"/>
        <rect x="2" y="7" width="20" height="5" rx="1"/>
        <path d="M12 12v8"/>
      </svg>
    ),
    text: 'Wettbewerbe & Hackathons'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    text: 'Fachexkursionen & Konferenzbesuche'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    text: 'Material- & Sachkosten'
  }
]

const fachbereichItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    text: 'Laborausstattung & Geräte'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    text: 'Workshops, Gastvorträge & Fachveranstaltungen'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    text: 'Lehr- & Lernmaterialien'
  }
]

const auslandUnterlagen = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: 'Formloses Bewerbungsschreiben (Darstellung der Motivation)'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: (<><a href="/downloads/Vorlage 1_Antragsformular.pdf" target="_blank" rel="noopener noreferrer">Antragsformular</a> (ausgefüllt)</>)
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: (<><a href="/downloads/Vorlage 2_Kurzgutachten.pdf" target="_blank" rel="noopener noreferrer">Kurzgutachten</a> einer Professorin/eines Professors</>)
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    text: 'Statusbogen (Nachweis der erbrachten Studienleistungen)'
  }
]

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

        {/* ── Projektförderung ── */}
        <div className="foerderdetails-block" id="projektfoerderung">
          <h3>Projektförderung</h3>
          <p className="foerderdetails-intro">
            Wir fördern sowohl individuelle Studierendenprojekte als auch Vorhaben, die dem gesamten Fachbereich zugutekommen. Du hast eine Idee? Dann sprich uns an&nbsp;– wir freuen uns auf deinen Antrag.
          </p>

          <div className="foerderdetails-grid">
            {/* Studentische Einzelprojekte */}
            <div className="foerderdetails-subcard">
              <div className="subcard-header">
                <div className="subcard-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <div>
                  <h4>Studentische Einzelprojekte</h4>
                  <div className="subcard-amount">bis 1.000&nbsp;&euro;</div>
                </div>
              </div>

              <div className="subcard-section-label">Was wir fördern</div>
              <div className="foerderdetails-items">
                {einzelprojektItems.map((item, i) => (
                  <div className="foerderdetails-item" key={i}>
                    <div className="foerderdetails-item-icon">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="subcard-section-label">Voraussetzungen</div>
              <ul className="foerderdetails-checklist">
                <li><CheckIcon /><span>Studium am FB Ingenieurwissenschaften und Informatik der HSNR</span></li>
                <li><CheckIcon /><span>Klarer Bezug zu Studium oder Lehre</span></li>
                <li><CheckIcon /><span>Kurze Projektbeschreibung mit Kostenplan</span></li>
              </ul>
            </div>

            {/* Fachbereichsprojekte */}
            <div className="foerderdetails-subcard">
              <div className="subcard-header">
                <div className="subcard-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div>
                  <h4>Fachbereichsprojekte</h4>
                  <div className="subcard-amount-muted">individuell</div>
                </div>
              </div>

              <div className="subcard-section-label">Was wir fördern</div>
              <div className="foerderdetails-items">
                {fachbereichItems.map((item, i) => (
                  <div className="foerderdetails-item" key={i}>
                    <div className="foerderdetails-item-icon">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="subcard-section-label">Voraussetzungen</div>
              <ul className="foerderdetails-checklist">
                <li><CheckIcon /><span>Antragstellung durch Lehrende oder Mitarbeitende des Fachbereichs</span></li>
                <li><CheckIcon /><span>Darstellung des Nutzens für Studierende und Lehre</span></li>
              </ul>
            </div>
          </div>

          <div className="foerderdetails-ablauf">
            <h4>Ablauf</h4>
            <div className="stepper">
              <div className="stepper-step">
                <div className="stepper-number">1</div>
                <div className="stepper-content">
                  <strong>Projektidee beschreiben</strong>
                  <span>Kurze Beschreibung des Vorhabens und ein einfacher Kostenplan</span>
                </div>
              </div>
              <div className="stepper-step">
                <div className="stepper-number">2</div>
                <div className="stepper-content">
                  <strong>Antrag einreichen</strong>
                  <span>Per E-Mail an <a href="mailto:info@foerderverein-iundi.de?subject=Antrag%20Projektf%C3%B6rderung">info@foerderverein-iundi.de</a></span>
                </div>
              </div>
              <div className="stepper-step">
                <div className="stepper-number">3</div>
                <div className="stepper-content">
                  <strong>Entscheidung</strong>
                  <span>Prüfung und Rückmeldung durch den Vorstand</span>
                </div>
              </div>
            </div>
            <p className="foerderdetails-note">Die Förderung für Einzelprojekte beträgt bis zu 1.000&nbsp;€. Ein Rechtsanspruch auf Förderung besteht nicht.</p>
          </div>

          <div className="foerderdetails-downloads">
            <a href="mailto:info@foerderverein-iundi.de?subject=Antrag%20Projektf%C3%B6rderung" className="btn btn-primary btn-small">Projektidee einreichen</a>
          </div>
        </div>

        {/* ── Auslandsförderung ── */}
        <div className="foerderdetails-block" id="auslandsfoerderung">
          <div className="foerderdetails-block-header">
            <div>
              <h3>Auslandsförderung</h3>
              <p className="foerderdetails-intro">
                Internationale Erfahrungen erweitern den Horizont. Wir unterstützen Studierende, die ein Semester oder Praktikum im Ausland absolvieren, mit einem einmaligen Zuschuss.
              </p>
            </div>
            <div className="foerderdetails-highlight">
              <span className="highlight-amount">600&nbsp;&euro;</span>
              <span className="highlight-label">einmaliger Zuschuss</span>
            </div>
          </div>

          <div className="foerderdetails-grid">
            <div>
              <div className="subcard-section-label">Fördervoraussetzungen</div>
              <ul className="foerderdetails-checklist">
                <li><CheckIcon /><span>Studium am FB Ingenieurwissenschaften und Informatik der HSNR</span></li>
                <li><CheckIcon /><span>Überdurchschnittliche Studienleistungen</span></li>
                <li><CheckIcon /><span>Zusage eines Studienplatzes oder Praxissemesters im Ausland</span></li>
                <li><CheckIcon /><span>Motivationsschreiben mit Darstellung persönlicher Eignung</span></li>
              </ul>
            </div>
            <div>
              <div className="subcard-section-label">Benötigte Unterlagen</div>
              <div className="foerderdetails-items">
                {auslandUnterlagen.map((item, i) => (
                  <div className="foerderdetails-item" key={i}>
                    <div className="foerderdetails-item-icon">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
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
