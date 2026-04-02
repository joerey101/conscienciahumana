import { CheckCircle } from '@phosphor-icons/react'

export function Transformacion() {
  return (
    <section className="section section-white" id="transformacion">
      <div className="section-inner">
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Cómo generamos transformación real</h2>
        </div>
        <div className="platform-grid" style={{ alignItems: 'start' }}>
          <div className="platform-img reveal">
            <img
              src="/img/transformacion-img.png"
              alt="Persona recorriendo un sendero en la naturaleza, simbolizando el camino de transformación personal"
              loading="lazy"
              style={{ borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%' }}
            />
          </div>
          <div className="reveal">
            <p style={{ fontSize: '1.1rem', color: 'var(--texto-light)', marginBottom: '2rem' }}>
              Las personas ya tienen recursos internos. Solo necesitan activarlos con claridad y método.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--texto-light)' }}>Creamos espacios donde:</p>
            <ul className="audience-list">
              {[
                'Identificás tus fortalezas reales.',
                'Reconocés patrones limitantes sin quedarte atrapado en ellos.',
                'Redefinís tu narrativa personal.',
                'Elegís respuestas más efectivas frente al contexto.',
              ].map((item) => (
                <li key={item}>
                  <CheckCircle size={20} weight="fill" color="var(--verde)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
              Porque entender no alcanza. La transformación ocurre cuando incorporás nuevas formas de pensar, sentir y actuar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
