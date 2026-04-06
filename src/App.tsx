import './styles/globals.css'
import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Conversacion } from './components/sections/Conversacion'
import { Mision } from './components/sections/Mision'
import { Bitacora } from './components/sections/Bitacora'
import { Transformacion } from './components/sections/Transformacion'
import { Protagonista } from './components/sections/Protagonista'
import { DondeActuamos } from './components/sections/DondeActuamos'
import { Verticales } from './components/sections/Verticales'
import { Impacto } from './components/sections/Impacto'
import { Alianzas } from './components/sections/Alianzas'
import { Sumate } from './components/sections/Sumate'

import { useRevealAnimation } from './hooks/useRevealAnimation'
import { PageSEO } from './components/seo/PageSEO'
import { SchemaOrg } from './components/seo/SchemaOrg'
import { Placeholder } from './pages/Placeholder'
import { Metodo } from './pages/Metodo'
import { Organizaciones } from './pages/Organizaciones'
import { Nosotros } from './pages/Nosotros'
import { Programas } from './pages/Programas'
import { ElSalto } from './pages/programas/ElSalto'
import { AutoevaluacionActivacion } from './pages/programas/AutoevaluacionActivacion'
import { UnaMirada } from './pages/programas/UnaMirada'
import { Agenda } from './pages/Agenda'

function Home() {
  return (
    <main>
      <PageSEO
        title="Consciencia Humana | Claridad, activación y coherencia"
        description="Procesos de transformación para personas, equipos y organizaciones que buscan más claridad, dirección, hábitos conscientes y coherencia en su forma de vivir y liderar."
        canonicalUrl="https://conscienciahumana.com/"
        ogImage="https://conscienciahumana.com/img/hero-sunrise.png"
      />
      <SchemaOrg />
      <Hero />
      <Conversacion />
      <Mision />
      <Bitacora />
      <Transformacion />
      <Protagonista />
      <DondeActuamos />
      <Verticales />
      <Impacto />
      <Alianzas />
      <Sumate />
    </main>
  );
}

export default function App() {
  useRevealAnimation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/programas/el-salto-de-tu-vida" element={<ElSalto />} />
        <Route path="/programas/proceso-de-autoevaluacion-y-activacion-interior" element={<AutoevaluacionActivacion />} />
        <Route path="/programas/una-mirada-hacia-el-interior" element={<UnaMirada />} />
        <Route path="/organizaciones" element={<Organizaciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/impacto" element={<Placeholder title="Impacto" />} />
        <Route path="/recursos" element={<Placeholder title="Recursos" />} />
      </Routes>
      <Footer />
    </>
  )
}

