import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden="true"></div>

      <div className="container">
        <div className="footer-content">
          {/* Oberer Bereich: Logo/Brand + Navigation */}
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo" onClick={goHome} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goHome() } }} role="button" tabIndex={0}>
                <img
                  src="/images/hsnr-logo.svg"
                  alt="Logo Hochschule Niederrhein"
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-brand-name">
                Förderverein der ingenieurwissenschaftlichen
                Fachbereiche der Hochschule Niederrhein,
                Standort Krefeld e.&thinsp;V.
              </p>
              <p className="footer-tagline">
                Gemeinnützig. Transparent. Wirkung vor Werbung.
              </p>

              {/* Social Media */}
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                  title="LinkedIn (in Kürze verfügbar)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                  title="Instagram (in Kürze verfügbar)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Facebook"
                  title="Facebook (in Kürze verfügbar)"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

              </div>
            </div>

            {/* Navigations-Spalten */}
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <button onClick={() => scrollTo('wirkung')}>Wirkung</button>
                <button onClick={() => scrollTo('foerderung')}>Förderung</button>
                <button onClick={() => scrollTo('mitgliedschaft')}>Mitgliedschaft</button>
                <button onClick={() => scrollTo('events')}>Events</button>
              </div>

              <div className="footer-column">
                <h4>Service</h4>
                <button onClick={() => scrollTo('downloads')}>Downloads</button>
                <button onClick={() => scrollTo('kontakt')}>Kontakt</button>
                <button onClick={() => scrollTo('faq')}>FAQ</button>
                <button onClick={() => scrollTo('mitglied-werden')}>Mitglied werden</button>
              </div>

              <div className="footer-column">
                <h4>Rechtliches</h4>
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
                <a href="/downloads/satzung.pdf" target="_blank" rel="noopener noreferrer">Satzung (PDF)</a>
              </div>

              <div className="footer-column">
                <h4>Hochschule</h4>
                <a href="https://www.hs-niederrhein.de/ingenieurwissenschaften-informatik/" target="_blank" rel="noopener noreferrer">
                  FB Ingenieurwiss. &amp; Informatik
                </a>
                <a href="https://www.hs-niederrhein.de" target="_blank" rel="noopener noreferrer">
                  HS Niederrhein
                </a>
              </div>
            </div>
          </div>

          {/* Unterer Bereich */}
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} Förderverein der ingenieurwissenschaftlichen Fachbereiche
              der Hochschule Niederrhein, Standort Krefeld e.&thinsp;V.
            </p>
            <p className="footer-bottom-sub">
              Ein gemeinnütziger Verein zur Förderung von Lehre, Forschung und Studierenden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
