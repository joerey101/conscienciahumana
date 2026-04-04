import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/seo/PageSEO';
import { useRevealAnimation } from '../../hooks/useRevealAnimation';
import { CheckCircle } from '@phosphor-icons/react';

export function UnaMirada() {
  useRevealAnimation();

  return (
    <main className="page-programa-individual">
      <PageSEO 
        title="Una Mirada hacia el Interior | Programa grupal y comunitario"
        description="Programa de desarrollo emocional, conversación y bienestar integral para grupos, organizaciones sociales y contextos que requieren cuidado, escucha y metodología adaptable."
        canonicalUrl="https://conscienciahumana.com/programas/una-mirada-hacia-el-interior"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block', color: 'var(--azul)' }}>Programa Grupal & Comunitario</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Una Mirada hacia el Interior
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal mb-10" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-hero" style={{ background: 'var(--azul)' }}>
              Consultar por esta línea de trabajo
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
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  "Organizaciones sociales",
                  "Espacios comunitarios",
                  "Dispositivos de acompañamiento",
                  "Grupos que requieren trabajo emocional con cuidado y contención"
                ].map((item, idx) => (
                  <li key={idx} className="triada-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8F9FA' }}>
                    <CheckCircle size={20} weight="fill" color="var(--azul)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '1.1rem', color: 'var(--texto)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal" style={{ animationDelay: '0.1s' }}>
              <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '2rem' }}>¿Qué trabajamos?</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[
                  "Autoconocimiento emocional", "Aceptación y autoaceptación", "Perdón",
                  "Gestión emocional saludable", "Resiliencia", "Bienestar integral", "Mirada de futuro"
                ].map((tag, idx) => (
                  <span key={idx} style={{ background: '#F0F4FA', color: 'var(--azul)', padding: '0.8rem 1.5rem', borderRadius: '50px', fontSize: '1rem', fontWeight: 500 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal">
            <span className="section-tag section-tag-light mb-4" style={{ display: 'inline-block' }}>Implementación</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Metodología y Formato</h2>
            <div className="triada-card" style={{ marginTop: '2.5rem', background: 'white' }}>
              <p className="text-lg" style={{ color: 'var(--texto)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Se compone de <strong>seis encuentros grupales</strong> en formato taller-conversatorio.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={24} color="var(--rosa)" /> <span>Encuentros en círculo para asegurar participación horizontal.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={24} color="var(--rosa)" /> <span>Prácticas de escucha mutua y habilitación de la palabra.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={24} color="var(--rosa)" /> <span>Ejercicios prácticos de bajada al territorio.</span></li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><CheckCircle size={24} color="var(--rosa)" /> <span>Dinámicas breves y propuestas corporales simples.</span></li>
              </ul>
              <p className="text-lg" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem', fontStyle: 'italic' }}>
                Mantiene un tono cercano y liviano que permite abordar los temas más profundos e incómodos de una forma absolutamente cuidada y respetuosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultado Observado */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2.5rem', color: 'var(--violeta-deep)' }}>Resultado Observado</h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2.5rem' }}>
            Altos grados de recepción y participación activa. Logramos la habilitación de la palabra en torno a emociones, miedos y deseos subyacentes, y la consecuente apertura de procesos de profunda reflexión sobre la historia personal, los vínculos y los patrones de conducta repetitivos.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>
            "Nadie se transforma solo. La comunidad y el cuidado son fundamentales."
          </h2>
          <div className="reveal" style={{ animationDelay: '0.2s', marginTop: '2rem' }}>
            <Link to="/agenda" className="btn-hero" style={{ background: 'var(--azul)', color: 'white', border: 'none' }}>
              Consultar por esta línea de trabajo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
