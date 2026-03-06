import './Wirkung.css'

const impactCards = [
  {
    number: '3+',
    title: 'Projekte pro Jahr',
    text: 'Von Prototyp bis Wettbewerb – wir helfen, Ideen in die Praxis zu bringen.'
  },
  {
    number: '2',
    title: 'Auszeichnungen pro Jahr',
    text: 'Herausragende Leistungen sichtbar machen und Motivation stärken.'
  },
  {
    number: '1–2',
    title: 'Auslandsaufenthalte',
    text: 'Perspektiven erweitern – auch wenn das Budget knapp ist.'
  },
  {
    number: '\u2713',
    title: 'Ausstattung, die ankommt',
    text: 'Gezielt dort investieren, wo Lehre und Labore es am meisten brauchen.'
  }
]

export default function Wirkung() {
  return (
    <section id="wirkung" className="wirkung section">
      <div className="container">
        <div className="section-header">
          <h2>Das bewirken wir – messbar und sichtbar.</h2>
          <p className="section-subtitle">
            Mitgliedsbeiträge und Spenden werden zu konkreten Ergebnissen:
            Projekte kommen ins Rollen, Leistung bekommt Anerkennung, Chancen werden greifbar.
          </p>
        </div>

        <div className="impact-grid">
          {impactCards.map((card, i) => (
            <div className="impact-card" key={i}>
              <div className="impact-number">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
