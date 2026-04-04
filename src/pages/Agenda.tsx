import { useState } from 'react';
import { PageSEO } from '../components/seo/PageSEO';
import { useRevealAnimation } from '../hooks/useRevealAnimation';
import { UserCircle, Buildings, Handshake, CheckCircle } from '@phosphor-icons/react';

export function Agenda() {
  useRevealAnimation();

  // Estado para las opciones pre-seleccionadas
  const [selectedType, setSelectedType] = useState<"persona" | "organización" | "alianza" | "">("");

  // Estado del formulario
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ubicacion: "",
    motivo_general: "",
    motivo_detalle: "",
    contacto_preferencia: "mail"
  });

  const handleCardClick = (type: "persona" | "organización" | "alianza") => {
    setSelectedType(type);
    // Scroll al formulario (suave)
    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Construir el payload
    const payload = {
      ...formData,
      tipo_consulta: selectedType || "No especificado"
    };

    try {
      // Reemplaza YOUR_FORMSPREE_ID por tu ID real de Formspree (ej: xknkpgoy)
      const response = await fetch("https://formspree.io/f/mlgoppeo", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          nombre: "", email: "", telefono: "", ubicacion: "", motivo_general: "", motivo_detalle: "", contacto_preferencia: "mail"
        });
        setSelectedType("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <main className="page-agenda">
      <PageSEO 
        title="Agenda | Agendá una conversación con Consciencia Humana"
        description="Reservá una conversación inicial para explorar programas personales, propuestas para organizaciones o posibles alianzas con Consciencia Humana."
        canonicalUrl="https://conscienciahumana.com/agenda"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag reveal mb-4" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Contacto</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal" style={{ color: 'var(--violeta-deep)', fontFamily: 'Poppins' }}>
            Abramos una primera conversación
          </h1>
          <p className="text-xl max-w-3xl mx-auto reveal" style={{ color: 'var(--texto-light)', fontFamily: 'Lato', lineHeight: 1.6, fontWeight: 300, animationDelay: '0.1s' }}>
            Si sentís que este enfoque puede ayudarte a vos, a tu equipo o a tu organización, este puede ser un buen punto de partida. No hace falta llegar con todo resuelto.
          </p>
        </div>
      </section>

      {/* Opciones Interactivas */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner">
          <div className="reveal text-center mb-10">
            <h2 className="section-title">¿Desde dónde nos escribís?</h2>
            <p style={{ color: 'var(--texto-light)' }}>Elegí una opción para empezar</p>
          </div>

          <div className="grid-3-col stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Card 1 */}
            <div 
              onClick={() => handleCardClick("persona")} 
              className="reveal triada-card"
              style={{ 
                cursor: 'pointer', background: selectedType === 'persona' ? '#FDF9F3' : 'white', 
                border: selectedType === 'persona' ? '2px solid var(--rosa)' : '2px solid #EEE', 
                textAlign: 'center'
              }}
            >
              <UserCircle size={48} weight={selectedType === 'persona' ? 'fill' : 'light'} color={selectedType === 'persona' ? 'var(--rosa)' : 'var(--texto-light)'} style={{ margin: '0 auto 1.5rem', transition: 'all 0.3s ease' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '1rem' }}>Soy una persona</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto-light)' }}>Quiero conocer procesos para revisar mi momento actual, mis hábitos o mi dirección.</p>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => handleCardClick("organización")} 
              className="reveal triada-card"
              style={{ 
                cursor: 'pointer', background: selectedType === 'organización' ? '#FDF9F3' : 'white', 
                border: selectedType === 'organización' ? '2px solid var(--amarillo)' : '2px solid #EEE', 
                textAlign: 'center'
              }}
            >
              <Buildings size={48} weight={selectedType === 'organización' ? 'fill' : 'light'} color={selectedType === 'organización' ? 'var(--amarillo)' : 'var(--texto-light)'} style={{ margin: '0 auto 1.5rem', transition: 'all 0.3s ease' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '1rem' }}>Represento a organización</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto-light)' }}>Quiero conversar sobre liderazgo, vínculos, cultura o una propuesta para el equipo.</p>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => handleCardClick("alianza")} 
              className="reveal triada-card"
              style={{ 
                cursor: 'pointer', background: selectedType === 'alianza' ? '#FDF9F3' : 'white', 
                border: selectedType === 'alianza' ? '2px solid var(--azul)' : '2px solid #EEE', 
                textAlign: 'center'
              }}
            >
              <Handshake size={48} weight={selectedType === 'alianza' ? 'fill' : 'light'} color={selectedType === 'alianza' ? 'var(--azul)' : 'var(--texto-light)'} style={{ margin: '0 auto 1.5rem', transition: 'all 0.3s ease' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--violeta-deep)', fontFamily: 'Poppins', marginBottom: '1rem' }}>Busco una alianza</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--texto-light)' }}>Quiero conversar sobre procesos de colaboración, articulación institucional y proyectos.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario-contacto" className="section section-light" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="reveal triada-card" style={{ background: 'white' }}>
            
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <CheckCircle size={80} color="var(--verde)" weight="fill" style={{ margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '2rem', color: 'var(--violeta-deep)', marginBottom: '1rem' }}>¡Mensaje enviado!</h3>
                <p style={{ color: 'var(--texto-light)', fontSize: '1.1rem' }}>Recibimos tu mensaje. Vamos a leerlo con atención y responder a la brevedad.</p>
                <button onClick={() => setStatus('idle')} className="btn-hero" style={{ background: '#eee', color: 'var(--texto)', border: 'none', marginTop: '2rem' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
             <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Contexto autocompletado */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Tipo de consulta</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as any)}
                  style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', background: '#F8F9FA' }}
                >
                  <option value="" disabled>Seleccioná una opción...</option>
                  <option value="persona">Busco un proceso personal</option>
                  <option value="organización">Represento a una organización / equipo</option>
                  <option value="alianza">Estoy planteando una alianza o colaboración</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Nombre y Apellido *</label>
                  <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleInputChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Correo Electrónico *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="telefono" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Teléfono / WhatsApp</label>
                  <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} placeholder="Opcional" />
                </div>
                <div>
                  <label htmlFor="ubicacion" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Ciudad / País</label>
                  <input type="text" id="ubicacion" name="ubicacion" value={formData.ubicacion} onChange={handleInputChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} placeholder="Opcional" />
                </div>
              </div>

              <div>
                <label htmlFor="motivo_general" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>¿Qué te gustaría trabajar? *</label>
                <textarea id="motivo_general" name="motivo_general" required value={formData.motivo_general} onChange={handleInputChange} rows={3} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>

              <div>
                <label htmlFor="motivo_detalle" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>¿Qué te motivó a escribirnos hoy?</label>
                <textarea id="motivo_detalle" name="motivo_detalle" value={formData.motivo_detalle} onChange={handleInputChange} rows={3} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }} placeholder="Opcional"></textarea>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, color: 'var(--violeta-deep)' }}>Preferís que te contactemos por:</label>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  {['mail', 'WhatsApp', 'llamada'].map((modo) => (
                    <label key={modo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      <input type="radio" name="contacto_preferencia" value={modo} checked={formData.contacto_preferencia === modo} onChange={handleInputChange} style={{ width: '18px', height: '18px', accentColor: 'var(--rosa)' }} />
                      <span style={{ textTransform: 'capitalize', color: 'var(--texto)' }}>{modo}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {status === 'error' && (
                <div style={{ padding: '1rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '8px', fontSize: '0.95rem' }}>
                  Hubo un problema al intentar enviar el formulario. Por favor, intentá nuevamente o envianos un correo directo.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn-rosa" 
                style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center', opacity: status === 'submitting' ? 0.7 : 1 }}
              >
                {status === 'submitting' ? 'Enviando mensage...' : 'Enviar mensaje inicial'}
              </button>

             </form>
            )}
          </div>
        </div>
      </section>

      {/* Sección Confianza */}
      <section className="section bg-white" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-inner text-center">
          <h2 className="section-title reveal" style={{ fontSize: '2rem' }}>Cada proceso empieza con una conversación bien orientada</h2>
          <p className="text-lg max-w-4xl mx-auto reveal" style={{ color: 'var(--texto-light)', lineHeight: 1.8, marginTop: '2rem' }}>
            El objetivo de este primer intercambio no es apurarte a decidir nada. Es escuchar, entender el contexto y ver si hay un camino posible para trabajar juntos.
          </p>
        </div>
      </section>
    </main>
  );
}
