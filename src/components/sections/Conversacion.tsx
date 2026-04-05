import { conversacionCards } from '../../data/site'
import { ArrowsLeftRight, ChatCenteredText, Heart } from '@phosphor-icons/react'

const iconMap: Record<string, React.ReactNode> = {
  ArrowsLeftRight: <ArrowsLeftRight size={24} weight="light" />,
  ChatCenteredText: <ChatCenteredText size={24} weight="light" />,
  Heart: <Heart size={24} weight="light" />,
}

export function Conversacion() {
  return (
    <section className="section section-light" id="nuestra-mirada">
      <div className="section-inner">
        <div className="section-intro-centered reveal">
          <span className="section-tag">Nuestra Mirada</span>
          <h2 className="section-title">
            <span>La conversación</span>
            <span>que cambia todo</span>
          </h2>
          <p className="section-subtitle centered">
            Proponemos reinstalar una conversación más poderosa: <br className="desktop-only" />
            la que nace cuando empezás a observarte sin juicio y a responder desde tu mejor versión posible.
          </p>
          <p className="section-subtitle centered" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
            Un espacio para cuestionar lo automático, activar claridad y entrenar una nueva forma de hacer y ser.
          </p>
        </div>
        <div className="triada-grid stagger" style={{ marginTop: '3rem' }}>
          {conversacionCards.map((card) => (
            <div
              key={card.title}
              className="triada-card reveal"
              style={{ '--i': card.delay, borderTop: `4px solid ${card.borderColor}` } as React.CSSProperties}
            >
              <div className="triada-icon desktop-only" style={card.style}>
                {iconMap[card.icon]}
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
