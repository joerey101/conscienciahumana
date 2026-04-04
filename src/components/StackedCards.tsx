import { useEffect, useRef } from "react";

const items = [
  { label: "El lenguaje",       maxWidth: 260, bg: "#EEEDFE", color: "#3C3489", fontSize: 15, padding: "18px 32px" },
  { label: "La intensidad",     maxWidth: 320, bg: "#CECBF6", color: "#3C3489", fontSize: 16, padding: "20px 32px" },
  { label: "El contexto",       maxWidth: 400, bg: "#AFA9EC", color: "#26215C", fontSize: 17, padding: "22px 32px" },
  { label: "El momento del grupo o de la persona", maxWidth: 490, bg: "#7F77DD", color: "#EEEDFE", fontSize: 17, padding: "24px 36px" },
  { label: "La posibilidad real de llevar lo trabajado a la vida concreta", maxWidth: 600, bg: "#534AB7", color: "#EEEDFE", fontSize: 18, padding: "30px 40px" },
];

export default function StackedCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = el.querySelectorAll<HTMLElement>(".stack-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, i * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem 3rem",
      }}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {i > 0 && (
            <div
              className="stack-item"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                fontSize: 23,
                fontWeight: 600,
                color: "#6a46c3",
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </div>
          )}
          <div
            className="stack-item"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              maxWidth: item.maxWidth,
              width: "100%",
              padding: item.padding,
              borderRadius: 14,
              background: item.bg,
              color: item.color,
              fontSize: item.fontSize,
              fontWeight: 500,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
