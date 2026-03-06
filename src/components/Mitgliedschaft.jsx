import './Mitgliedschaft.css'

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const foerderZwecke = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Studentische Projekte',
    text: 'Finanzierung von Projektarbeiten, die im regulären Hochschulbudget keinen Platz finden.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Auszeichnung der Jahrgangsbesten',
    text: 'Jährliche Prämierung herausragender Abschlussarbeiten beider Fachbereiche.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Auslandsaufenthalte',
    text: 'Zuschüsse für Studierende, die ein Semester oder Praktikum im Ausland absolvieren.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Laborausstattung',
    text: 'Beitrag zur Modernisierung und Aktualisierung der technischen Laborausstattung.'
  }
]

export default function Mitgliedschaft() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="mitgliedschaft" className="mitgliedschaft section">
      <div className="container">
        <div className="section-header">
          <h2>Mitgliedschaft</h2>
          <p className="section-subtitle">
            Der Förderverein lebt von Unternehmen, die den Ingenieurnachwuchs
            am Standort Krefeld stärken wollen. Kein Marketingversprechen,
            sondern ein ehrlicher Beitrag zur Ausbildung.
          </p>
        </div>

        {/* Zweispaltiges Layout: Card + Förderzwecke */}
        <div className="mitgliedschaft-layout">
          {/* Linke Spalte: Mitgliedschafts-Card */}
          <div className="mitgliedschaft-card">
            <div className="mitgliedschaft-card-type">Unternehmensmitgliedschaft</div>
            <div className="mitgliedschaft-card-price">
              <span className="price-amount">250 &euro;</span>
              <span className="price-period">pro Jahr</span>
            </div>

            <p className="mitgliedschaft-card-description">
              Ihr Jahresbeitrag fließt vollständig in die Förderung der ingenieurwissenschaftlichen
              Fachbereiche. Als gemeinnütziger Verein stellen wir eine steuerlich
              absetzbare Zuwendungsbestätigung aus.
            </p>

            <ul className="mitgliedschaft-card-benefits">
              <li>
                <CheckIcon />
                <span>Steuerlich absetzbar durch Zuwendungsbestätigung</span>
              </li>
              <li>
                <CheckIcon />
                <span>100 % der Mittel gehen in Lehre und Studierende</span>
              </li>
              <li>
                <CheckIcon />
                <span>Direkte Förderung des Ingenieurnachwuchses in Ihrer Region</span>
              </li>
              <li>
                <CheckIcon />
                <span>Stimmrecht in der Mitgliederversammlung</span>
              </li>
            </ul>

            <button className="btn btn-primary btn-large mitgliedschaft-card-cta" onClick={() => scrollTo('mitglied-werden')}>
              Mitglied werden
            </button>
          </div>

          {/* Rechte Spalte: Wohin fließt Ihr Beitrag */}
          <div className="foerderzwecke">
            <h3 className="foerderzwecke-title">Wohin Ihr Beitrag fließt</h3>
            <p className="foerderzwecke-subtitle">
              Alle Mittel werden ausschließlich für die satzungsgemäßen Zwecke eingesetzt:
            </p>
            <div className="foerderzwecke-list">
              {foerderZwecke.map((z, i) => (
                <div className="foerderzweck-item" key={i}>
                  <div className="foerderzweck-icon">{z.icon}</div>
                  <div className="foerderzweck-content">
                    <strong>{z.title}</strong>
                    <span>{z.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
