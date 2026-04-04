import { useState, useEffect, useRef } from 'react'
import { X, ArrowRight } from '@phosphor-icons/react'
import { bitacoraArticles } from '../../data/bitacora'
import type { BitacoraArticle } from '../../data/bitacora'

type Category = 'Todos' | 'Bienestar' | 'Neurociencia' | 'Liderazgo' | 'Sentido'
const CATEGORIES: Category[] = ['Todos', 'Bienestar', 'Neurociencia', 'Liderazgo', 'Sentido']

const categoryColor: Record<string, string> = {
  Bienestar: 'var(--rosa)',
  Neurociencia: 'var(--violeta-soft)',
  Liderazgo: 'var(--verde)',
  Sentido: 'var(--amarillo-hover)',
}

export function Bitacora() {
  const [activeCategory, setActiveCategory] = useState<Category>('Todos')
  const [openArticle, setOpenArticle] = useState<BitacoraArticle | null>(null)
  const [progress, setProgress] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'Todos'
    ? bitacoraArticles
    : bitacoraArticles.filter((a) => a.category === activeCategory)

  const handleScroll = () => {
    const el = modalRef.current
    if (!el) return
    const scrolled = el.scrollTop
    const total = el.scrollHeight - el.clientHeight
    setProgress(total > 0 ? (scrolled / total) * 100 : 0)
  }

  useEffect(() => {
    if (openArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [openArticle])

  return (
    <section className="section" id="bitacora" style={{ background: '#FDF9F3' }}>
      <div className="section-inner">
        <div className="triada-intro reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Reflexiones para evolucionar</span>
          <h2 className="section-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '3.5rem' }}>
            Bitácora de Consciencia
          </h2>
          <p className="section-subtitle centered" style={{ margin: '0 auto', maxWidth: '100%' }}>
            Un espacio para cuestionar lo automático, activar claridad y entrenar una nueva forma de hacer y ser.
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-pill${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="bitacora-grid reveal" id="bitacora-grid">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="bitacora-card reveal"
              onClick={() => setOpenArticle(article)}
            >
              <div>
                <span className="section-tag" style={{ color: categoryColor[article.category] }}>
                  {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
              <div className="card-meta">
                <span>{article.readTime}</span>
                <div className="read-action">
                  Leer reflexión <ArrowRight size={16} weight="bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openArticle && (
        <div
          ref={modalRef}
          className="bitacora-modal-overlay open"
          onScroll={handleScroll}
        >
          <div className="modal-progress" style={{ width: `${progress}%` }} />
          <div className="modal-content-inner">
            <button
              onClick={() => setOpenArticle(null)}
              style={{
                position: 'fixed', top: '2.5rem', right: '2.5rem',
                background: '#f5f5f5', border: 'none', width: 50, height: 50,
                borderRadius: '50%', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.05)', zIndex: 3200,
              }}
              aria-label="Cerrar artículo"
            >
              <X size={22} weight="bold" />
            </button>
            <div dangerouslySetInnerHTML={{ __html: openArticle.content }} />
          </div>
        </div>
      )}
    </section>
  )
}
