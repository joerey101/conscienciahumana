import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/seo/PageSEO';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { CheckCircle, CircleNotch } from '@phosphor-icons/react';

export function ElSalto() {
  useRevealAnimation();

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title="El Salto de tu VIDA | Programa de evolución personal"
        description="Un proceso de evolución personal para reconocer la incomodidad actual, activar nuevas respuestas y sostener una coherencia más consciente en la vida cotidiana."
        canonicalUrl="https://conscienciahumana.com/programas/el-salto-de-tu-vida"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Programa Personal</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            El Salto de tu VIDA
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal mb-10" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Un proceso de evolución personal organizado en tres etapas: Reconocimiento, Activación y Sustentabilidad.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-rosa shadow-hover">
              Quiero conocer este programa
            </Link>
          </div>
        </div>
      </section>

      {/* Detalles: Para quién y Qué trabaja */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="reveal">
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}>¿Para quién es?</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  "Personas con agotamiento o desconexión.",
                  "Quienes quieren revisar sus hábitos y dirección de vida.",
                  "Quienes necesitan claridad interna.",
                  "Aquellos que sienten que sus resultados actuales no expresan quiénes son ni cómo quieren vivir."
                ].map((item, idx) => (
                  <li key={idx} className="triada-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#F8F9FA' }}>
                    <CheckCircle size={24} weight="fill" color="var(--violeta-deep)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.1rem', color: 'var(--texto)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal" style={{ animationDelay: '0.1s' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}>¿Qué trabajamos?</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  "Claridad interna.",
                  "Observación de hábitos y patrones automáticos.",
                  "Revisión de resultados pasados.",
                  "Activación de nuevas respuestas.",
                  "Disciplina consciente.",
                  "Alineamiento y sostén."
                ].map((item, idx) => (
                  <li key={idx} className="triada-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FDF9F3' }}>
                    <CircleNotch size={24} weight="bold" color="var(--rosa)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '1.1rem', color: 'var(--texto)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Estructura del proceso */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block' }}>Metodología</span>
          <h2 className="section-title reveal">Estructura del proceso</h2>
          
          <div className="reveal" style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            <div className="triada-card" style={{ background: 'white', width: '280px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>1. Reconocer</h3>
              <p style={{ color: 'var(--texto-light)' }}>Observación y diagnóstico honesto del presente.</p>
            </div>
            
            <div className="desktop-only" style={{ color: 'var(--rosa)', fontSize: '2rem' }}>→</div>
            
            <div className="triada-card" style={{ background: 'white', width: '280px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>2. Activar</h3>
              <p style={{ color: 'var(--texto-light)' }}>Implementación de herramientas y nuevas respuestas.</p>
            </div>

            <div className="desktop-only" style={{ color: 'var(--rosa)', fontSize: '2rem' }}>→</div>

            <div className="triada-card" style={{ background: 'white', width: '280px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '0.5rem' }}>3. Sostener</h3>
              <p style={{ color: 'var(--texto-light)' }}>Construcción de hábitos y seguimiento de coherencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2.5rem', color: 'var(--violeta-deep)' }}>Resultado Esperado</h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2.5rem' }}>
            Más claridad para decidir, menos dispersión, mayor coherencia entre intención y acción, y, fundamentalmente, la incorporación de herramientas internas para volver al centro cuando el ritmo de vida desordena el proceso.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>
            "Es momento de mirar y activar un movimiento real."
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.1s' }}>
            Un programa que acompaña el salto que necesitás dar.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-rosa" style={{ display: 'inline-block' }}>
              Quiero conocer este programa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
