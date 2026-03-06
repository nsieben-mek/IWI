import './Mitgliedschaft.css'

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const zielgruppen = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    label: 'Unternehmen',
    text: 'Talente treffen, Praxis stärken, regional sichtbar werden.',
    anchor: 'pakete-unternehmen'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    label: 'Alumni & Förderfreunde',
    text: 'Verbunden bleiben und konkret etwas zurückgeben.',
    anchor: 'pakete-persoenlich'
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 12 3 12 0v-5"/>
      </svg>
    ),
    label: 'Studierende',
    text: 'Mitgestalten, Förderung nutzen, Kontakte aufbauen.',
    anchor: 'pakete-persoenlich'
  }
]

const pakete = [
  {
    group: 'unternehmen',
    type: 'Unternehmen',
    name: 'Basis',
    tagline: 'Sichtbar unterstützen',
    price: '500 \u20AC p.\u202Fa.',
    description: 'Ideal zum Einstieg – Sie fördern Nachwuchs und werden als Unterstützer sichtbar.',
    leistungen: ['Namentliche Nennung auf der Website', 'Updates per E-Mail', 'Einladung zum jährlichen Fördervereins-Update', 'Jährlicher Impact-Bericht'],
    highlighted: false,
    badge: null
  },
  {
    group: 'unternehmen',
    type: 'Unternehmen',
    name: 'Netzwerk',
    tagline: 'Aktiv vernetzen',
    price: '1.500 \u20AC p.\u202Fa.',
    description: 'Mehr Austausch, mehr Kontakte, mehr Einblicke in studentische Projekte.',
    leistungen: ['Alle Leistungen aus Basis', 'Einladung zu Netzwerkveranstaltungen', 'Teilnahme an Projekt-Pitch-Abenden', 'Logo-Platzierung auf der Website', 'Themenvorschläge für studentische Projekte'],
    highlighted: true,
    badge: 'Empfohlen'
  },
  {
    group: 'unternehmen',
    type: 'Unternehmen',
    name: 'Partner',
    tagline: 'Mitgestalten & positionieren',
    price: '3.000 \u20AC p.\u202Fa.',
    description: 'Für Unternehmen, die aktiv dabei sein wollen – sichtbar und inhaltlich.',
    leistungen: ['Alle Leistungen aus Netzwerk', 'Aktive Teilnahme an Projekt-Pitches (Jury/Feedback)', 'Kurzvorstellung bei einem Fördervereins-Event', 'Hervorgehobene Logo-Platzierung als Partner', 'Beratende Mitwirkung bei Projektförderungen'],
    highlighted: false,
    badge: null
  },
  {
    group: 'persoenlich',
    type: 'Einzelperson',
    name: 'Alumni & Förderfreunde',
    tagline: 'Verbunden bleiben',
    price: '50–120 \u20AC p.\u202Fa.',
    description: 'Kleiner Beitrag, große Wirkung – und nah dran am Fachbereich.',
    leistungen: ['Jährlicher Impact-Bericht', 'Einladung zu ausgewählten Netzwerkveranstaltungen', 'Einblicke in geförderte Projekte', 'Optionale namentliche Nennung'],
    highlighted: false,
    badge: null
  },
  {
    group: 'persoenlich',
    type: 'Förderfreunde',
    name: 'Studierende',
    tagline: 'Einsteigen & mitmachen',
    price: 'kostenlos / 10 \u20AC p.\u202Fa.',
    description: 'Infos, Chancen, Kontakte – ohne Hürden.',
    leistungen: ['Informationen zu Fördermöglichkeiten', 'Teilnahme an Projekt-Pitches und Events', 'Eigene Projektideen einreichen', 'Kontakt zu Unternehmen und Alumni'],
    highlighted: false,
    badge: null
  }
]

export default function Mitgliedschaft() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const unternehmensPakete = pakete.filter(p => p.group === 'unternehmen')
  const persoenlichePakete = pakete.filter(p => p.group === 'persoenlich')

  return (
    <section id="mitgliedschaft" className="mitgliedschaft section">
      <div className="container">
        <div className="section-header">
          <h2>Mitgliedschaft – für jeden das passende Paket.</h2>
          <p className="section-subtitle">
            Ob Unternehmen, Alumni oder Studierende: Wählen Sie Ihren Einstieg
            und sehen Sie jedes Jahr, was Ihr Beitrag bewirkt.
          </p>
        </div>

        {/* Zielgruppen-Einstieg */}
        <div className="zielgruppen-nav">
          {zielgruppen.map((g, i) => (
            <button
              className="zielgruppe-chip"
              key={i}
              onClick={() => scrollTo(g.anchor)}
            >
              <div className="zielgruppe-chip-icon">{g.icon}</div>
              <div className="zielgruppe-chip-content">
                <strong>{g.label}</strong>
                <span>{g.text}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Unternehmens-Pakete */}
        <div id="pakete-unternehmen" className="pakete-group">
          <h3 className="pakete-group-title">Für Unternehmen</h3>
          <div className="pakete-grid pakete-grid-3">
            {unternehmensPakete.map((p, i) => (
              <div className={`paket-card${p.highlighted ? ' highlighted' : ''}`} key={i}>
                {p.badge && <span className="paket-badge">{p.badge}</span>}
                <div className="paket-type">{p.type}</div>
                <h4 className="paket-name">{p.name}</h4>
                <div className="paket-tagline">{p.tagline}</div>
                <div className="paket-price">{p.price}</div>
                <p className="paket-description">{p.description}</p>
                <ul className="paket-leistungen">
                  {p.leistungen.map((l, j) => (
                    <li key={j}>
                      <CheckIcon />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Persönliche Pakete */}
        <div id="pakete-persoenlich" className="pakete-group">
          <h3 className="pakete-group-title">Für Alumni, Förderfreunde & Studierende</h3>
          <div className="pakete-grid pakete-grid-2">
            {persoenlichePakete.map((p, i) => (
              <div className={`paket-card${p.highlighted ? ' highlighted' : ''}`} key={i}>
                {p.badge && <span className="paket-badge">{p.badge}</span>}
                <div className="paket-type">{p.type}</div>
                <h4 className="paket-name">{p.name}</h4>
                <div className="paket-tagline">{p.tagline}</div>
                <div className="paket-price">{p.price}</div>
                <p className="paket-description">{p.description}</p>
                <ul className="paket-leistungen">
                  {p.leistungen.map((l, j) => (
                    <li key={j}>
                      <CheckIcon />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="section-cta">
          <button className="btn btn-primary btn-large" onClick={() => scrollTo('mitglied-werden')}>
            Mitglied werden
          </button>
          <a href="#downloads" className="btn btn-secondary btn-large">Pakete als PDF</a>
        </div>
      </div>
    </section>
  )
}
