

export function Placeholder({ title }: { title: string }) {
  return (
    <main className="section" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '10rem' }}>
      <div className="section-inner">
        <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
          {title}
        </h1>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          Esta sección se encuentra en desarrollo. Próximamente estará disponible.
        </p>
      </div>
    </main>
  );
}
