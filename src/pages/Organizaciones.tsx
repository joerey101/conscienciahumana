import { Link } from 'react-router-dom'
import { PageSEO } from '../components/seo/PageSEO'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { Users, Target, Activity, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react'
import { organizacionesPage } from '../data/site'

export function Organizaciones() {
  useRevealAnimation()

  return (
    <main className="page-organizaciones">
      <PageSEO 
        title={organizacionesPage.seo.title}
        description={organizacionesPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/organizaciones"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--rosa)' }}>B2B & Institucional</span>
            <h1 className="reveal section-title">
              {organizacionesPage.hero.title}
            </h1>
            <p className="reveal section-subtitle centered">
              {organizacionesPage.hero.bajada}
            </p>
            <div className="reveal mt-12">
              <Link to="/agenda" className="btn-rosa btn-hero">
                {organizacionesPage.hero.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto space-y-8">
            {organizacionesPage.intro.map((p, i) => (
              <p key={i} className="reveal text-xl text-center leading-relaxed" style={{ color: 'var(--texto)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Situaciones */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title">{organizacionesPage.situaciones.title}</h2>
            <p className="reveal section-subtitle centered">{organizacionesPage.situaciones.intro}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizacionesPage.situaciones.items.map((item, i) => (
              <div key={i} className="reveal bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <span className="font-bold text-gray-800 leading-tight">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de trabajo */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="text-center mb-16">
            <h2 className="reveal section-title">{organizacionesPage.trabajo.title}</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {organizacionesPage.trabajo.items.map((item, i) => {
              const borderColors = ['#7C3AED', '#E91E63', '#D97706', '#16A34A', '#2563EB']
              return (
                <div key={i} className={`reveal p-10 rounded-[40px] border flex flex-col ${i === 4 ? 'lg:col-span-2 bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`} style={{ borderTop: `4px solid ${borderColors[i]}` }}>
                  <div className="flex gap-6 items-start mb-6">
                    <div className="hidden md:flex w-14 h-14 bg-white rounded-2xl items-center justify-center shadow-sm shrink-0">
                      {i === 0 && <Target className="text-violet-600" size={28} />}
                      {i === 1 && <Activity className="text-rosa" size={28} />}
                      {i === 2 && <MessageSquare className="text-amber-600" size={28} />}
                      {i === 3 && <ShieldCheck className="text-green-600" size={28} />}
                      {i === 4 && <Users className="text-blue-600" size={28} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--violeta-deep)' }}>{item.name}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section bg-violet-900 text-white">
        <div className="section-inner">
          <div className="reveal max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {organizacionesPage.metodologia.title}
              </h2>
              <div className="w-20 h-1 bg-rosa mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                {organizacionesPage.metodologia.text}
              </p>
            </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title mb-8">{organizacionesPage.diferencial.title}</h2>
            <p className="reveal section-subtitle centered mb-16">{organizacionesPage.diferencial.intro}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {organizacionesPage.diferencial.items.map((item, i) => (
              <div key={i} className="reveal p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <span className="text-lg font-bold text-gray-800 leading-tight block">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              </div>
            ))}
          </div>
          
          <p className="reveal text-2xl font-light italic text-gray-500 max-w-3xl mx-auto">
            "{organizacionesPage.diferencial.footer}"
          </p>
        </div>
      </section>

      {/* Formatos */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="max-w-5xl mx-auto bg-white p-12 md:p-20 rounded-[60px] shadow-sm border border-black/5">
            <div className="section-intro-centered mb-16">
              <h2 className="reveal section-title mb-6">{organizacionesPage.formatos.title}</h2>
              <p className="reveal section-subtitle centered">
                {organizacionesPage.formatos.intro}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
              {(() => {
                const colors = [
                  { border: '#7C3AED', bg: '#F5F3FF', text: '#4C1D95' },
                  { border: '#E91E63', bg: '#FFF0F6', text: '#9D174D' },
                  { border: '#D97706', bg: '#FFFBEB', text: '#92400E' },
                  { border: '#16A34A', bg: '#F0FDF4', text: '#14532D' },
                  { border: '#2563EB', bg: '#EFF6FF', text: '#1E3A8A' },
                  { border: '#0891B2', bg: '#ECFEFF', text: '#164E63' },
                ]
                return organizacionesPage.formatos.items.map((item, i) => {
                  const c = colors[i % colors.length]
                  return (
                    <div key={i} className="reveal rounded-2xl" style={{ background: c.bg, borderLeft: `4px solid ${c.border}`, padding: '1.5rem 2rem' }}>
                      <span className="font-bold text-base" style={{ color: c.text }}>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                    </div>
                  )
                })
              })()}
            </div>
            
            <p className="reveal text-center text-gray-500 italic max-w-2xl mx-auto">
              {organizacionesPage.formatos.footer}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-[#FDF9F3] text-center">
        <div className="section-inner">
          <div className="section-intro-centered mb-12">
            <h2 className="reveal section-title mb-4">{organizacionesPage.cta.title}</h2>
            <p className="reveal section-subtitle centered">{organizacionesPage.cta.text}</p>
          </div>
          <div className="flex justify-center reveal">
            <Link to="/programas" className="btn-outline-violeta w-full md:w-auto" style={{ border: '2px solid var(--violeta-soft)', color: 'var(--violeta-soft)', borderRadius: '50px', padding: '1.2rem 2.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '1.1rem' }}>
              {organizacionesPage.cta.ctas[1]}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
