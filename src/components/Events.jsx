import './Events.css'

/*
 * Aktuelle Veranstaltung konfigurieren:
 * - Objekt setzen → Ankündigungskarte wird angezeigt
 * - null setzen   → allgemeiner Hinweis "Termin wird bekannt gegeben"
 */
const currentEvent = {
  title: 'Netzwerk-Abend Sommersemester 2026',
  date: '12. Juni 2026, 18:00 Uhr',
  location: 'Campus Krefeld Süd, Gebäude S, Raum S01',
  description: 'Projekt-Pitches von Studierenden, Austausch mit Unternehmenspartnern und Alumni, Networking bei Getränken und Fingerfood. Offen für alle Interessierten.',
  ctaLabel: 'Jetzt anmelden',
  ctaLink: '#kontakt',
}

export default function Events() {
  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="section-header">
          <h2>Veranstaltungen und Netzwerk</h2>
          <p className="section-subtitle">
            Wo Studierende, Unternehmen und Alumni zusammenkommen.
          </p>
        </div>

        <div className="events-layout">
          <div className="events-visual">
            <img
              src="/images/events-open-house-2.jpg"
              alt="Studierende präsentieren Projekte bei den Engineering Days am Fachbereich Ingenieurwissenschaften und Informatik"
              className="event-image"
            />
          </div>

          <div className="events-text">
            <p className="events-lead">
              Der Förderverein organisiert regelmäßig Veranstaltungen, die Praxis
              und Hochschule zusammenbringen.
            </p>

            <ul className="events-formats">
              <li>
                <strong>Netzwerk-Abende</strong> – Projekt-Pitches, Austausch mit
                Unternehmen, echte Kontakte
              </li>
              <li>
                <strong>Exkursionen</strong> – Einblicke in Unternehmen und
                Forschungseinrichtungen der Region
              </li>
              <li>
                <strong>Preisverleihungen</strong> – Auszeichnung herausragender
                studentischer Arbeiten
              </li>
            </ul>

            {/* Aktuelle Veranstaltung oder Hinweis */}
            {currentEvent ? (
              <div className="event-announcement">
                <div className="event-announcement-label">Nächste Veranstaltung</div>
                <h3 className="event-announcement-title">{currentEvent.title}</h3>
                <div className="event-announcement-meta">
                  <span className="event-meta-item">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {currentEvent.date}
                  </span>
                  {currentEvent.location && (
                    <span className="event-meta-item">
                      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {currentEvent.location}
                    </span>
                  )}
                </div>
                <p className="event-announcement-desc">{currentEvent.description}</p>
                {currentEvent.ctaLink && (
                  <a href={currentEvent.ctaLink} className="btn btn-primary">
                    {currentEvent.ctaLabel || 'Mehr erfahren'}
                  </a>
                )}
              </div>
            ) : (
              <div className="event-notice">
                <p>
                  Aktuell ist keine Veranstaltung geplant. Neue Termine werden
                  hier auf der Website veröffentlicht.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
