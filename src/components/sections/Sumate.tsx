import { Link } from 'react-router-dom'

export function Sumate() {
  return (
    <section className="section section-light" id="sumate">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag">Colaboración</span>
          <h2 className="section-title">Sumate a la Fundación Consciencia Humana</h2>
          <p className="section-subtitle centered">
            Buscamos personas comprometidas con construir espacios de transformación reales: con criterio, sensibilidad y capacidad de llevar las ideas a la acción. Si querés colaborar, proponer, aportar tiempo profesional o acompañar proyectos desde tu lugar, queremos conocerte.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <Link to="/agenda" className="btn-rosa">
              Sumate acá
            </Link>
            <span style={{ fontSize: '0.8rem', color: 'var(--texto-muted)' }}>
              Te responderemos a la brevedad. Nos llega directo al equipo.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
