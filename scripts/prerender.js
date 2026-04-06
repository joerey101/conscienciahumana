/**
 * SEO Prerender Script — Fundación Consciencia Humana
 *
 * Genera un index.html por ruta con los meta tags correctos en el <head>.
 * El <body> conserva el bundle React SPA completo.
 * Esto resuelve el problema principal: los crawlers reciben el title/description
 * correcto para cada página sin necesidad de renderizar JS.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distClient = path.resolve(root, 'dist', 'client')

const BASE_URL = 'https://conscienciahumana.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/img/hero-sunrise.png`

// Mapa de rutas → datos SEO (fuente de verdad única)
const routes = [
  {
    url: '/',
    title: 'Consciencia Humana | Claridad, activación y coherencia',
    description: 'Procesos de transformación para personas, equipos y organizaciones que buscan más claridad, dirección, hábitos conscientes y coherencia en su forma de vivir y liderar.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/metodo',
    title: 'Método | Reconocer, activar y sostener el cambio | Consciencia Humana',
    description: 'Conocé el método de Consciencia Humana: un proceso de autoevaluación, activación y sostenimiento para transformar hábitos, dirección y forma de habitar la vida y el trabajo.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/programas',
    title: 'Programas | Transformación personal y grupal aplicada | Consciencia Humana',
    description: 'Explorá los programas de Consciencia Humana para personas, grupos y organizaciones: procesos guiados de claridad, activación, hábitos, bienestar y coherencia.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/programas/el-salto-de-tu-vida',
    title: 'El Salto de tu VIDA | Programa de evolución personal | Consciencia Humana',
    description: 'Un proceso de evolución personal para reconocer la incomodidad actual, activar nuevas respuestas y sostener una coherencia más consciente en la vida cotidiana.',
    ogImage: `${BASE_URL}/img/elsalto-hero.png`,
  },
  {
    url: '/programas/proceso-de-autoevaluacion-y-activacion-interior',
    title: 'Autoevaluación y Activación Interior | Programa guiado | Consciencia Humana',
    description: 'Un recorrido guiado para observar con honestidad el presente, ordenar prioridades, activar hábitos y construir una nueva dirección personal con más coherencia.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/programas/una-mirada-hacia-el-interior',
    title: 'Una Mirada hacia el Interior | Programa grupal y comunitario | Consciencia Humana',
    description: 'Programa de desarrollo emocional, conversación y bienestar integral para grupos, organizaciones sociales y contextos que requieren cuidado, escucha y metodología adaptable.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/organizaciones',
    title: 'Organizaciones | Liderazgo, bienestar y cohesión de equipos | Consciencia Humana',
    description: 'Programas para equipos y organizaciones que buscan trabajar liderazgo, bienestar, vínculos, cultura, comunicación y transformación humana aplicada.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/nosotros',
    title: 'Nosotros | Quiénes somos | Consciencia Humana',
    description: 'Conocé la visión, el criterio y la forma de acompañar de Consciencia Humana: profundidad con cuidado, humanidad con estructura y procesos con sentido.',
    ogImage: DEFAULT_OG_IMAGE,
  },
  {
    url: '/agenda',
    title: 'Agenda | Agendá una conversación | Consciencia Humana',
    description: 'Reservá una conversación inicial para explorar programas personales, propuestas para organizaciones o posibles alianzas con Consciencia Humana.',
    ogImage: DEFAULT_OG_IMAGE,
  },
]

function buildHeadTags({ url, title, description, ogImage }) {
  const canonical = `${BASE_URL}${url}`
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonical}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />`
}

function prerender() {
  // Leer el index.html del cliente como plantilla base
  const templatePath = path.resolve(distClient, 'index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('❌ No existe dist/client/index.html. Ejecutá npm run build:client primero.')
    process.exit(1)
  }
  const template = fs.readFileSync(templatePath, 'utf-8')

  // Quitar los tags estáticos genéricos del <head> del template
  // para que no dupliquen los que inyectamos por ruta
  const cleanTemplate = template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/g, '')
    .replace(/<meta property="og:[^"]*"[^>]*>/g, '')
    .replace(/<meta property="twitter:[^"]*"[^>]*>/g, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*>/g, '')

  for (const route of routes) {
    const headTags = buildHeadTags(route)

    // Inyectar los tags en el marcador <!--app-head-->
    const finalHtml = cleanTemplate.replace('<!--app-head-->', headTags)

    // Crear directorio de salida
    const outDir = route.url === '/'
      ? distClient
      : path.resolve(distClient, route.url.slice(1))

    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.resolve(outDir, 'index.html'), finalHtml)
    console.log(`✓ Pre-rendered: ${route.url}`)
  }

  console.log(`\nPre-rendering completado: ${routes.length} páginas generadas.`)
}

prerender()
