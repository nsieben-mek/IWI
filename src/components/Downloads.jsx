import './Downloads.css'

const downloads = [
  {
    title: 'Impact-Bericht',
    description: 'Was wir im letzten Jahr konkret möglich gemacht haben.',
    type: 'PDF',
    href: '/downloads/impact-bericht.pdf',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  },
  {
    title: 'Flyer',
    description: 'Kurz erklärt, gut zum Weitergeben.',
    type: 'PDF',
    href: '/downloads/flyer.pdf',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: 'Satzung',
    description: 'Grundlagen, Zweck und Struktur des Vereins.',
    type: 'PDF',
    href: '/downloads/satzung.pdf',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    )
  },
  {
    title: 'Pakete & Beiträge',
    description: 'Alle Mitgliedschafts-Leistungen übersichtlich im Vergleich.',
    type: 'PDF',
    href: '/downloads/pakete-beitraege.pdf',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    )
  },
  {
    title: 'Förderkriterien',
    description: 'Voraussetzungen und Ablauf für Projektförderungen.',
    type: 'PDF',
    href: '/downloads/foerderkriterien.pdf',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <polyline points="16 13 12 17 8 13"/>
        <line x1="12" y1="17" x2="12" y2="9"/>
      </svg>
    )
  }
]

export default function Downloads() {
  return (
    <section id="downloads" className="downloads section">
      <div className="container">
        <div className="section-header">
          <h2>Dokumente &amp; Downloads</h2>
          <p className="section-subtitle">
            Satzung, Flyer, Impact-Bericht und Förderkriterien: alles schnell erreichbar.
          </p>
        </div>

        <div className="downloads-grid">
          {downloads.map((d, i) => (
            <div className="download-card" key={i}>
              <div className="download-icon">{d.icon}</div>
              <div className="download-content">
                <h3>{d.title}</h3>
                <p>{d.description}</p>
                <div className="download-meta">
                  <span className="download-type">{d.type}</span>
                </div>
              </div>
              <a href={d.href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-small">
                PDF öffnen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
