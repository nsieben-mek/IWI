import { useState } from 'react'
import './FAQ.css'

const faqItems = [
  {
    q: 'Bekomme ich eine Spendenbescheinigung?',
    a: 'Ja, sofern die Voraussetzungen erfüllt sind. Der Förderverein ist als gemeinnützig anerkannt – sprechen Sie uns kurz an, und wir klären die Details.'
  },
  {
    q: 'Kann ich auch projektbezogen unterstützen?',
    a: 'Ja. Wir freuen uns über zweckgebundene Förderungen – idealerweise nach kurzem Austausch vorab, damit wir Ihre Unterstützung gezielt einsetzen können.'
  },
  {
    q: 'Wie schnell wird über Förderanträge entschieden?',
    a: 'In der Regel zeitnah nach Eingang – abhängig vom Umfang. Wir geben in jedem Fall eine Rückmeldung.'
  },
  {
    q: 'Kann ich als Unternehmen auch ohne Mitgliedschaft Projekte unterstützen?',
    a: 'Ja, projektbezogene Unterstützung ist jederzeit möglich. Sprechen Sie uns einfach an.'
  },
  {
    q: 'Kann ich die Mitgliedschaft jederzeit kündigen?',
    a: 'Die Kündigungsbedingungen sind in der Satzung festgelegt. In der Regel ist eine Kündigung zum Jahresende möglich. Details gerne auf Anfrage.'
  },
  {
    q: 'Wie kann ich als Studierende/r eine Förderung beantragen?',
    a: 'Nutzen Sie das Kontaktformular oder sprechen Sie uns direkt an. Wir helfen gerne bei der Antragstellung und klären gemeinsam die Kriterien.'
  },
  {
    q: 'Was passiert mit meinem Beitrag genau?',
    a: 'Alle Mittel fließen direkt in studentische Projekte, Auszeichnungen, Auslandsaufenthalte und die Verbesserung der technischen Ausstattung. Im jährlichen Impact-Bericht zeigen wir transparent, was erreicht wurde.'
  },
  {
    q: 'Kann ich als Alumni auch ohne Beitrag dabei bleiben?',
    a: 'Sie sind herzlich eingeladen, unsere Events zu besuchen und sich auf der Website über aktuelle Aktivitäten zu informieren. Eine formale Mitgliedschaft erfordert einen kleinen Beitrag, der aber flexibel gestaltbar ist.'
  },
  {
    q: 'Gibt es eine Mindestlaufzeit für die Mitgliedschaft?',
    a: 'Nein, Sie können flexibel einsteigen. Details zur Laufzeit und Kündigung regelt die Satzung, die Sie im Download-Bereich finden.'
  },
  {
    q: 'Ist der Förderverein Teil der Hochschule?',
    a: 'Nein, der Förderverein ist ein eigenständiger, gemeinnütziger Verein. Er arbeitet eng mit dem Fachbereich Ingenieurwissenschaften und Informatik zusammen, ist aber rechtlich unabhängig von der Hochschule Niederrhein.'
  },
  {
    q: 'Wie oft finden die Netzwerk-Events statt?',
    a: 'In der Regel einmal pro Semester. Mitglieder erhalten rechtzeitig eine Einladung mit allen Details.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header">
          <h2>Häufige Fragen – kurz beantwortet.</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{item.q}</span>
                <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              <div className="faq-answer" role="region">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <a href="#kontakt" className="btn btn-secondary">Meine Frage ist nicht dabei</a>
        </div>
      </div>
    </section>
  )
}
