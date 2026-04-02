import { Buildings, Briefcase, Sparkle } from '@phosphor-icons/react'
import { verticalesData } from '../../data/site'

const iconComponents: Record<string, React.ReactNode> = {
  Buildings: <Buildings size={24} weight="fill" />,
  Briefcase: <Briefcase size={24} weight="fill" />,
  Sparkle: <Sparkle size={24} weight="fill" />,
}

export function Verticales() {
  return (
    <section className="section section-white" id="experiencias">
      <div className="section-inner">
        <div className="triada-intro reveal">
          <span className="section-tag">Nuestras verticales de acción</span>
        </div>
        <div className="triada-grid stagger">
          {verticalesData.map((v) => (
            <div key={v.title} className="triada-card reveal" style={{ '--i': v.delay } as React.CSSProperties}>
              <div className={`triada-icon ${v.color}`}>{iconComponents[v.icon]}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#cta-final" className="btn-rosa">Quiero saber más</a>
        </div>
      </div>
    </section>
  )
}
