import { Link } from 'react-router-dom'
import { PageSEO } from '../components/seo/PageSEO'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { Users, Target, Activity, Handshake, ShieldCheck, MessageSquare, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'
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
                <ArrowRight className="inline-block ml-2" size={20} />
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
              <div key={i} className="reveal bg-white p-6 rounded-2xl flex items-center gap-4 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center shrink-0">
                  <Activity className="text-rosa" size={24} />
                </div>
                <span className="font-medium text-gray-800 leading-tight">{item}</span>
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
            {organizacionesPage.trabajo.items.map((item, i) => (
              <div key={i} className={`reveal p-10 rounded-[40px] border flex flex-col ${i === 4 ? 'lg:col-span-2 bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'}`}>
                <div className="flex gap-6 items-start mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
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
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section bg-violet-900 text-white">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {organizacionesPage.metodologia.title}
              </h2>
              <div className="w-20 h-1 bg-rosa mb-8"></div>
              <p className="text-xl text-white/80 leading-relaxed">
                {organizacionesPage.metodologia.text}
              </p>
            </div>
            <div className="reveal flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-white/20 rounded-full animate-pulse flex items-center justify-center">
                  <Handshake size={80} className="text-white/40" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-rosa rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-amarillo rounded-full"></div>
              </div>
            </div>
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
                <CheckCircle className="text-green-500 mx-auto mb-6" size={32} />
                <span className="text-lg font-bold text-gray-800 leading-tight block">{item}</span>
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
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {organizacionesPage.formatos.items.map((item, i) => (
                <div key={i} className="reveal px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-bold text-sm tracking-wide flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-600"></div>
                  {item.toUpperCase()}
                </div>
              ))}
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
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center reveal">
            <Link to="/agenda" className="btn-rosa btn-hero w-full md:w-auto">
              {organizacionesPage.cta.ctas[0]}
              <Briefcase className="inline-block ml-2" size={20} />
            </Link>
            <Link to="/programas" className="btn-outline-violeta w-full md:w-auto" style={{ border: '2px solid var(--violeta-soft)', color: 'var(--violeta-soft)', borderRadius: '50px', padding: '1.2rem 2.5rem', fontWeight: '700', textDecoration: 'none', fontSize: '1.1rem' }}>
              {organizacionesPage.cta.ctas[1]}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
