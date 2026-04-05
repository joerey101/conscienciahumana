import { useState } from 'react'
import { PageSEO } from '../components/seo/PageSEO'
import { useRevealAnimation } from '../hooks/useRevealAnimation'
import { CheckCircle, MessageSquare, Phone, Mail, AlertCircle, Loader2 } from 'lucide-react'
import { agendaPage, siteConfig } from '../data/site'

export function Agenda() {
  useRevealAnimation()

  // Estado para las opciones pre-seleccionadas
  const [selectedType, setSelectedType] = useState<string>("")

  // Estado del formulario
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    ubicacion: "",
    motivo_general: "",
    motivo_detalle: "",
    contacto_preferencia: "mail"
  })

  const handleCardClick = (value: string) => {
    setSelectedType(value)
    // Scroll al formulario (suave)
    document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    const payload = {
      ...formData,
      tipo_consulta: selectedType || "No especificado",
      _subject: `Nueva consulta desde la web: ${formData.nombre}`,
    }

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus("success")
        setFormData({
          nombre: "", email: "", telefono: "", ubicacion: "", motivo_general: "", motivo_detalle: "", contacto_preferencia: "mail"
        })
        setSelectedType("")
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <main className="page-agenda">
      <PageSEO 
        title={agendaPage.seo.title}
        description={agendaPage.seo.description}
        canonicalUrl="https://conscienciahumana.com/agenda"
      />

      {/* Hero */}
      <section className="section section-hero bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <span className="section-tag section-tag-light reveal mb-6" style={{ display: 'inline-block', color: 'var(--rosa)' }}>Contacto</span>
          <h1 className="reveal section-title" style={{ maxWidth: '850px', margin: '0 auto 2.5rem' }}>
            {agendaPage.hero.title}
          </h1>
          <p className="reveal section-subtitle" style={{ margin: '0 auto 3rem' }}>
            {agendaPage.hero.bajada}
          </p>
        </div>
      </section>

      {/* Opciones Interactivas */}
      <section className="section bg-white">
        <div className="section-inner">
          <div className="reveal text-center mb-16">
            <h2 className="section-title">{agendaPage.opciones.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {agendaPage.opciones.items.map((item, i) => {
              const borderColors = ['#7C3AED', '#E91E63', '#D97706']
              const c = borderColors[i]
              return (
                <div
                  key={i}
                  onClick={() => handleCardClick(item.value)}
                  className={`reveal p-10 rounded-[40px] border cursor-pointer transition-all hover:shadow-xl ${selectedType === item.value ? 'bg-violet-50 border-violet-300 shadow-md' : 'bg-white border-gray-100'}`}
                  style={{ borderTop: `4px solid ${c}` }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--violeta-deep)' }}>{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario-contacto" className="section section-light relative overflow-hidden">
        <div className="section-inner max-w-[800px] mx-auto">
          <div className="reveal relative z-10">
            
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle size={48} className="text-green-600" />
                </div>
                <h3 className="text-4xl font-bold mb-6" style={{ color: 'var(--violeta-deep)' }}>{agendaPage.formulario.success.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
                  {agendaPage.formulario.success.text}
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline-violeta" style={{ border: '2px solid var(--violeta-soft)', color: 'var(--violeta-soft)', borderRadius: '50px', padding: '1rem 2.5rem', fontWeight: '700' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
             <form onSubmit={handleSubmit} className="space-y-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--violeta-deep)' }}>{agendaPage.formulario.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <label htmlFor="selectedType" className="block text-sm font-black uppercase tracking-widest text-gray-500">Tipo de consulta *</label>
                  <select 
                    id="selectedType"
                    required
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-violet-400 focus:ring-0 outline-none text-gray-800 transition-all shadow-sm"
                  >
                    <option value="" disabled>Seleccioná una opción...</option>
                    {agendaPage.opciones.items.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.title}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="nombre" className="block text-sm font-black uppercase tracking-widest text-gray-500">Nombre completo *</label>
                  <input type="text" id="nombre" name="nombre" required value={formData.nombre} onChange={handleInputChange} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-violet-400 focus:ring-0 outline-none text-gray-800 transition-all shadow-sm" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-5">
                  <label htmlFor="email" className="block text-sm font-black uppercase tracking-widest text-gray-500">Email de contacto *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-violet-400 focus:ring-0 outline-none text-gray-800 transition-all shadow-sm" />
                </div>
                <div className="flex flex-col gap-5">
                  <label htmlFor="telefono" className="block text-sm font-black uppercase tracking-widest text-gray-500">WhatsApp / Teléfono</label>
                  <input type="text" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-violet-400 focus:ring-0 outline-none text-gray-800 transition-all shadow-sm" placeholder="Opcional" />
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <label htmlFor="motivo_general" className="block text-sm font-black uppercase tracking-widest text-gray-500">¿Qué te gustaría trabajar? *</label>
                <textarea id="motivo_general" name="motivo_general" required value={formData.motivo_general} onChange={handleInputChange} rows={3} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-violet-400 focus:ring-0 outline-none text-gray-800 transition-all shadow-sm resize-none"></textarea>
              </div>

              <div className="flex flex-col gap-5">
                <label className="block text-sm font-black uppercase tracking-widest text-gray-500">Preferencia de contacto</label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[
                    { val: 'mail', label: 'Mail', icon: <Mail size={18} /> },
                    { val: 'whatsapp', label: 'WhatsApp', icon: <MessageSquare size={18} /> },
                    { val: 'llamada', label: 'Llamada', icon: <Phone size={18} /> }
                  ].map((modo) => {
                    const isActive = formData.contacto_preferencia === modo.val;
                    return (
                    <label
                      key={modo.val}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.9rem 0.5rem',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: isActive ? '#534AB7' : '#ffffff',
                        border: `2px solid ${isActive ? '#534AB7' : '#e5e7eb'}`,
                        color: isActive ? '#ffffff' : '#6b7280',
                      }}
                    >
                      <input type="radio" name="contacto_preferencia" value={modo.val} checked={isActive} onChange={handleInputChange} className="hidden" />
                      {modo.icon}
                      <span style={{ fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{modo.label}</span>
                    </label>
                    );
                  })}
                </div>
              </div>
              
              {status === 'error' && (
                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-800">
                  <AlertCircle size={24} className="shrink-0" />
                  <div>
                    <p className="font-bold">{agendaPage.formulario.error.title}</p>
                    <p className="text-sm opacity-90">{agendaPage.formulario.error.text}</p>
                  </div>
                </div>
              )}

              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="btn-rosa btn-hero w-full flex items-center justify-center gap-3 group disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      {agendaPage.formulario.cta}...
                    </>
                  ) : (
                    <>
                      {agendaPage.formulario.cta}
                    </>
                  )}
                </button>
                <p className="text-center text-gray-400 text-sm mt-8">
                  {agendaPage.formulario.footer}
                </p>
              </div>

             </form>
            )}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-violet-50 -z-0"></div>
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-rosa/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* Alternativa */}
      <section className="section bg-white text-center">
        <div className="section-inner max-w-4xl mx-auto">
          <h2 className="reveal section-title mb-6">
            Si preferís, también<br />
            podés reservar un espacio
          </h2>
          <p className="reveal section-subtitle mx-auto mb-12">
            {agendaPage.alternativa.text}
          </p>
          <div className="reveal">
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="btn-rosa btn-hero">
              {agendaPage.alternativa.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Confianza */}
      <section className="section bg-[#FDF9F3]">
        <div className="section-inner text-center">
          <h2 className="reveal section-title mb-8 max-w-3xl mx-auto">
            {agendaPage.confianza.title}
          </h2>
          <p className="reveal text-2xl font-light text-gray-600 leading-relaxed max-w-4xl mx-auto italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "{agendaPage.confianza.text}"
          </p>
        </div>
      </section>
    </main>
  )
}
