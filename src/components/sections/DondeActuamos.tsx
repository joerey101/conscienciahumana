import { siteConfig } from '../../data/site'

export function DondeActuamos() {
  return (
    <section className="section section-dark" id="donde-actuamos">
      <div className="section-inner">
        <div className="triada-intro reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span className="section-tag section-tag-light">Alcance</span>
          <h2 className="section-title" style={{ color: 'var(--blanco)' }}>Dónde actuamos</h2>
          <p className="section-subtitle-light" style={{ margin: '0 auto' }}>
            Trabajamos en aquellos espacios donde existe conciencia de que algo necesita cambiar. Donde hay voluntad de evolucionar. Donde las personas están listas para asumir responsabilidad sobre su impacto.
          </p>
          <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>
            No imponemos transformación. La facilitamos cuando hay apertura y compromiso.
          </p>
          <div style={{ marginTop: '3rem' }}>
            <a href={siteConfig.contactEmail} className="btn-rosa shadow-hover" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', borderRadius: 50 }}>
              Coordinar reunión institucional
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
