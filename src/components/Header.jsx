import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const navItems = [
  { label: 'Wirkung', id: 'wirkung' },
  { label: 'Förderung', id: 'foerderung' },
  { label: 'Mitgliedschaft', id: 'mitgliedschaft' },
  { label: 'Events', id: 'events' },
  { label: 'Downloads', id: 'downloads' },
  { label: 'Kontakt', id: 'kontakt' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver für aktive Sektion
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sectionIds = navItems.map(item => item.id)
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Sammle alle sichtbaren Sektionen
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        // Oberkante knapp unter dem Header, unteres Drittel als Schwelle
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
      }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  // Body-Scroll sperren wenn Mobilmenü offen
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
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
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo" onClick={goHome} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goHome() } }} role="button" tabIndex={0}>
          <img
            src="/images/hsnr-logo.svg"
            alt="Logo Hochschule Niederrhein – Förderverein IWI"
            className="logo-hsnr"
          />
        </div>

        <nav className={`nav${mobileOpen ? ' mobile-open' : ''}`} aria-label="Hauptnavigation">
          {/* Logo-Bereich im Mobilmenü */}
          <div className="nav-mobile-header">
            <img
              src="/images/hsnr-logo.svg"
              alt="Logo Hochschule Niederrhein"
              className="nav-mobile-logo"
            />
          </div>

          <div className="nav-links">
            {navItems.map(item => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="btn btn-primary nav-cta" onClick={() => scrollTo('mitglied-werden')}>
            Mitglied werden
          </button>
        </nav>

        <button
          className={`mobile-menu-toggle${mobileOpen ? ' active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  )
}
