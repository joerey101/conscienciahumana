import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { Users, Target, ChartLineUp, Handshake } from '@phosphor-icons/react';
import { MetricCards } from '../components/premium/DashboardWidgets';

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
      <section className="section section-hero bg-[#FDF9F3]">
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

      {/* Impacto en números */}
      <section className="section section-light" style={{ paddingBottom: '3rem' }}>
        <div className="section-inner">
          <MetricCards 
            metrics={[
              { label: 'Organizaciones Acompañadas', val: '45+' },
              { label: 'Conversiones Culturales', val: '88%' },
              { label: 'Impacto Comunitario', val: '12k+' },
              { label: 'Procesos Activos', val: '18' },
            ]}
          />
        </div>
      </section>

      {/* Situaciones en las que podemos aportar */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal text-center mb-12">
            <h2 className="section-title">Situaciones en las que podemos aportar</h2>
          </div>
          <div className="reveal grid-situaciones stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
            {[
              { text: "Desgaste sostenido o burnout", icon: ChartLineUp },
              { text: "Liderazgo desconectado o sin centro", icon: Target },
              { text: "Vínculos tensos o conversaciones difíciles", icon: Users },
              { text: "Falta de cohesión de equipo", icon: Handshake },
              { text: "Culturas sobrecargadas de urgencia", icon: Target },
              { text: "Necesidad de recuperar sentido y presencia", icon: Users }
            ].map((situacion, idx) => (
              <div key={idx} className="reveal triada-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem', background: 'white' }}>
                <situacion.icon size={32} weight="duotone" color="var(--rosa)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.1rem', color: 'var(--texto)', fontWeight: 500, lineHeight: 1.4 }}>{situacion.text}</span>
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
          <div className="button-group reveal" style={{ animationDelay: '0.2s', justifyContent: 'center' }}>
            <Link to="/agenda" className="btn-rosa">
              Quiero una reunión inicial
            </Link>
            <Link to="/programas" className="btn-hero" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
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
          
          <div className="platform-grid stagger" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div className="reveal triada-card" style={{ borderTop: '4px solid var(--violeta-deep)', background: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Liderazgo y claridad</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Espacios para revisar la manera de conducir, decidir, comunicar y sostener equipos desde una mayor presencia y coherencia.</p>
            </div>

            <div className="reveal triada-card" style={{ borderTop: '4px solid var(--amarillo)', background: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Bienestar y desgaste</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Procesos para abordar agotamiento, sobrecarga, desregulación y hábitos organizacionales que dañan la energía del equipo.</p>
            </div>

            <div className="reveal triada-card" style={{ borderTop: '4px solid var(--rosa)', background: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Vínculos y comunicación</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Experiencias para abrir conversación, fortalecer escucha, mejorar la calidad vincular y habilitar intercambios más honestos.</p>
            </div>

            <div className="reveal triada-card" style={{ borderTop: '4px solid var(--verde)', background: 'white' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Cultura y coherencia</h3>
              <p style={{ color: 'var(--texto-light)', lineHeight: 1.6 }}>Intervenciones para alinear narrativa, prácticas y formas reales de habitar la organización.</p>
            </div>

            <div className="reveal triada-card md:col-span-2 lg:col-span-2" style={{ borderTop: '4px solid var(--azul)', background: 'white' }}>
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
