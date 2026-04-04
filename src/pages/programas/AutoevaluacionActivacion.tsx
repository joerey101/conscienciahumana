import { Link } from 'react-router-dom'
import { PageSEO } from '../../components/seo/PageSEO'
import { useRevealAnimation } from '../../hooks/useRevealAnimation'
import { CheckCircle, ArrowRight, ClipboardCheck, Sparkles, Target, Zap } from 'lucide-react'
import { autoevaluacionPage } from '../../data/site'

export function AutoevaluacionActivacion() {
  useRevealAnimation()

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title={autoevaluacionPage.seo.title}
        description={autoevaluacionPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Proceso Guiado</span>
            <h1 className="reveal section-title">
              {autoevaluacionPage.hero.title}
            </h1>
            <p className="reveal section-subtitle centered">
              {autoevaluacionPage.hero.subtitle}
            </p>
            <div className="reveal">
              <Link to="/agenda" className="btn-rosa btn-hero">
                {autoevaluacionPage.ctas.primary}
                <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto space-y-8">
            {autoevaluacionPage.textLargo.map((p, i) => (
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
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-amber-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--violeta-deep)' }}>{autoevaluacionPage.paraQuien.title}</h2>
              <p className="text-gray-600 mb-8">{autoevaluacionPage.paraQuien.intro}</p>
              <ul className="space-y-4">
                {autoevaluacionPage.paraQuien.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle size={20} className="text-amber-500 shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-violet-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--violeta-deep)' }}>{autoevaluacionPage.queTrabaja.title}</h2>
              <ul className="space-y-4">
                {autoevaluacionPage.queTrabaja.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <ClipboardCheck size={20} className="text-violet-500 shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Valor Diferencial */}
      <section className="section bg-white text-center">
        <div className="section-inner max-w-4xl mx-auto">
          <div className="reveal mb-8">
            <Sparkles size={48} className="text-amber-400 mx-auto" />
          </div>
          <h2 className="reveal section-title mb-6">{autoevaluacionPage.valor.title}</h2>
          <p className="reveal text-2xl font-light leading-relaxed text-gray-600">
            {autoevaluacionPage.valor.text}
          </p>
        </div>
      </section>

      {/* Cierre */}
      <section className="section bg-[#FDF9F3] text-center">
        <div className="section-inner">
          <div className="reveal">
            <Link to="/agenda" className="btn-rosa btn-hero">
              {autoevaluacionPage.ctas.primary}
              <ArrowRight className="inline-block ml-2" size={20} />
            </Link>
          </div>
          <div className="mt-8 reveal">
            <Link to="/programas" className="text-violet-600 font-bold hover:underline">
              {autoevaluacionPage.ctas.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
