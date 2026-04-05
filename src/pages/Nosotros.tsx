import { Link } from 'react-router-dom'
import { PageSEO } from '../components/seo/PageSEO'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { nosotrosPage } from '../data/site'
import StackedCards from '../components/StackedCards'

export function Nosotros() {
  useRevealAnimation()

  return (
    <main className="page-nosotros">
      <PageSEO 
        title={nosotrosPage.seo.title}
        description={nosotrosPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/nosotros"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Nuestra Visión</span>
            <h1 className="reveal section-title">
              {nosotrosPage.hero.title}
            </h1>
            <p className="reveal section-subtitle centered">
              {nosotrosPage.hero.bajada}
            </p>
          </div>
        </div>
      </section>

      {/* Creencias */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title mb-8">{nosotrosPage.creencias.title}</h2>
            <div className="space-y-6">
              {nosotrosPage.creencias.text.map((t, i) => (
                <p key={i} className="reveal section-subtitle centered italic">
                  "{t}"
                </p>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nosotrosPage.creencias.items.map((item, i) => {
              const colors = [
                { border: '#7C3AED', bg: '#F5F3FF', text: '#4C1D95' },
                { border: '#E91E63', bg: '#FFF0F6', text: '#9D174D' },
                { border: '#D97706', bg: '#FFFBEB', text: '#92400E' },
                { border: '#16A34A', bg: '#F0FDF4', text: '#14532D' },
              ]
              const c = colors[i]
              return (
                <div key={i} className="reveal rounded-[32px]" style={{ background: c.bg, borderTop: `4px solid ${c.border}`, padding: '2rem' }}>
                  <span className="font-bold leading-tight" style={{ color: c.text }}>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Acompañar */}
      <section className="section bg-violet-900 text-white overflow-hidden relative">
        <div className="section-inner relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {nosotrosPage.acompanar.title}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                {nosotrosPage.acompanar.text}
              </p>
            </div>
            <div className="reveal flex justify-center">
              <img src="/img/acompanar.jpeg" alt="Acompañar" className="w-full max-w-sm rounded-[32px] shadow-2xl object-cover aspect-square" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top"></div>
      </section>

      {/* Cuidado y Estructura */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title mb-6">
              Profundidad con cuidado. <br />
              Humanidad con estructura.
            </h2>
            <p className="reveal section-subtitle centered">
              {nosotrosPage.cuidado.text}
            </p>
          </div>
          
          <div className="w-full mb-8">
            <StackedCards />
          </div>
          
          <div className="reveal text-center w-full px-4">
            <p className="text-lg md:text-xl lg:text-[22px] font-bold text-black lg:whitespace-nowrap">
              {nosotrosPage.cuidado.footer}
            </p>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="section-intro-centered">
            <h2 className="reveal section-title mb-8">{nosotrosPage.equipo.title}</h2>
            <p className="reveal section-subtitle centered">
              {nosotrosPage.equipo.text}
            </p>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section bg-[#FDF9F3] text-center">
        <div className="section-inner">
          <div className="section-intro-centered mb-12">
            <h2 className="reveal section-title mb-4 italic leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              No acompañamos desde afuera.<br />
              Acompañamos desde presencia.
            </h2>
            <p className="reveal section-subtitle centered mb-12">
              {nosotrosPage.cierre.text}
            </p>
          </div>
          <div className="reveal">
            <Link to="/metodo" className="btn-rosa btn-hero">
              {nosotrosPage.cierre.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
