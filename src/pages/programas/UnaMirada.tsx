import { Link } from 'react-router-dom'
import { PageSEO } from '../../components/seo/PageSEO'
import { useRevealAnimation } from '../../hooks/useRevealAnimation'
import { CheckCircle, ArrowRight, Heart, Users, MessageSquare, Shield } from 'lucide-react'
import { unaMiradaPage } from '../../data/site'

export function UnaMirada() {
  useRevealAnimation()

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title={unaMiradaPage.seo.title}
        description={unaMiradaPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/programas/una-mirada-hacia-el-interior"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#F3F8FD]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--azul)' }}>Programa Comunitario</span>
            <h1 className="reveal section-title">
              {unaMiradaPage.hero.title}
            </h1>
            <p className="reveal section-subtitle centered">
              {unaMiradaPage.hero.subtitle}
            </p>
            <div className="reveal">
              <Link to="/agenda" className="btn-azul btn-hero" style={{ background: 'var(--azul)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>
                {unaMiradaPage.ctas.primary}
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción / Experiencia Ejecutada */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto space-y-8">
            {unaMiradaPage.textLargo.map((p, i) => (
              <p key={i} className="reveal text-xl text-center leading-relaxed" style={{ color: 'var(--texto)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones: Para quién y Qué trabaja */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="reveal bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <Users className="text-blue-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--violeta-deep)' }}>{unaMiradaPage.paraQuien.title}</h2>
              <ul className="space-y-4">
                {unaMiradaPage.paraQuien.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle size={20} className="text-blue-500 shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--violeta-deep)' }}>{unaMiradaPage.queTrabaja.title}</h2>
              <ul className="space-y-4">
                {unaMiradaPage.queTrabaja.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle size={20} className="text-indigo-500 shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Capacidad y Resultado */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex gap-4 items-center mb-6">
                <Shield className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold" style={{ color: 'var(--violeta-deep)' }}>{unaMiradaPage.capacidad.title}</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {unaMiradaPage.capacidad.text}
              </p>
            </div>
            <div className="reveal bg-blue-50 p-10 rounded-[40px] border border-blue-100">
              <div className="flex gap-4 items-center mb-6">
                <MessageSquare className="text-blue-700" size={32} />
                <h3 className="text-2xl font-bold text-blue-900">{unaMiradaPage.resultado.title}</h3>
              </div>
              <p className="text-lg text-blue-800 leading-relaxed italic">
                "{unaMiradaPage.resultado.text}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section bg-slate-900 text-white text-center">
        <div className="section-inner">
          <h2 className="reveal section-title text-white mb-12" style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            Cada contexto es único. Adaptamos la metodología para que sea real, segura y sustentable.
          </h2>
          <div className="reveal">
            <Link to="/agenda" className="btn-azul btn-hero" style={{ background: 'var(--azul)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: '700', textDecoration: 'none' }}>
              {unaMiradaPage.ctas.primary}
              <ArrowRight className="inline-block ml-2" size={20} />
            </Link>
          </div>
          <div className="mt-8 reveal">
            <Link to="/programas" className="text-blue-400 font-bold hover:underline">
              {unaMiradaPage.ctas.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
