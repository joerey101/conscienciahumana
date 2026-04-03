import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/seo/PageSEO';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { CheckCircle } from '@phosphor-icons/react';

export function AutoevaluacionActivacion() {
  useRevealAnimation();

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title="Autoevaluación y Activación Interior | Programa guiado"
        description="Un recorrido guiado para observar con honestidad el presente, ordenar prioridades, activar hábitos y construir una nueva dirección personal con más coherencia."
        canonicalUrl="https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior"
      />

      {/* Hero */}
      <section className="section bg-[#FDF9F3]" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block', color: 'var(--amarillo)' }}>Programa Base</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Proceso de Autoevaluación y Activación Interior
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal mb-10" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Una puerta de entrada a la metodología Consciencia Humana para quienes necesitan claridad, cambio, hábitos, foco o acompañamiento.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-hero" style={{ display: 'inline-block', background: 'var(--amarillo)', color: 'white', border: 'none', padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: 50 }}>
              Quiero empezar por acá
            </Link>
          </div>
        </div>
      </section>

      {/* Detalles */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="reveal">
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}>¿Para quién es?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--texto-light)', lineHeight: 1.8, background: '#F8F9FA', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--amarillo)' }}>
                Personas en momento de revisión personal que necesitan estructura para observar lo que hoy les pasa, nombrar lo que ya no funciona, y empezar a activar decisiones, hábitos y dirección.
              </p>
            </div>

            <div className="reveal" style={{ animationDelay: '0.1s' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}>¿Qué trabajamos?</h2>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  "Autoobservación",
                  "Claridad",
                  "Activación interior",
                  "Hábitos",
                  "Seguimiento",
                  "Coherencia"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#FDF9F3', borderRadius: '12px' }}>
                    <CheckCircle size={20} weight="fill" color="var(--amarillo)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', color: 'var(--texto)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block' }}>Enfoque Práctico</span>
          <h2 className="section-title reveal">Un abordaje realista y aplicable</h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2.5rem' }}>
            El nombre del programa refleja su objetivo central: ser sobrio, directo y fácil de encajar tanto en ámbitos de desarrollo de vida como en espacios corporativos y formativos, alejándose del misticismo y acercándose a la utilidad pura.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>
            "No se puede ajustar una dirección si no se revisa primero el punto de partida."
          </h2>
          <div className="reveal" style={{ animationDelay: '0.2s', marginTop: '2rem' }}>
            <Link to="/agenda" className="btn-hero" style={{ display: 'inline-block', background: 'var(--amarillo)', color: 'white', border: 'none' }}>
              Quiero empezar por acá
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
