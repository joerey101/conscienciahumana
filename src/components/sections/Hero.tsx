import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Volver a elegir cómo<br />querés vivir</h1>
        <p>
          Hay momentos en los que algo interno te dice que ya no alcanza con <br className="desktop-only" /> 
          seguir funcionando. Cumplís. Respondés. Avanzás. Pero en algún punto <br className="desktop-only" /> 
          aparece una pregunta silenciosa: <strong>¿Esto es todo?</strong>
        </p>
        <p style={{ fontSize: '1.1rem', opacity: 0.85, fontWeight: 300 }}>
          Consciencia Humana le habla a quienes están listos para evolucionar.
        </p>
        <div className="button-group" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>
          <Link to="/agenda" className="btn-hero shadow-hover">
            Quiero comenzar mi proceso
          </Link>
        </div>
      </div>
    </section>
  )
}
