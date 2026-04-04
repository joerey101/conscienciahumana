import { Link } from 'react-router-dom'
import { PageSEO } from '../../components/seo/PageSEO'
import { useRevealAnimation } from '../../hooks/useRevealAnimation'
import { CheckCircle, Zap, ArrowRight, Target, ShieldCheck, Sparkles } from 'lucide-react'
import { elSaltoPage } from '../../data/site'

export function ElSalto() {
  useRevealAnimation()

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title={elSaltoPage.seo.title}
        description={elSaltoPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/programas/el-salto-de-tu-vida"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--rosa)' }}>{elSaltoPage.estructura.tag}</span>
            <h1 className="reveal section-title">
              {elSaltoPage.hero.title}
            </h1>
            <p className="reveal section-subtitle centered">
              {elSaltoPage.hero.subtitle}
            </p>
            <div className="reveal">
              <Link to="/agenda" className="btn-rosa btn-hero">
                {elSaltoPage.ctas.primary}
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
            {elSaltoPage.textLargo.map((p, i) => (
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
              <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-violet-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--violeta-deep)' }}>{elSaltoPage.paraQuien.title}</h2>
              <ul className="space-y-4">
                {elSaltoPage.paraQuien.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <CheckCircle size={20} className="text-violet-500 shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-rosa" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--violeta-deep)' }}>{elSaltoPage.queTrabaja.title}</h2>
              <ul className="space-y-4">
                {elSaltoPage.queTrabaja.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <ShieldCheck size={20} className="text-rosa shrink-0 mt-1" />
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Estructura - Etapas */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="reveal section-title">{elSaltoPage.estructura.title}</h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {elSaltoPage.estructura.pasos.map((etapa, i) => (
              <div key={i} className="reveal group bg-gray-50 p-10 rounded-[40px] border border-transparent hover:border-violet-200 hover:bg-violet-50/50 transition-all">
                <div className="text-4xl font-black text-gray-200 group-hover:text-violet-200 transition-colors mb-6">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--violeta-deep)' }}>{etapa}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section bg-violet-900 text-white overflow-hidden relative">
        <div className="section-inner relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {elSaltoPage.resultado.title}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                {elSaltoPage.resultado.text}
              </p>
            </div>
            <div className="reveal flex justify-center">
              <Sparkles size={120} className="text-amber-400 opacity-50" />
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-rosa opacity-20 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-400 opacity-20 blur-[100px] rounded-full"></div>
      </section>

      {/* Cierre */}
      <section className="section bg-[#FDF9F3] text-center">
        <div className="section-inner">
          <div className="reveal">
            <Link to="/agenda" className="btn-rosa btn-hero">
              {elSaltoPage.ctas.primary}
              <ArrowRight className="inline-block ml-2" size={20} />
            </Link>
          </div>
          <div className="mt-8 reveal">
            <Link to="/programas" className="text-violet-600 font-bold hover:underline">
              {elSaltoPage.ctas.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
