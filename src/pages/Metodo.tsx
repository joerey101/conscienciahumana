import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';

export function Metodo() {
  useRevealAnimation();

  return (
    <main className="page-metodo">
      <PageSEO
        title="Método | Reconocer, activar y sostener el cambio"
        description="Conocé el método de Consciencia Humana: un proceso de autoevaluación, activación y sostenimiento para transformar hábitos, dirección y forma de habitar la vida y el trabajo."
        canonicalUrl="https://conscienciahumana.com/metodo"
      />

      {/* Hero */}
      <section className="section bg-[#FDF9F3]" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Método de autoevaluación, activación y sostenimiento
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Un proceso para observar con honestidad la realidad actual, activar nuevas respuestas y construir una coherencia más estable en la vida, en los vínculos y en la forma de habitar el trabajo.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-center reveal" style={{ color: 'var(--texto)', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.8, fontStyle: 'italic' }}>
            "En Consciencia Humana no entendemos la transformación como un momento aislado ni como una experiencia meramente emocional. La entendemos como un proceso. Un proceso que empieza cuando una persona, un equipo o una organización acepta mirar con más verdad lo que hoy está viviendo, y se anima a revisar no solo lo que le pasa, sino también la forma en que responde a eso."
          </p>
        </div>
      </section>

      {/* Tres Cards - El Método */}
      <section className="section section-light">
        <div className="section-inner">
          <div className="triada-grid stagger">

            {/* Card 1 */}
            <div id="reconocer" className="triada-card reveal" style={{ '--i': 0, borderTop: '4px solid var(--rosa)' } as React.CSSProperties}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--violeta-deep)', marginBottom: '0.5rem' }}>Reconocer</h3>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--rosa)' }}>Ver con más honestidad lo que hoy es</h4>
              <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                El primer paso no es cambiar rápido. Es reconocer. Reconocer la incomodidad, el desgaste, los hábitos que ya no sostienen, la distancia entre los resultados actuales y la vida que se quiere habitar.
              </p>
              <ul style={{ textAlign: 'left', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem', listStyle: 'disc', paddingLeft: '1.2rem', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <li>Registro interno</li>
                <li>Patrones repetidos</li>
                <li>Desgaste emocional</li>
                <li>Hábitos</li>
                <li>Ruido y dispersión</li>
                <li>Lectura de resultados</li>
                <li>Zonas de desconexión</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="triada-card reveal" style={{ '--i': 1, borderTop: '4px solid var(--amarillo)' } as React.CSSProperties}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--violeta-deep)', marginBottom: '0.5rem' }}>Activar</h3>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--amarillo-dark, #D4A000)' }}>Responder distinto también es una práctica</h4>
              <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                Una vez que algo se ve, aparece la posibilidad de responder de otra manera. Activar es dejar de quedar atrapado solo en el diagnóstico. Es ordenar prioridades, nombrar una dirección, empezar a construir una respuesta más consciente.
              </p>
              <ul style={{ textAlign: 'left', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem', listStyle: 'disc', paddingLeft: '1.2rem', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <li>Foco y dirección</li>
                <li>Capacidad de decisión</li>
                <li>Hábitos y disciplina consciente</li>
                <li>Lenguaje y declaración</li>
                <li>Acción alineada</li>
                <li>Compromiso con el proceso</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="triada-card reveal" style={{ '--i': 2, borderTop: '4px solid var(--azul)' } as React.CSSProperties}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--violeta-deep)', marginBottom: '0.5rem' }}>Sostener</h3>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--azul)' }}>La transformación se vuelve real cuando encuentra forma de permanecer</h4>
              <p style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
                No alcanza con tener un momento de claridad. Hace falta sostenerlo. Sostener es construir una nueva coherencia: una forma más consciente de estar, decidir, comunicar y actuar.
              </p>
              <ul style={{ textAlign: 'left', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1rem', listStyle: 'disc', paddingLeft: '1.2rem', gap: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                <li>Coherencia cotidiana</li>
                <li>Seguimiento</li>
                <li>Prácticas de recentrado</li>
                <li>Comunicación</li>
                <li>Revisión de desvíos</li>
                <li>Capacidad de sostener sin rigidez</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Cómo se vive */}
      <section className="section bg-white">
        <div className="section-inner text-center">
          <h2 className="section-title reveal">Cómo se vive este proceso</h2>
          <p className="text-lg max-w-3xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8 }}>
            Nuestra forma de acompañar combina espacios conversatorios guiados, escucha atenta y sin juicio, ejercicios simples y aplicables, reflexión individual y grupal, y herramientas para trasladar lo trabajado a la vida diaria.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section section-dark text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <h2 className="section-title text-white reveal mb-4">Mirar distinto puede cambiar lo que sigue</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.1s' }}>
            Todo proceso empieza cuando algo deja de poder seguir igual.
          </p>
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <Link to="/agenda" className="btn-rosa" style={{ display: 'inline-block' }}>
              Quiero conversar sobre este proceso
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
