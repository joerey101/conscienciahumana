export function Mision() {
  return (
    <section className="section section-light" id="nuestra-mision">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag">Nuestra Misión</span>
          <h2 className="section-title">
            Contribuir a una sociedad <br /> donde las personas se sientan <br /> orgullosas de pertenecer
          </h2>
          <div className="mission-grid" style={{ textAlign: 'left', padding: '0 1rem' }}>
            <div className="mission-column reveal" style={{ '--i': 0 } as React.CSSProperties}>
              <div style={{ width: 40, height: 3, background: 'var(--rosa)', marginBottom: '2rem' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--violeta-deep)', marginBottom: '1.2rem' }}>
                Puntos de partida
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--texto-light)', lineHeight: 1.8, fontWeight: 300 }}>
                En Fundación Consciencia Humana creemos que cada desafío es una oportunidad para crecer y desarrollar el potencial de las personas. <strong>Nuestra misión es acompañar</strong> a individuos y organizaciones a través de espacios de formación donde se integran conocimientos, habilidades socioemocionales y experiencias que generan un impacto real.
              </p>
            </div>
            <div className="mission-column reveal" style={{ '--i': 1 } as React.CSSProperties}>
              <div style={{ width: 40, height: 3, background: 'var(--amarillo)', marginBottom: '2rem' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontStyle: 'italic', color: 'var(--violeta-deep)', marginBottom: '1.2rem' }}>
                Transformación Colectiva
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--texto-light)', lineHeight: 1.8, fontWeight: 300 }}>
                Más allá de enseñar contenidos, buscamos impulsar procesos de transformación personal y colectiva. Trabajamos con <strong>metodologías participativas y alianzas estratégicas</strong> para que cada persona pueda convertirse en agente de cambio y cada organización adopte prácticas más humanas, colaborativas y sostenibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
