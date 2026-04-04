import { Buildings, Briefcase, Sparkle } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { verticalesData } from '../../data/site'

const iconComponents: Record<string, React.ReactNode> = {
  Buildings: <Buildings size={24} weight="fill" />,
  Briefcase: <Briefcase size={24} weight="fill" />,
  Sparkle: <Sparkle size={24} weight="fill" />,
}

export function Verticales() {
  return (
    <section className="section section-white" id="verticales">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <h2 className="section-title">Nuestras verticales de acción</h2>
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
          <Link to="/programas" className="btn-rosa">Quiero saber más</Link>
        </div>
      </div>
    </section>
  )
}
