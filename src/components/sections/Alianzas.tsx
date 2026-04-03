import { CheckCircle, ArrowUpRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Alianzas() {
  return (
    <section className="section" id="alianzas" style={{ background: '#F0F2F5' }}>
      <div className="section-inner">
        <div className="triada-intro reveal">
          <span className="section-tag">Institucional</span>
          <h2 className="section-title">Alianzas que impulsan transformaciones</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Fundación Consciencia Humana trabaja junto a organizaciones, empresas e instituciones que buscan promover liderazgo consciente, cultura responsable y transformación sostenible.
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/agenda" className="btn-rosa shadow-hover" style={{ display: 'inline-block', padding: '1rem 2rem', borderRadius: 50 }}>
              Solicitar reunión institucional
            </Link>
          </div>
        </div>

        <div className="platform-grid" style={{ marginTop: '5rem', alignItems: 'start' }}>
          <div className="reveal">
            <h3 style={{ fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1.5rem' }}>Nuestra Propuesta Institucional</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--texto-light)' }}>
              Trabajamos con aliados que desean incorporar una dimensión más consciente en sus equipos y proyectos mediante:
            </p>
            <ul className="platform-features">
              {['Diseño de programas formativos', 'Encuentros estratégicos para equipos', 'Espacios de liderazgo consciente', 'Experiencias presenciales o híbridas', 'Procesos de acompañamiento adaptados'].map((item) => (
                <li key={item}>
                  <CheckCircle size={18} weight="fill" color="var(--rosa)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h3 style={{ fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1.5rem' }}>Modalidades de Vinculación</h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {[
                { title: 'Alianzas estratégicas', desc: 'Co-diseño de programas o iniciativas conjuntas con impacto social.', color: 'var(--rosa)' },
                { title: 'Patrocinio de experiencias', desc: 'Apoyo financiero o logístico para programas abiertos o comunitarios.', color: 'var(--amarillo)' },
                { title: 'Implementación interna', desc: 'Diseño y facilitación de procesos dentro de la propia organización.', color: 'var(--verde)' },
              ].map((m) => (
                <div key={m.title} style={{ padding: '1.5rem', background: 'white', borderRadius: 12, borderLeft: `4px solid ${m.color}` }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{m.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--texto-light)' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="alianzas-summary-grid stagger">
          <div className="alianzas-summary-item reveal">
            <h3>Impacto Compartido</h3>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <ul className="audience-list">
                {['Mayor claridad en la toma de decisiones.', 'Equipos más alineados y comprometidos.', 'Cultura institucional fortalecida.', 'Liderazgos con coherencia y responsabilidad.'].map((item) => (
                  <li key={item}>
                    <ArrowUpRight size={18} weight="bold" color="var(--verde)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="alianzas-summary-item reveal">
            <h3>Criterios de Colaboración</h3>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto-light)', marginBottom: '1.5rem' }}>
                Priorizamos alianzas con organizaciones que compartan valores de ética, responsabilidad social y busquen un impacto real.
              </p>
              <div style={{ padding: '1.5rem', background: '#F8F6FF', borderRadius: 12, fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--texto)' }}>
                "El impacto sostenible comienza por el desarrollo interno de las personas."
              </div>
            </div>
          </div>
          <div className="alianzas-summary-item reveal">
            <h3>¿Cómo iniciar?</h3>
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto-light)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                El primer paso es una reunión institucional para comprender objetivos y analizar líneas de trabajo conjunto.
              </p>
              <Link to="/agenda" className="btn-rosa shadow-hover" style={{ display: 'inline-block', padding: '1.2rem 2.2rem', fontSize: '1rem', borderRadius: 50, alignSelf: 'flex-start' }}>
                Coordinar reunión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
