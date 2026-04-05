import { Link } from 'react-router-dom'
import { PageSEO } from '../components/seo/PageSEO'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { CheckCircle, Target, Users, BookOpen, Building2 } from 'lucide-react'
import { programasPage } from '../data/site'

export function Programas() {
  useRevealAnimation()

  return (
    <main className="page-programas">
      <PageSEO 
        title={programasPage.seo.title}
        description={programasPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/programas"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="section-intro-centered">
            <h1 className="reveal section-title">
              Programas para mirar, <br className="desktop-only" />
              activar y sostener un cambio real
            </h1>
            <p className="reveal section-subtitle centered">
              En Consciencia Humana diseñamos programas y procesos para personas, equipos y organizaciones que necesitan claridad, <br className="desktop-only" />
              dirección, nuevas herramientas y una forma más consciente de habitar la vida, los vínculos y el trabajo.
            </p>
            <div className="button-group reveal" style={{ justifyContent: 'center', marginTop: '3rem' }}>
              <Link to="/agenda" className="btn-rosa shadow-hover">
                {programasPage.hero.ctas.persona}
              </Link>
              <Link to="/organizaciones" className="btn-outline-violeta" style={{ border: '2px solid var(--violeta-soft)', color: 'var(--violeta-soft)', borderRadius: '50px', padding: '0.9rem 2rem', fontWeight: '700', textDecoration: 'none' }}>
                {programasPage.hero.ctas.organizacion}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto space-y-6">
            {programasPage.intro.map((p, i) => (
              <p key={i} className="reveal text-xl text-center leading-relaxed" style={{ color: 'var(--texto)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Programa Marco */}
      <section className="section bg-violet-50/50">
        <div className="section-inner">
          <div className="reveal text-center max-w-3xl mx-auto">
            <span className="section-tag">Marco Rector</span>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--violeta-deep)' }}>{programasPage.programaMarco.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {programasPage.programaMarco.text}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', width: '100%' }}>
              {programasPage.programaMarco.subestructura.map(item => (
                <span key={item} style={{ flex: 1, textAlign: 'center', padding: '0.6rem 0', background: '#EDE9FE', color: '#4C1D95', borderRadius: '12px', fontWeight: 700, fontSize: '0.95rem', border: '1px solid #DDD6FE' }}>
                  {item}
                </span>
              ))}
            </div>
            <Link to="/metodo" className="btn-rosa shadow-hover" style={{ textDecoration: 'none', borderRadius: '50px', padding: '1rem 0', display: 'block', textAlign: 'center', width: '70%', margin: '0 auto' }}>
              {programasPage.programaMarco.cta}
            </Link>
          </div>
          <div className="reveal w-full bg-violet-50/50 p-10 rounded-[32px] border border-violet-100/50 max-w-3xl mx-auto mt-12">
            <p className="text-xl md:text-2xl text-violet-900 leading-relaxed italic text-center font-medium">
              "{programasPage.programaMarco.footer}"
            </p>
          </div>
        </div>
      </section>

      {/* Para Personas */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title">{programasPage.paraPersonas.title}</h2>
            <p className="reveal section-subtitle centered">
              Espacios pensados para quienes sienten que algo necesita ser revisado, <br className="desktop-only" />
              ordenado o activado en su forma de vivir, decidir, vincularse y sostener dirección.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {programasPage.paraPersonas.items.map((item) => (
              <div key={item.id} className="reveal bg-white border border-gray-100 p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all flex flex-col">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">{item.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--violeta-deep)' }}>{item.name}</h3>
                <p className="text-base font-semibold mb-6 italic" style={{ color: 'var(--rosa)' }}>"{item.subtitle}"</p>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">{item.description}</p>
                <Link to={`/programas/${item.id}`} className="btn-rosa shadow-sm flex items-center justify-center">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunitarios */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title">{programasPage.comunitarios.title}</h2>
            <p className="reveal section-subtitle centered">
              Espacios diseñados para grupos, organizaciones sociales y contextos donde la transformación requiere escucha, <br className="desktop-only" />
              cuidado y capacidad de adaptación a realidades complejas.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {programasPage.comunitarios.items.map((item) => (
              <div key={item.id} className="reveal bg-white border border-gray-100 p-10 md:p-16 rounded-[32px] shadow-sm hover:shadow-xl transition-all max-w-4xl mx-auto flex flex-col">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">{item.tag}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--violeta-deep)' }}>{item.name}</h3>
                <p className="text-lg italic mb-8" style={{ color: 'var(--texto-light)' }}>{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-10">{item.description}</p>
                <Link to="/agenda" className="btn-rosa flex items-center justify-center shadow-hover mx-auto" style={{ textDecoration: 'none', padding: '1rem 2rem', borderRadius: '50px', width: 'fit-content' }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Organizaciones */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="section-intro-centered mb-16">
            <h2 className="reveal section-title">{programasPage.paraOrganizaciones.title}</h2>
            <p className="reveal section-subtitle centered">{programasPage.paraOrganizaciones.intro}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {programasPage.paraOrganizaciones.items.map((item, i) => (
              <div key={i} className="reveal bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
                <div className="flex gap-6">
                  <div className="hidden md:flex w-12 h-12 bg-white rounded-2xl items-center justify-center shadow-sm shrink-0">
                    {i === 0 && <Target className="text-violet-600" size={24} />}
                    {i === 1 && <BookOpen className="text-rosa" size={24} />}
                    {i === 2 && <Users className="text-amber-600" size={24} />}
                    {i === 3 && <Building2 className="text-green-600" size={24} />}
                  </div>
                  <div className="pl-1 md:pl-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-200/50 px-2 py-1 rounded inline-block mb-3">
                      {item.tag}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/organizaciones" className="btn-rosa btn-hero">
              {programasPage.paraOrganizaciones.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Orientación */}
      <section className="section bg-amber-50/30">
        <div className="section-inner">
          <div className="section-intro-centered mb-12">
            <h2 className="reveal section-title">{programasPage.ayuda.title}</h2>
            <p className="reveal section-subtitle centered">{programasPage.ayuda.text}</p>
          </div>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
            {programasPage.ayuda.items.map((item, i) => (
              <div key={i} className="reveal flex items-center gap-3 p-4 bg-white rounded-2xl border border-amber-100">
                <CheckCircle className="text-amber-500 shrink-0" size={20} />
                <span className="font-medium text-amber-900">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/agenda" className="btn-outline-violeta w-full md:w-auto text-center" style={{ border: '2px solid var(--violeta-soft)', color: 'var(--violeta-soft)', borderRadius: '50px', padding: '0.9rem 2rem', fontWeight: '700', textDecoration: 'none' }}>
              {programasPage.ayuda.ctas[1]}
            </Link>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="section section-dark text-center">
        <div className="section-inner">
          <div className="max-w-4xl mx-auto">
            <h2 className="reveal section-title text-white mb-10">
              {programasPage.cierre.title}
            </h2>
            <div className="flex flex-col gap-4 mb-16">
              {programasPage.cierre.text.map((t, i) => (
                <p key={i} className="reveal text-xl md:text-2xl font-light text-white/90 italic text-center">
                  {t}
                </p>
              ))}
            </div>
            <p className="reveal text-rosa font-black uppercase tracking-[0.2em] text-sm">
              {programasPage.cierre.footer}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
