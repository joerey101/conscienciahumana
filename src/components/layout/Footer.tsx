import { LinkedinLogo, InstagramLogo, EnvelopeSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { siteConfig, footerData } from '../../data/site'

export function Footer() {
  return (
    <footer className="footer-v2 section section-dark" id="main-footer">
      <div className="section-inner">
        <div className="footer-grid reveal">
          {/* Column 1: Brand */}
          <div className="footer-col footer-brand">
            <h3 className="footer-logo-text">{footerData.colMarca.name}</h3>
            <p className="footer-brand-text">{footerData.colMarca.text}</p>
            <div className="footer-social-v2">
              <a href="#" aria-label="LinkedIn" className="social-link">
                <LinkedinLogo size={24} weight="fill" />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <InstagramLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-h4">Sitio</h4>
            <ul className="footer-ul">
              {footerData.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="footer-col">
            <h4 className="footer-h4">Programas</h4>
            <ul className="footer-ul">
              {footerData.programas.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-h4">{footerData.contacto.title}</h4>
            <p className="footer-contact-text">{footerData.contacto.text}</p>
            <a href={`mailto:${footerData.contacto.email}`} className="footer-email-link">
              <EnvelopeSimple size={18} weight="bold" />
              {footerData.contacto.email}
            </a>
            <Link to={footerData.contacto.ctaHref} className="btn-rosa btn-sm" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              {footerData.contacto.cta}
            </Link>
          </div>
        </div>

        <div className="footer-bottom-v2 reveal">
          <div className="footer-legal">
            <p className="legal-disclaimer">{footerData.disclaimer}</p>
            <p className="legal-privacy">{footerData.privacidadBrief}</p>
          </div>
          <div className="footer-copyright">
            <span>© 2026 {siteConfig.orgName}. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
