import { Link } from 'react-router-dom'
import { PageSEO } from '../components/seo/PageSEO'
import { SchemaMetodo } from '../components/seo/SchemaMetodo'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { Eye, Zap, Anchor, CheckCircle } from 'lucide-react'
import { VisualProgress } from '../components/premium/VisualProgress'
import { metodoPage } from '../data/site'

export function Metodo() {
  useRevealAnimation()

  return (
    <main className="page-metodo">
      <PageSEO
        title={metodoPage.seo.title}
        description={metodoPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/metodo"
      />
      <SchemaMetodo />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <h1 className="reveal section-title">
              Método de autoevaluación, <br className="desktop-only" />
              activación y sostenimiento
            </h1>
            <p className="reveal section-subtitle centered">
              Un proceso para observar con honestidad la realidad actual, activar nuevas respuestas <br className="desktop-only" />
              y construir una coherencia más estable en la vida, en los vínculos y en la forma de habitar el trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto space-y-8">
            {metodoPage.intro.map((p, i) => (
              <p key={i} className="reveal text-xl" style={{ color: 'var(--texto)', lineHeight: 1.8, textAlign: 'center' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* El Método - Visual Progress */}
      <section className="section section-light" id="el-metodo">
        <div className="section-inner">
          <VisualProgress 
            headerTitle="Proceso Consciencia Humana"
            headerSubtitle="Etapas del acompañamiento"
            procedures={[
              {
                title: metodoPage.pasos[0].title,
                icon: Eye,
                steps: metodoPage.pasos[0].items
              },
              {
                title: metodoPage.pasos[1].title,
                icon: Zap,
                steps: metodoPage.pasos[1].items
              },
              {
                title: metodoPage.pasos[2].title,
                icon: Anchor,
                steps: metodoPage.pasos[2].items
              }
            ]}
          />
          
          <div className="mt-20 grid md:grid-cols-3 gap-12">
            {metodoPage.pasos.map((paso) => (
              <div key={paso.id} className="reveal bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--violeta-deep)' }}>{paso.title}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: 'var(--rosa)' }}>{paso.subtitle}</p>
                <p className="text-base text-gray-600 leading-relaxed">{paso.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="section-title mb-6">{metodoPage.comoTrabajamos.title}</h2>
              <p className="text-lg mb-8" style={{ color: 'var(--texto-light)' }}>{metodoPage.comoTrabajamos.intro}</p>
              <ul className="space-y-4">
                {metodoPage.comoTrabajamos.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal bg-violet-50 p-10 rounded-[40px] border border-violet-100">
              <p className="italic font-bold text-lg text-violet-800 leading-relaxed">
                "{metodoPage.comoTrabajamos.párrafoAdicional}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title">{metodoPage.paraQuien.title}</h2>
            <p className="reveal section-subtitle centered">{metodoPage.paraQuien.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metodoPage.paraQuien.items.map((item, i) => (
              <div key={i} className="reveal bg-white p-6 rounded-2xl flex items-center gap-4 shadow-sm border border-violet-50">
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué habilita */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal order-2 md:order-1">
              <div className="bg-amber-50 p-10 rounded-[40px] border border-amber-100">
                <p className="italic font-bold text-lg text-amber-900 leading-relaxed">
                  {metodoPage.habilitar.párrafoAdicional}
                </p>
              </div>
            </div>
            <div className="reveal order-1 md:order-2">
              <h2 className="section-title mb-6">{metodoPage.habilitar.title}</h2>
              <p className="text-lg mb-8" style={{ color: 'var(--texto-light)' }}>{metodoPage.habilitar.intro}</p>
              <div className="grid gap-4">
                {metodoPage.habilitar.items.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-amber-500 shrink-0 font-bold text-2xl" style={{ lineHeight: '1.2' }}>•</span>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section section-dark text-center overflow-hidden">
        <div className="section-inner relative z-10">
          <h2 className="reveal section-title text-white mb-6">
            {metodoPage.cierre.title}
          </h2>
          <p className="reveal text-2xl font-light mb-12 max-w-3xl mx-auto text-white/90">
            {metodoPage.cierre.text}
          </p>
          <div className="reveal">
            <Link to="/agenda" className="btn-rosa btn-hero">
              {metodoPage.cierre.cta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
