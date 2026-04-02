import { List, X } from '@phosphor-icons/react'
import { useNavbarScroll } from '../../hooks/useNavbarScroll'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { siteConfig } from '../../data/site'

export function Navbar() {
  const scrolled = useNavbarScroll()
  const { isOpen, open, close } = useMobileMenu()

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" onClick={scrollToTop} aria-label="Fundación Consciencia Humana - Inicio">
            <div className="fch-logo-container">
              <svg viewBox="0 0 100 100" className="fch-logo-animated">
                <defs>
                  <path id="petal" d="M50 90 C30 90 15 65 15 40 C15 15 50 5 50 5 C50 5 85 15 85 40 C85 65 70 90 50 90 Z" />
                </defs>
                <use href="#petal" className="fch-petal p-cyan" fill="#5DC1FF" />
                <use href="#petal" className="fch-petal p-purple" fill="#AC5CFF" />
                <use href="#petal" className="fch-petal p-pink" fill="#FF76E2" />
                <use href="#petal" className="fch-petal p-yellow" fill="#FFF647" />
              </svg>
            </div>
            <span>Fundación Consciencia Humana</span>
          </a>
          <ul className="navbar-links">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            {/* CTA button removed per user request */}
          </div>
          <button className="mobile-toggle" onClick={open} aria-label="Abrir menú" style={{ color: 'var(--texto)' }}>
            <List size={24} weight="bold" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${isOpen ? ' open' : ''}`} id="mobile-menu">
        <button className="mobile-close" onClick={close} aria-label="Cerrar menú">
          <X size={22} weight="bold" />
        </button>
        {siteConfig.nav.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
        ))}
      </div>
    </>
  )
}
