import { Link } from 'react-router-dom'

export function DondeActuamos() {
  return (
    <section className="section section-dark" id="donde-actuamos">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag section-tag-light">Alcance</span>
          <h2 className="section-title" style={{ color: 'var(--blanco)' }}>Dónde actuamos</h2>
          <p className="section-subtitle-light centered">
            Trabajamos en aquellos espacios donde existe conciencia de que algo necesita cambiar. <br className="desktop-only" />
            Donde hay voluntad de evolucionar. Donde las personas están listas para asumir responsabilidad sobre su impacto.
          </p>
          <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }} className="centered">
            No imponemos transformación. La facilitamos cuando hay apertura y compromiso.
          </p>
          <div style={{ marginTop: '3.5rem' }}>
            <Link to="/organizaciones" className="btn-rosa shadow-hover">
              Coordinar reunión institucional
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
