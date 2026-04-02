export const siteConfig = {
  contactEmail: 'mailto:contacto@conscienciahumana.com',
  siteUrl: 'https://conscienciahumana.com',
  orgName: 'Fundación Consciencia Humana',
  seo: {
    title: 'Fundación Consciencia Humana | Experiencias Transformadoras',
    description: 'Experiencias transformadoras para personas y equipos. Retiros, programas B2B y charlas abiertas para reconectarte con tu propósito y bienestar integral.',
    ogImage: 'https://conscienciahumana.com/img/hero-sunrise.png',
  },
  nav: [
    { label: 'Misión', href: '#proposito' },
    { label: 'Bitácora', href: '#bitacora' },
    { label: 'Nuestra Mirada', href: '#conversacion' },
    { label: 'Verticales', href: '#experiencias' },
    { label: 'Alianzas', href: '#alianzas' },
  ],
}

export const verticalesData = [
  {
    icon: 'Buildings',
    color: 'rosa-bg',
    title: 'Innovación en el Servicio Público',
    text: 'Acompañamos a quienes sostienen estructuras públicas para reconectar con sentido y propósito en su tarea diaria. Cuando quienes ayudan se sienten sostenidos, el impacto se multiplica.',
    delay: 0,
  },
  {
    icon: 'Briefcase',
    color: 'amarillo-bg',
    title: 'Desempeño con Propósito',
    text: 'Los resultados organizacionales son el reflejo del estado interno de sus líderes y equipos. Fortalecemos: autoconfianza, comunicación consciente, claridad estratégica y responsabilidad compartida.',
    delay: 1,
  },
  {
    icon: 'Sparkle',
    color: 'verde-bg',
    title: 'Experiencias abiertas',
    text: 'Diseñamos procesos grupales que funcionan como catalizadores de cambio. Espacios donde podés ampliar tu perspectiva, ordenar decisiones importantes y activar nuevas posibilidades.',
    delay: 2,
  },
]

export const impactoMetrics = [
  { number: '+500', label: 'Personas acompañadas', colorClass: 'rosa-t', delay: 0 },
  { number: '+50', label: 'Experiencias realizadas', colorClass: 'amarillo-t', delay: 1 },
  { number: '98%', label: 'Satisfacción promedio', colorClass: 'verde-t', delay: 2 },
  { number: '100%', label: 'Compromiso aplicado', colorClass: 'white-t', delay: 3 },
]

export const protagonistaIcons = [
  { icon: 'Heart', colorClass: 'rosa-bg', label: 'Tu bienestar', delay: 0 },
  { icon: 'Users', colorClass: 'amarillo-bg', label: 'Tus vínculos', delay: 1 },
  { icon: 'RocketLaunch', colorClass: 'verde-bg', label: 'Tu desempeño', delay: 2 },
  { icon: 'ChartLineUp', colorClass: '', label: 'Tus resultados', delay: 3 },
]

export const conversacionCards = [
  {
    icon: 'ArrowsLeftRight',
    style: { background: 'rgba(107,78,191,0.1)', color: 'var(--violeta-soft)' },
    borderColor: 'var(--violeta-soft)',
    title: 'Reaccionar vs. Elegir',
    text: 'Existe una diferencia entre reaccionar y elegir. Entre repetir patrones y crear nuevas posibilidades.',
    delay: 0,
  },
  {
    icon: 'ChatCenteredText',
    style: { background: 'rgba(232,67,147,0.1)', color: 'var(--rosa)' },
    borderColor: 'var(--rosa)',
    title: 'Conversación interna',
    text: 'No es una conversación intelectual. Es una conversación interna que redefine identidad.',
    delay: 1,
  },
  {
    icon: 'Heart',
    style: { background: 'rgba(0,184,148,0.1)', color: 'var(--verde)' },
    borderColor: 'var(--verde)',
    title: 'La conversación del corazón',
    text: 'Cuando cambia la forma en que te hablás, cambia la forma en que actuás. Y cuando cambia tu acción, cambia tu realidad.',
    delay: 2,
  },
]
