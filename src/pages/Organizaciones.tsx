import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { CheckCircle } from '@phosphor-icons/react';

export function Organizaciones() {
  useRevealAnimation();

  return (
    <main className="page-organizaciones">
      <PageSEO 
        title="Organizaciones | Liderazgo, bienestar y cohesión de equipos"
        description="Programas para equipos y organizaciones que buscan trabajar liderazgo, bienestar, vínculos, cultura, comunicación y transformación humana aplicada."
        canonicalUrl="https://conscienciahumana.com/organizaciones"
      />

      {/* Hero */}
      <section className="section bg-[#FDF9F3]" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block', color: 'var(--rosa)' }}>B2B & Institucional</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Procesos para equipos y organizaciones que necesitan más claridad, cohesión y humanidad
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal mb-10" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Diseñamos experiencias y programas para organizaciones que quieren trabajar liderazgo, bienestar, comunicación, cultura y transformación humana aplicada, sin caer en soluciones superficiales ni en discursos vacíos.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-rosa shadow-hover" style={{ display: 'inline-block', padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: 50 }}>
              Agendar una conversación inicial
            </Link>
          </div>
        </div>
      </section>

      {/* Situaciones en las que podemos aportar */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal text-center mb-12">
            <h2 className="section-title">Situaciones en las que podemos aportar</h2>
          </div>
          <div className="reveal grid-situaciones" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              "Desgaste sostenido o burnout",
              "Liderazgo desconectado o sin centro",
              "Vínculos tensos o conversaciones difíciles",
              "Falta de cohesión",
              "Culturas sobrecargadas de urgencia y poca reflexión",
              "Necesidad de recuperar sentido, presencia y forma de trabajo"
            ].map((situacion, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem', background: '#F8F9FA', borderRadius: '12px' }}>
                <CheckCircle size={24} weight="fill" color="var(--rosa)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '1.1rem', color: 'var(--texto)' }}>{situacion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-4">Cada organización necesita su propia puerta de entrada</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.1s' }}>
            Podemos conversar sobre el momento actual de tu equipo u organización y pensar juntos cuál es el formato más adecuado.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/agenda" className="btn-rosa" style={{ display: 'inline-block' }}>
              Quiero una reunión inicial
            </Link>
            <Link to="/programas" className="btn-hero" style={{ display: 'inline-block', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
              Consultar por programas
            </Link>
          </div>
        </div>
      </section>

      {/* Líneas de trabajo (5 cards) */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="reveal text-center mb-12">
            <span className="section-tag">Nuestras Soluciones</span>
            <h2 className="section-title">Líneas de trabajo</h2>
          </div>
          
          <div className="platform-grid stagger" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            <div className="reveal" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--violeta-deep)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Liderazgo y claridad</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Espacios para revisar la manera de conducir, decidir, comunicar y sostener equipos desde una mayor presencia y coherencia.</p>
            </div>

            <div className="reveal" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--amarillo)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Bienestar y desgaste</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Procesos para abordar agotamiento, sobrecarga, desregulación y hábitos organizacionales que dañan la energía del equipo.</p>
            </div>

            <div className="reveal" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--rosa)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Vínculos y comunicación</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Experiencias para abrir conversación, fortalecer escucha, mejorar la calidad vincular y habilitar intercambios más honestos.</p>
            </div>

            <div className="reveal" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--verde)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Cultura y coherencia</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Intervenciones para alinear narrativa, prácticas y formas reales de habitar la organización.</p>
            </div>

            <div className="reveal md:col-span-2 lg:col-span-2" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderTop: '4px solid var(--azul)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Procesos en contextos sociales y comunitarios</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Acompañamiento a organizaciones sociales, espacios comunitarios y dispositivos que requieren sensibilidad, cuidado y realismo operativo.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid #eee' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2rem' }}>No trabajamos solo para que un equipo "se sienta mejor"</h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto)', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.8, marginTop: '2rem' }}>
            Trabajamos para que una organización pueda verse con más honestidad, mejorar la calidad de sus conversaciones, ordenar lo humano que hoy está operando en silencio, y construir una forma más coherente de liderar y vincularse. No ofrecemos entretenimiento corporativo. Ofrecemos procesos cuidados, serios y aplicables.
          </p>
        </div>
      </section>

      {/* Formatos posibles */}
      <section className="section bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block' }}>Adaptabilidad</span>
          <h2 className="section-title reveal">Formatos de trabajo</h2>
          <p className="text-lg max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem' }}>
            La propuesta puede tomar distintas formas: talleres, ciclos de encuentros, procesos de activación, espacios de liderazgo, acompañamiento de equipos, experiencias para organizaciones sociales o comunitarias. Cada formato se diseña en función del punto de partida, la madurez del grupo y el tipo de transformación buscada.
          </p>
        </div>
      </section>

    </main>
  );
}
