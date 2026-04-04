import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';

export function Programas() {
  useRevealAnimation();

  return (
    <main className="page-programas">
      <PageSEO 
        title="Programas | Transformación personal y grupal aplicada"
        description="Explorá los programas de Consciencia Humana para personas, grupos y organizaciones: procesos guiados de claridad, activación, hábitos, bienestar y coherencia."
        canonicalUrl="https://conscienciahumana.com/programas"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Crecimiento Integral</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Programas para mirar, activar y sostener un cambio real
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal mb-10" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            En Consciencia Humana diseñamos programas y procesos para personas, equipos y organizaciones que necesitan claridad, dirección, nuevas herramientas y una forma más consciente de habitar la vida, los vínculos y el trabajo.
          </p>
          <div className="button-group reveal" style={{ animationDelay: '0.2s', justifyContent: 'center' }}>
            <Link to="/agenda" className="btn-rosa shadow-hover">
              Quiero conocer cuál aplica para mí
            </Link>
            <Link to="/organizaciones" className="btn-hero" style={{ background: 'transparent', border: '2px solid var(--rosa)', color: 'var(--rosa)' }}>
              Quiero llevarlo a mi organización
            </Link>
          </div>
        </div>
      </section>

      {/* Para personas (2 cards) */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal text-center mb-12">
            <h2 className="section-title">Para personas</h2>
          </div>
          
          <div className="stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div className="reveal triada-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--rosa)', background: '#F8F9FA' }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>El Salto de tu VIDA</h3>
              <p style={{ color: 'var(--texto)', fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                "Un proceso de evolución personal para reconocer, activar y sostener una nueva coherencia."
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Para quién:</h4>
                <p style={{ color: 'var(--texto-light)', fontSize: '0.95rem' }}>Agotamiento o desconexión / querer revisar hábitos y dirección / necesitar claridad interna / sentir que los resultados no expresan quiénes son</p>
              </div>

              <div style={{ marginBottom: '2.5rem', flexGrow: 1 }}>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Qué trabaja:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Claridad interna", "Observación de hábitos", "Activación de nuevas respuestas", "Disciplina consciente", "Alineamiento"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--texto-light)', fontSize: '0.95rem' }}>
                      <CheckCircle size={16} weight="fill" color="var(--rosa)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/programas/el-salto-de-tu-vida" className="btn-rosa" style={{ textAlign: 'center', padding: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Quiero conocer este programa <ArrowRight size={18} weight="bold" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="reveal triada-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--amarillo)', background: '#F8F9FA' }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>Proceso de Autoevaluación y Activación Interior</h3>
              <p style={{ color: 'var(--texto)', fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif" }}>
                "Un recorrido guiado para mirar con honestidad el presente y empezar a ordenar una nueva dirección."
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Para quién:</h4>
                <p style={{ color: 'var(--texto-light)', fontSize: '0.95rem' }}>Personas en momento de revisión personal que necesitan estructura para observar, nombrar y activar.</p>
              </div>

              <div style={{ marginBottom: '2.5rem', flexGrow: 1 }}>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Qué trabaja:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Autoobservación", "Claridad", "Activación interior", "Hábitos", "Seguimiento", "Coherencia"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--texto-light)', fontSize: '0.95rem' }}>
                      <CheckCircle size={16} weight="fill" color="var(--amarillo-dark, #D4A000)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/programas/proceso-de-autoevaluacion-y-activacion-interior" className="btn-rosa shadow-hover" style={{ textAlign: 'center', padding: '1rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                Quiero empezar por acá <ArrowRight size={18} weight="bold" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Grupales y comunitarios */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="reveal text-center mb-12">
            <h2 className="section-title">Grupales y comunitarios</h2>
          </div>
          
          <div className="reveal" style={{ background: 'white', padding: '3.5rem', borderRadius: '16px', borderTop: '4px solid var(--azul)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '2.2rem', fontFamily: 'Poppins', color: 'var(--violeta-deep)', marginBottom: '1rem', textAlign: 'center' }}>Una Mirada hacia el Interior</h3>
            <p style={{ color: 'var(--texto)', fontSize: '1.2rem', marginBottom: '2.5rem', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", textAlign: 'center' }}>
              "Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad."
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Para quién:</h4>
                <p style={{ color: 'var(--texto-light)', fontSize: '1rem', lineHeight: 1.6 }}>Organizaciones sociales / Espacios comunitarios / Dispositivos de acompañamiento / Grupos que requieren trabajo emocional con cuidado.</p>
              </div>

              <div>
                <h4 style={{ color: 'var(--violeta-deep)', fontWeight: 600, marginBottom: '0.5rem' }}>Qué trabaja:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Autoconocimiento emocional", "Aceptación y perdón", "Gestión emocional saludable", "Resiliencia", "Bienestar integral"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--texto-light)', fontSize: '0.95rem' }}>
                      <CheckCircle size={16} weight="fill" color="var(--azul)" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link to="/agenda" className="btn-rosa shadow-hover" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem' }}>
                Consultar por esta línea <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Para organizaciones */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem', borderBottom: '1px solid #eee' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2rem' }}>Programas para equipos y organizaciones</h2>
          <p className="text-xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem', marginBottom: '3rem' }}>
            No todas las organizaciones necesitan lo mismo, pero muchas comparten un mismo fondo: desgaste, ruido, baja calidad conversacional, liderazgo tenso o necesidad de recuperar humanidad sin perder dirección.
          </p>
          <div className="reveal">
            <Link to="/organizaciones" className="btn-rosa shadow-hover">
              Ver propuesta para organizaciones
            </Link>
          </div>
        </div>
      </section>

      {/* No sé por dónde empezar */}
      <section className="section bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-4" style={{ display: 'inline-block' }}>Orientación</span>
          <h2 className="section-title reveal">¿No sabés por dónde empezar?</h2>
          <p className="text-lg max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem', marginBottom: '3rem' }}>
            No hace falta llegar sabiendo exactamente qué programa necesitás. A veces la mejor puerta de entrada es una conversación para entender en qué momento estás y cuál es el formato más adecuado para empezar.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/agenda" className="btn-rosa">
              Quiero orientación
            </Link>
            <Link to="/agenda" className="btn-hero" style={{ background: 'transparent', border: '2px solid var(--rosa)', color: 'var(--rosa)' }}>
              Agendar una conversación
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark" style={{ paddingTop: '8rem', paddingBottom: '8rem', display: 'flex', justifyContent: 'center' }}>
        <div className="section-inner" style={{ textAlign: 'center', width: '100%' }}>
          <blockquote className="reveal" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'white', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', lineHeight: 1.3, marginBottom: '2rem', textAlign: 'center' }}>
              "Mirar con más honestidad.<br />Activar una respuesta más consciente.<br />Sostener una coherencia posible."
            </p>
            <footer style={{ fontSize: '1.2rem', color: 'var(--rosa)', fontFamily: 'Lato', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', textAlign: 'center' }}>
              Ese es el trabajo de fondo que organiza nuestros programas
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
