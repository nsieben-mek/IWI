import './Kurzprofil.css'

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: 'Projekte finanzieren',
    text: 'Praxisnahe Vorhaben von Studierenden direkt unterstützen'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: 'Studierende auszeichnen',
    text: 'Herausragende Leistungen sichtbar machen und belohnen'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 3h-8l-2 4h12z"/>
        <circle cx="12" cy="14" r="3"/>
      </svg>
    ),
    title: 'Labore modernisieren',
    text: 'Technische Ausstattung verbessern, wo es die Lehre braucht'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Auslandsaufenthalte ermöglichen',
    text: 'Internationale Erfahrungen auch bei knappem Budget'
  }
]

export default function Kurzprofil() {
  return (
    <section className="kurzprofil">
      <div className="container">
        <div className="section-header kurzprofil-header">
          <h2>Gemeinnützig. Direkt am Fachbereich.</h2>
          <p className="section-subtitle">
            Der Förderverein der ingenieurwissenschaftlichen Fachbereiche
            der Hochschule Niederrhein, Standort Krefeld&nbsp;e.&thinsp;V.
            unterstützt dort, wo es zählt. Ihr Beitrag fließt direkt in:
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
