import './styles/globals.css'

import { Navbar } from './components/layout/Navbar'
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
import { VisualProgress } from './components/modules/VisualProgress'
import { useRevealAnimation } from './hooks/useRevealAnimation'

export default function App() {
  useRevealAnimation()

  return (
    <>
      <Navbar />
      <main>
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
        <VisualProgress />
      </main>
      <Footer />
    </>
  )
}
