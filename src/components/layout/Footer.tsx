import { LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'
import { siteConfig } from '../../data/site'

export function Footer() {
  return (
    <footer className="section section-dark" id="cta-final">
      <div className="section-inner">
        <div className="footer-cta reveal">
          <h2>Si sentís que es momento de evolucionar</h2>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            La pregunta no es si podés cambiar.{' '}
            <span style={{ fontWeight: 700, fontSize: '1.25em', display: 'inline-block', marginLeft: '0.5rem', color: '#fff' }}>
              La pregunta es cuándo decidís hacerlo.
            </span>
          </p>
          <div className="footer-buttons">
            <a href={siteConfig.contactEmail} className="btn-rosa">Quiero comenzar mi proceso</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {siteConfig.orgName}. Promoviendo consciencia, coherencia y acción.</span>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <LinkedinLogo size={18} /> LinkedIn
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramLogo size={18} /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
