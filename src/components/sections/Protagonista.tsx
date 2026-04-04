import { Heart, Users, RocketLaunch, ChartLineUp } from '@phosphor-icons/react'

const icons = [
  { Icon: Heart, colorClass: 'rosa-bg', label: 'Tu bienestar' },
  { Icon: Users, colorClass: 'amarillo-bg', label: 'Tus vínculos' },
  { Icon: RocketLaunch, colorClass: 'verde-bg', label: 'Tu desempeño' },
  { Icon: ChartLineUp, colorClass: '', label: 'Tus resultados', customStyle: { background: 'rgba(107,78,191,0.1)', color: 'var(--violeta-soft)' } },
]

export function Protagonista() {
  return (
    <section className="section section-light" id="protagonista">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag">Posicionamiento Interior</span>
          <h2 className="section-title">El arquetipo del protagonista</h2>
          <p className="section-subtitle centered">
            En un entorno cambiante, el protagonista no controla todo. Pero sí elige su respuesta. <br className="desktop-only" />
            Cuando asumís ese lugar, aumenta tu claridad, tu energía y tu capacidad de influencia.
          </p>
          <p style={{ marginTop: '1.5rem', color: 'var(--texto-light)' }} className="centered">
            No se trata de negar el caos externo. Se trata de fortalecer tu equilibrio interior.
          </p>
        </div>
        <div className="metrics-grid icons-row stagger" style={{ marginTop: '3rem' }}>
          {icons.map(({ Icon, colorClass, label, customStyle }, i) => (
            <div key={label} className="metric-item reveal" style={{ '--i': i } as React.CSSProperties}>
              <div
                className={`triada-icon${colorClass ? ` ${colorClass}` : ''}`}
                style={{ margin: '0 auto 1rem', ...(customStyle ?? {}) }}
              >
                <Icon size={22} weight="fill" />
              </div>
              <div className="metric-label" style={{ color: 'var(--texto)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
