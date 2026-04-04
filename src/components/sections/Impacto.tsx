import { useEffect, useRef, useState } from 'react'
import { impactoMetrics } from '../../data/site'
import { useCounter } from '../../hooks/useCounter'

function Counter({ target, suffix = '', prefix = '', duration = 2000 }: { target: number, suffix?: string, prefix?: string, duration?: number }) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const count = useCounter(target, duration, inView)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  )
}

export function Impacto() {
  return (
    <section className="section section-dark" id="impacto">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag section-tag-light">Resultados</span>
          <h2 className="section-title">Transformación con sentido</h2>
          <p className="section-subtitle-light centered">
            El impacto de nuestros procesos se refleja en mayor claridad, equipos más alineados y liderazgos más responsables. <br className="desktop-only" />
            Creemos que cada proceso individual aporta a una transformación colectiva más amplia.
          </p>
        </div>
        <div className="metrics-grid stagger">
          {impactoMetrics.map((m) => {
            const numValue = parseInt(m.number.replace(/[^0-9]/g, ''))
            const prefix = m.number.startsWith('+') ? '+' : ''
            const suffix = m.number.endsWith('%') ? '%' : ''
            
            return (
              <div key={m.label} className="metric-item reveal" style={{ '--i': m.delay } as React.CSSProperties}>
                <div className={`metric-number ${m.colorClass}`}>
                  <Counter target={numValue} prefix={prefix} suffix={suffix} />
                </div>
                <div className="metric-label">{m.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
