import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LegalPage.css'

export default function Datenschutz() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Datenschutzerklärung – Förderverein IWI | Hochschule Niederrhein'
    return () => { document.title = 'Förderverein IWI – Hochschule Niederrhein | Ingenieurausbildung stärken' }
  }, [])

  return (
    <div className="legal-page">
      <div className="container">
        <button className="btn btn-secondary btn-small legal-back" onClick={() => navigate('/')}>
          Zurück zur Startseite
        </button>

        <h1>Datenschutzerklärung</h1>

        <h2>1. Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
          Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
          Text aufgeführten Datenschutzerklärung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
        </p>
        <p>
          Förderverein der ingenieurwissenschaftlichen Fachbereiche<br />
          der Hochschule Niederrhein, Standort Krefeld e.&thinsp;V.<br />
          c/o Unternehmerschaft Niederrhein e.&thinsp;V.<br />
          Ostwall 227, 47798 Krefeld<br />
          E-Mail: info@iwi-hs-niederrhein.de
        </p>

        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.&thinsp;B.
          über ein Kontaktformular. Darüber hinaus werden beim Besuch der Website automatisch
          technische Daten durch den Webserver erfasst (sogenannte Server-Log-Dateien, z.&thinsp;B.
          IP-Adresse, Browsertyp oder Uhrzeit des Zugriffs). Diese Website setzt keine Cookies
          ein und verwendet keine Analyse- oder Tracking-Tools.
        </p>

        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Bearbeitung Ihrer Anfragen verwendet werden.
        </p>

        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
          Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
          Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
          Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
          Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
          Aufsichtsbehörde zu.
        </p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
          personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
          des Hosters gespeichert. Hierbei kann es sich v.&thinsp;a. um IP-Adressen, Kontaktanfragen,
          Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
          sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p>
          Der Einsatz des Hosters erfolgt im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6
          Abs. 1 lit. f DSGVO).
        </p>

        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&thinsp;B. bei der
          Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
          der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          Förderverein der ingenieurwissenschaftlichen Fachbereiche<br />
          der Hochschule Niederrhein, Standort Krefeld e.&thinsp;V.<br />
          c/o Unternehmerschaft Niederrhein e.&thinsp;V.<br />
          Ostwall 227<br />
          47798 Krefeld<br />
          E-Mail: info@iwi-hs-niederrhein.de
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten entscheidet.
        </p>

        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
          oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
          sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben.
        </p>

        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
          möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die
          Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
          unberührt.
        </p>

        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
          einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen
          Fragen ist:
        </p>
        <p>
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
          Postfach 20 04 44<br />
          40102 Düsseldorf<br />
          <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>
        </p>

        <h2>4. Datenerfassung auf dieser Website</h2>

        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die
          Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
          gestattet.
        </p>

        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
          Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
          Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
          Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für
          die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
          Aufbewahrungsfristen – bleiben unberührt.
        </p>

        <h3>Mitgliedschaftsformular</h3>
        <p>
          Wenn Sie über das Mitgliedschaftsformular eine Anfrage zur Mitgliedschaft stellen,
          werden die von Ihnen eingegebenen Daten (Name, E-Mail, Organisation) zur
          Bearbeitung Ihrer Anfrage gespeichert und per E-Mail an den
          Verein übermittelt.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
          Maßnahmen). Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
          Erhebung nicht mehr erforderlich sind, es sei denn, es bestehen gesetzliche
          Aufbewahrungspflichten.
        </p>

        <h2>5. Keine Analyse-Tools und Cookies</h2>
        <p>
          Diese Website verwendet keine Tracking- oder Analyse-Tools (wie Google Analytics o.&thinsp;Ä.)
          und setzt keine Cookies zu Werbezwecken ein. Es werden lediglich technisch notwendige
          Daten erfasst, die für den Betrieb der Website erforderlich sind.
        </p>

        <h2>6. SSL- bzw. TLS-Verschlüsselung</h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
          Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
          Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und
          an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
          übermitteln, nicht von Dritten mitgelesen werden.
        </p>

        <p className="legal-updated">
          Stand: März 2026
        </p>
      </div>
    </div>
  )
}
