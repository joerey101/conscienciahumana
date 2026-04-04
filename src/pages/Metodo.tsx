import { Link } from 'react-router-dom';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { Eye, Zap, Anchor } from 'lucide-react';
import { VisualProgress } from '../components/premium/VisualProgress';

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
      <section className="section section-hero bg-[#FDF9F3]">
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

      {/* El Método - Visual Progress */}
      <section className="section section-light">
        <div className="section-inner">
          <VisualProgress 
            procedures={[
              {
                title: "Reconocer",
                icon: Eye,
                steps: [
                  "Registro interno de sensaciones",
                  "Identificación de patrones repetidos",
                  "Lectura de zonas de desgaste emocional",
                  "Observación de hábitos automáticos",
                  "Detección de ruido y dispersión",
                  "Sinceramiento de resultados reales"
                ]
              },
              {
                title: "Activar",
                icon: Zap,
                steps: [
                  "Definición de foco y dirección",
                  "Recuperación de la capacidad de decidir",
                  "Diseño de disciplina consciente",
                  "Nueva narrativa y lenguaje",
                  "Acción alineada al propósito",
                  "Compromiso con el movimiento"
                ]
              },
              {
                title: "Sostener",
                icon: Anchor,
                steps: [
                  "Construcción de coherencia cotidiana",
                  "Dispositivos de seguimiento rítmico",
                  "Prácticas de recentrado urgente",
                  "Calidad en la comunicación",
                  "Revisión y ajuste de desvíos",
                  "Flexibilidad sin perder el centro"
                ]
              }
            ]}
          />
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
