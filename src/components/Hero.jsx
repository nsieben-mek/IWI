import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-overline">Förderverein des Fachbereichs Ingenieurwissenschaften &amp; Informatik</p>
          <h1>Ingenieurausbildung stärken. Talente fördern. Praxis ermöglichen.</h1>
          <p className="hero-description">
            Seit vielen Jahren unterstützen wir dort, wo es zählt: bei studentischen Projekten,
            bei der Auszeichnung herausragender Leistungen, bei der Modernisierung von Laboren
            und bei Chancen wie Auslandsaufenthalten. Machen Sie mit – als Unternehmen, Alumni
            oder Studierende.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large" onClick={() => scrollTo('mitglied-werden')}>
              Jetzt Mitglied werden
            </button>
            <button className="btn btn-secondary btn-large" onClick={() => scrollTo('wirkung')}>
              Unsere Wirkung sehen
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-absolventenfeier.jpg"
            alt="Absolventenfeier am Fachbereich Ingenieurwissenschaften und Informatik der Hochschule Niederrhein"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
