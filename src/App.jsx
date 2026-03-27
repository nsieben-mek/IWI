import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Kurzprofil from './components/Kurzprofil'
import Wirkung from './components/Wirkung'
import Foerderung from './components/Foerderung'
import Foerderdetails from './components/Foerderdetails'
import Mitgliedschaft from './components/Mitgliedschaft'
import MitgliedWerden from './components/MitgliedWerden'
import Events from './components/Events'
import Downloads from './components/Downloads'
import FAQ from './components/FAQ'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <main>
      <Hero />
      <Kurzprofil />
      <Wirkung />
      <Foerderung />
      <Foerderdetails />
      <Mitgliedschaft />
      <MitgliedWerden />
      <Events />
      <Downloads />
      <FAQ />
      <Kontakt />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
