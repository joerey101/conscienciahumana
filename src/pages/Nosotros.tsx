import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { CheckCircle, UserCircle } from '@phosphor-icons/react';

export function Nosotros() {
  useRevealAnimation();

  return (
    <main className="page-nosotros">
      <PageSEO 
        title="Nosotros | Quiénes somos en Consciencia Humana"
        description="Conocé la visión, el criterio y la forma de acompañar de Consciencia Humana: profundidad con cuidado, humanidad con estructura y procesos con sentido."
        canonicalUrl="https://conscienciahumana.com/nosotros"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag reveal mb-4" style={{ display: 'inline-block', color: 'var(--rosa)' }}>El Espacio</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Un espacio para mirar con más verdad y acompañar con más conciencia
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Consciencia Humana nace del deseo de crear procesos donde la transformación no sea una consigna vacía, sino una experiencia real de observación, activación y coherencia aplicada a la vida.
          </p>
        </div>
      </section>

      {/* Lo que creemos */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal text-center mb-10">
            <h2 className="section-title">Lo que creemos</h2>
            <p className="text-xl max-w-4xl mx-auto" style={{ color: 'var(--texto)', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.8, fontStyle: 'italic' }}>
              "Creemos que muchas personas y organizaciones viven sosteniendo formas que ya no expresan lo que son, lo que necesitan o lo que están llamadas a construir. Creemos también que transformar no es escapar de la realidad. Es habitarla con más verdad."
            </p>
          </div>
          
          <div className="reveal triada-card" style={{ maxWidth: '800px', margin: '0 auto', background: '#F8F9FA' }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                "Reconocer lo que hoy pasa",
                "Abrir conversación donde hay ruido o silencio",
                "Revisar hábitos, dirección y vínculos",
                "Activar formas más conscientes de estar, decidir y actuar"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <CheckCircle size={28} weight="fill" color="var(--rosa)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.2rem', color: 'var(--texto)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nuestra forma de acompañar */}
      <section className="section section-light">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block' }}>Facilitación</span>
          <h2 className="section-title reveal">Nuestra forma de acompañar</h2>
          <p className="text-lg max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem' }}>
            Trabajamos desde una facilitación cercana, respetuosa y profunda. No buscamos imponer respuestas ni generar impacto vacío. Buscamos crear condiciones para que aparezca una mirada más honesta, una palabra más verdadera y una posibilidad real de movimiento.
          </p>
        </div>
      </section>

      {/* Criterio */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2.5rem', color: 'var(--violeta-deep)' }}>
            Profundidad con cuidado.<br/>Humanidad con estructura.
          </h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2.5rem' }}>
            Nos importa tanto la profundidad del proceso como el modo en que ese proceso se sostiene. Por eso cuidamos el lenguaje, la intensidad, el contexto, el momento del grupo o de la persona, y la posibilidad real de llevar lo trabajado a la vida concreta. No creemos en transformaciones declamadas. Creemos en procesos honestos, sensibles y aplicables.
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="section bg-[#FDF9F3]">
        <div className="section-inner">
          <div className="text-center mb-12 reveal">
            <h2 className="section-title">Quiénes acompañan</h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>
              Consciencia Humana está impulsada por facilitadores comprometidos con el desarrollo humano, la escucha, la autoobservación, la activación y la construcción de procesos con sentido.
            </p>
          </div>
          
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', justifyContent: 'center' }}>
            {/* Placeholder Equipo 1 */}
            <div className="triada-card" style={{ textAlign: 'center', background: 'white' }}>
              <UserCircle size={100} weight="thin" color="var(--violeta-deep)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--violeta-deep)', marginBottom: '0.5rem' }}>Nombre Apellido</h3>
              <p style={{ color: 'var(--rosa)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>Cofundador / Facilitador</p>
              <div style={{ width: '40px', height: '2px', background: 'var(--rosa)', margin: '0 auto 1rem' }}></div>
              <p style={{ color: 'var(--texto-light)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Breve biografía pendiente de actualización.
              </p>
            </div>
            
            {/* Placeholder Equipo 2 */}
            <div className="triada-card" style={{ textAlign: 'center', background: 'white' }}>
              <UserCircle size={100} weight="thin" color="var(--violeta-deep)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
              <h3 style={{ fontSize: '1.3rem', color: 'var(--violeta-deep)', marginBottom: '0.5rem' }}>Nombre Apellido</h3>
              <p style={{ color: 'var(--rosa)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 600 }}>Cofundadora / Facilitadora</p>
              <div style={{ width: '40px', height: '2px', background: 'var(--rosa)', margin: '0 auto 1rem' }}></div>
              <p style={{ color: 'var(--texto-light)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Breve biografía pendiente de actualización.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '2.5rem' }}>
            "No acompañamos desde afuera. Acompañamos desde presencia."
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.1s' }}>
            Cada proceso necesita escucha, criterio y una forma de estar.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/metodo" className="btn-rosa" style={{ display: 'inline-block' }}>
              Conocer nuestro método
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
