import { conversacionCards } from '../../data/site'
import { ArrowsLeftRight, ChatCenteredText, Heart } from '@phosphor-icons/react'

const iconMap: Record<string, React.ReactNode> = {
  ArrowsLeftRight: <ArrowsLeftRight size={24} weight="light" />,
  ChatCenteredText: <ChatCenteredText size={24} weight="light" />,
  Heart: <Heart size={24} weight="light" />,
}

export function Conversacion() {
  return (
    <section className="section section-light" id="conversacion">
      <div className="section-inner">
        <div className="triada-intro reveal">
          <span className="section-tag">Nuestra Mirada</span>
          <h2 className="section-title">La conversación que cambia todo</h2>
          <p className="section-subtitle">
            Proponemos reinstalar una conversación más poderosa: la que nace cuando empezás a observarte sin juicio y a responder desde tu mejor versión posible.
          </p>
        </div>
        <div className="triada-grid stagger" style={{ marginTop: '3rem' }}>
          {conversacionCards.map((card) => (
            <div
              key={card.title}
              className="triada-card reveal"
              style={{ '--i': card.delay, borderTop: `4px solid ${card.borderColor}` } as React.CSSProperties}
            >
              <div className="triada-icon" style={card.style}>
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
