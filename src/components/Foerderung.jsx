import './Foerderung.css'

const foerderarten = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 3h-8l-2 4h12z"/>
        <circle cx="12" cy="14" r="3"/>
      </svg>
    ),
    title: 'Projektförderung',
    text: 'Ob Prototyp, Wettbewerb, Fachexkursion oder Materialkosten: Wir unterstützen praxisnahe Vorhaben, die Studium und Lehre spürbar verbessern.',
    detail: 'Kurzer Antrag, klare Kriterien, schnelle Rückmeldung.',
    cta: { label: 'Details & Antrag', href: '#projektfoerderung' },
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Auslandsaufenthalte',
    text: 'Internationale Erfahrungen erweitern den Horizont – auch wenn das Budget knapp ist. Wir fördern Auslandsaufenthalte von Studierenden mit einem einmaligen Zuschuss von 600\u00A0Euro.',
    detail: 'Antragsfrist: jeweils bis zum 28. Februar.',
    cta: { label: 'Details & Unterlagen', href: '#auslandsfoerderung' }
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Auszeichnung der Jahrgangsbesten',
    text: 'Herausragende Studienleistungen verdienen Anerkennung. Zweimal im Jahr zeichnen wir die Jahrgangsbesten des Fachbereichs mit einem Preisgeld von 1.000\u00A0Euro aus.',
    detail: 'Vergabe jeweils zum Winter- und Sommersemester.',
    cta: null
  }
]

export default function Foerderung() {
  return (
    <section id="foerderung" className="foerderung section">
      <div className="container">
        <div className="section-header foerderung-header">
          <h2>So fördern wir – konkret und direkt.</h2>
          <p className="section-subtitle foerderung-subtitle">
            Projekte finanzieren, Auslandsaufenthalte ermöglichen, Leistung auszeichnen:
            Alle Mittel fließen ohne Umwege in Studierende und Lehre.
          </p>
        </div>

        <div className="foerderung-grid">
          {foerderarten.map((art, i) => (
            <div className="foerderart-card" key={i}>
              <div className="foerderart-icon">{art.icon}</div>
              <h3>{art.title}</h3>
              <p className="foerderart-text">{art.text}</p>
              <p className="foerderart-detail">{art.detail}</p>
              {art.cta && (
                <a href={art.cta.href} className="btn btn-primary btn-small foerderart-cta">
                  {art.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
