# Plan de Implementación — Fundación Consciencia Humana
**Para**: Antigravity  
**Fecha**: Abril 2026  
**Repo**: `joerey101/conscienciahumana`  
**Deploy**: Vercel (CD automático desde `main`)

---

## Contexto técnico

- **Stack**: React 19 + TypeScript + Vite
- **Estilos**: CSS modular con clases semánticas propias
- **Iconografía**: `@phosphor-icons/react` y `lucide-react`
- **Arquitectura actual**: SPA / Landing Page lineal en `App.tsx`
- **Regla validada con Negocio**: NO fragmentar el Home principal — queda intacto
- **Datos y textos**: centralizados en `/data/site.ts` — no tocar texto dentro de componentes
- **Animaciones**: `useRevealAnimation` via Intersection Observer en `/hooks/`

### Estructura actual de App.tsx (NO modificar el orden ni los componentes)
```
<Hero />
<Conversacion />
<Mision />
<Bitacora />
<Transformacion />
<Protagonista />
<DondeActuamos />
<Verticales />
<Impacto />
<Alianzas />
<Sumate />
```

---

## ETAPA 0 — Instalación de dependencias base

Instalar en el proyecto:
- `react-router-dom` (última versión estable)
- `react-helmet-async` (última versión estable)

En `main.tsx`, envolver la app con `BrowserRouter` (de react-router-dom) y `HelmetProvider` (de react-helmet-async), en ese orden de afuera hacia adentro.

**Resultado esperado**: El proyecto compila sin errores. El comportamiento actual del Home no cambia en absoluto.

---

## ETAPA 1 — Routing: estructura de rutas sin romper el Home

En `App.tsx`, reemplazar el renderizado lineal actual por un sistema de rutas usando `<Routes>` y `<Route>` de react-router-dom.

La ruta `"/"` debe renderizar exactamente lo mismo que hoy: todos los componentes de secciones en el mismo orden, sin ningún cambio.

Crear rutas con un componente placeholder "Próximamente" para:
- `/metodo`
- `/programas`
- `/programas/el-salto-de-tu-vida`
- `/programas/proceso-de-autoevaluacion-y-activacion-interior`
- `/programas/una-mirada-hacia-el-interior`
- `/organizaciones`
- `/nosotros`
- `/agenda`
- `/impacto`
- `/recursos`

El `Navbar` y `Footer` deben seguir apareciendo en **todas** las rutas.

El scroll suave del Navbar (anclas al Home) debe seguir funcionando cuando el usuario está en `"/"`. Cuando está en otra ruta, los links de ancla deben navegar primero a `"/"` y luego hacer scroll al bloque correspondiente.

**Resultado esperado**: El Home funciona exactamente igual. Las rutas nuevas muestran un placeholder. Sin errores de compilación.

---

## ETAPA 2 — SEO base con react-helmet-async

Crear un componente reutilizable `PageSEO.tsx` en `/components/seo/` que reciba las props: `title`, `description`, `canonicalUrl`, `ogImage` (opcional).

El componente debe usar `Helmet` de react-helmet-async para inyectar:
- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:url">`
- `<meta property="og:type" content="website">`
- `<meta property="og:image">` (si se pasa)
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`

Agregar este componente en la ruta `"/"` con los siguientes valores:
- **title**: `Consciencia Humana | Claridad, activación y coherencia`
- **description**: `Procesos de transformación para personas, equipos y organizaciones que buscan más claridad, dirección, hábitos conscientes y coherencia en su forma de vivir y liderar.`
- **canonicalUrl**: `https://conscienciahumana.com/`

**Resultado esperado**: El Home tiene meta tags correctos. Las otras rutas los tendrán cuando se construyan.

---

## ETAPA 3 — Página Método

Crear `/pages/Metodo.tsx`

### PageSEO
- **title**: `Método | Reconocer, activar y sostener el cambio`
- **description**: `Conocé el método de Consciencia Humana: un proceso de autoevaluación, activación y sostenimiento para transformar hábitos, dirección y forma de habitar la vida y el trabajo.`
- **canonicalUrl**: `https://conscienciahumana.com/metodo`

### Sección 1 — Hero
- **H1**: `Método de autoevaluación, activación y sostenimiento`
- **Bajada**: `Un proceso para observar con honestidad la realidad actual, activar nuevas respuestas y construir una coherencia más estable en la vida, en los vínculos y en la forma de habitar el trabajo.`

### Sección 2 — Introducción (texto corrido)
`En Consciencia Humana no entendemos la transformación como un momento aislado ni como una experiencia meramente emocional. La entendemos como un proceso. Un proceso que empieza cuando una persona, un equipo o una organización acepta mirar con más verdad lo que hoy está viviendo, y se anima a revisar no solo lo que le pasa, sino también la forma en que responde a eso.`

### Sección 3 — Tres cards (los tres momentos del método)

**Card 1 — Reconocer**
- Subtítulo: `Ver con más honestidad lo que hoy es`
- Texto: `El primer paso no es cambiar rápido. Es reconocer. Reconocer la incomodidad, el desgaste, los hábitos que ya no sostienen, la distancia entre los resultados actuales y la vida que se quiere habitar.`
- Lista (qué se trabaja): registro interno / patrones repetidos / desgaste emocional / hábitos / ruido y dispersión / lectura de resultados / zonas de desconexión

**Card 2 — Activar**
- Subtítulo: `Responder distinto también es una práctica`
- Texto: `Una vez que algo se ve, aparece la posibilidad de responder de otra manera. Activar es dejar de quedar atrapado solo en el diagnóstico. Es ordenar prioridades, nombrar una dirección, empezar a construir una respuesta más consciente.`
- Lista: foco y dirección / capacidad de decisión / hábitos y disciplina consciente / lenguaje y declaración / acción alineada / compromiso con el proceso

**Card 3 — Sostener**
- Subtítulo: `La transformación se vuelve real cuando encuentra forma de permanecer`
- Texto: `No alcanza con tener un momento de claridad. Hace falta sostenerlo. Sostener es construir una nueva coherencia: una forma más consciente de estar, decidir, comunicar y actuar.`
- Lista: coherencia cotidiana / seguimiento / prácticas de recentrado / comunicación / revisión de desvíos / capacidad de sostener sin rigidez

### Sección 4 — Cómo se vive el proceso
- **H2**: `Cómo se vive este proceso`
- Texto: `Nuestra forma de acompañar combina espacios conversatorios guiados, escucha atenta y sin juicio, ejercicios simples y aplicables, reflexión individual y grupal, y herramientas para trasladar lo trabajado a la vida diaria.`

### Sección 5 — CTA de cierre
- **H2**: `Mirar distinto puede cambiar lo que sigue`
- Texto: `Todo proceso empieza cuando algo deja de poder seguir igual.`
- Botón → `/agenda`: `Quiero conversar sobre este proceso`

Registrar la ruta `/metodo` en `App.tsx`.

---

## ETAPA 4 — Página Organizaciones

Crear `/pages/Organizaciones.tsx`

### PageSEO
- **title**: `Organizaciones | Liderazgo, bienestar y cohesión de equipos`
- **description**: `Programas para equipos y organizaciones que buscan trabajar liderazgo, bienestar, vínculos, cultura, comunicación y transformación humana aplicada.`
- **canonicalUrl**: `https://conscienciahumana.com/organizaciones`

### Sección 1 — Hero
- **H1**: `Procesos para equipos y organizaciones que necesitan más claridad, cohesión y humanidad`
- **Bajada**: `Diseñamos experiencias y programas para organizaciones que quieren trabajar liderazgo, bienestar, comunicación, cultura y transformación humana aplicada, sin caer en soluciones superficiales ni en discursos vacíos.`
- Botón → `/agenda`: `Agendar una conversación inicial`

### Sección 2 — Situaciones que acompañamos
- **H2**: `Situaciones en las que podemos aportar`
- Lista: desgaste sostenido o burnout / liderazgo desconectado o sin centro / vínculos tensos o conversaciones difíciles / falta de cohesión / culturas sobrecargadas de urgencia y poca reflexión / necesidad de recuperar sentido, presencia y forma de trabajo

### Sección 3 — Líneas de trabajo (5 cards)
- **Card 1 — Liderazgo y claridad**: Espacios para revisar la manera de conducir, decidir, comunicar y sostener equipos desde una mayor presencia y coherencia.
- **Card 2 — Bienestar y desgaste**: Procesos para abordar agotamiento, sobrecarga, desregulación y hábitos organizacionales que dañan la energía del equipo.
- **Card 3 — Vínculos y comunicación**: Experiencias para abrir conversación, fortalecer escucha, mejorar la calidad vincular y habilitar intercambios más honestos.
- **Card 4 — Cultura y coherencia**: Intervenciones para alinear narrativa, prácticas y formas reales de habitar la organización.
- **Card 5 — Procesos en contextos sociales y comunitarios**: Acompañamiento a organizaciones sociales, espacios comunitarios y dispositivos que requieren sensibilidad, cuidado y realismo operativo.

### Sección 4 — Diferencial
- **H2**: `No trabajamos solo para que un equipo "se sienta mejor"`
- Texto: `Trabajamos para que una organización pueda verse con más honestidad, mejorar la calidad de sus conversaciones, ordenar lo humano que hoy está operando en silencio, y construir una forma más coherente de liderar y vincularse. No ofrecemos entretenimiento corporativo. Ofrecemos procesos cuidados, serios y aplicables.`

### Sección 5 — Formatos posibles
- **H2**: `Formatos de trabajo`
- Texto: `La propuesta puede tomar distintas formas: talleres, ciclos de encuentros, procesos de activación, espacios de liderazgo, acompañamiento de equipos, experiencias para organizaciones sociales o comunitarias. Cada formato se diseña en función del punto de partida, la madurez del grupo y el tipo de transformación buscada.`

### Sección 6 — CTA
- **H2**: `Cada organización necesita su propia puerta de entrada`
- Texto: `Podemos conversar sobre el momento actual de tu equipo u organización y pensar juntos cuál es el formato más adecuado.`
- Botón 1 → `/agenda`: `Quiero una reunión inicial`
- Botón 2 → `/programas`: `Consultar por programas`

Registrar la ruta `/organizaciones` en `App.tsx`.

---

## ETAPA 5 — Página Nosotros

Crear `/pages/Nosotros.tsx`

### PageSEO
- **title**: `Nosotros | Quiénes somos en Consciencia Humana`
- **description**: `Conocé la visión, el criterio y la forma de acompañar de Consciencia Humana: profundidad con cuidado, humanidad con estructura y procesos con sentido.`
- **canonicalUrl**: `https://conscienciahumana.com/nosotros`

### Sección 1 — Hero
- **H1**: `Un espacio para mirar con más verdad y acompañar con más conciencia`
- **Bajada**: `Consciencia Humana nace del deseo de crear procesos donde la transformación no sea una consigna vacía, sino una experiencia real de observación, activación y coherencia aplicada a la vida.`

### Sección 2 — Lo que creemos
- **H2**: `Lo que creemos`
- Texto: `Creemos que muchas personas y organizaciones viven sosteniendo formas que ya no expresan lo que son, lo que necesitan o lo que están llamadas a construir. Creemos también que transformar no es escapar de la realidad. Es habitarla con más verdad.`
- Lista: reconocer lo que hoy pasa / abrir conversación donde hay ruido o silencio / revisar hábitos, dirección y vínculos / activar formas más conscientes de estar, decidir y actuar

### Sección 3 — Nuestra forma de acompañar
- **H2**: `Nuestra forma de acompañar`
- Texto: `Trabajamos desde una facilitación cercana, respetuosa y profunda. No buscamos imponer respuestas ni generar impacto vacío. Buscamos crear condiciones para que aparezca una mirada más honesta, una palabra más verdadera y una posibilidad real de movimiento.`

### Sección 4 — Criterio
- **H2**: `Profundidad con cuidado. Humanidad con estructura.`
- Texto: `Nos importa tanto la profundidad del proceso como el modo en que ese proceso se sostiene. Por eso cuidamos el lenguaje, la intensidad, el contexto, el momento del grupo o de la persona, y la posibilidad real de llevar lo trabajado a la vida concreta. No creemos en transformaciones declamadas. Creemos en procesos honestos, sensibles y aplicables.`

### Sección 5 — Equipo
- **H2**: `Quiénes acompañan`
- Texto: `Consciencia Humana está impulsada por facilitadores comprometidos con el desarrollo humano, la escucha, la autoobservación, la activación y la construcción de procesos con sentido.`
- **Nota**: Dejar espacio/placeholder para fotos y bios del equipo cuando estén disponibles.

### Sección 6 — CTA de cierre
- Frase destacada: `No acompañamos desde afuera. Acompañamos desde presencia.`
- Texto: `Cada proceso necesita escucha, criterio y una forma de estar.`
- Botón → `/metodo`: `Conocer el método`

Registrar la ruta `/nosotros` en `App.tsx`.

---

## ETAPA 6 — Página Programas

Crear `/pages/Programas.tsx`

### PageSEO
- **title**: `Programas | Transformación personal y grupal aplicada`
- **description**: `Explorá los programas de Consciencia Humana para personas, grupos y organizaciones: procesos guiados de claridad, activación, hábitos, bienestar y coherencia.`
- **canonicalUrl**: `https://conscienciahumana.com/programas`

### Sección 1 — Hero
- **H1**: `Programas para mirar, activar y sostener un cambio real`
- **Bajada**: `En Consciencia Humana diseñamos programas y procesos para personas, equipos y organizaciones que necesitan claridad, dirección, nuevas herramientas y una forma más consciente de habitar la vida, los vínculos y el trabajo.`
- Botón 1 → `/agenda`: `Quiero conocer cuál aplica para mí`
- Botón 2 → `/organizaciones`: `Quiero llevarlo a mi organización`

### Sección 2 — Para personas (2 cards)

**Card — El Salto de tu VIDA**
- Subtítulo: `Un proceso de evolución personal para reconocer, activar y sostener una nueva coherencia.`
- Para quién: agotamiento o desconexión / querer revisar hábitos y dirección / necesitar claridad interna / sentir que los resultados no expresan quiénes son
- Qué trabaja: claridad interna / observación de hábitos / activación de nuevas respuestas / disciplina consciente / alineamiento
- CTA → `/programas/el-salto-de-tu-vida`: `Quiero conocer este programa`

**Card — Proceso de Autoevaluación y Activación Interior**
- Subtítulo: `Un recorrido guiado para mirar con honestidad el presente y empezar a ordenar una nueva dirección.`
- Para quién: personas en momento de revisión personal que necesitan estructura para observar, nombrar y activar
- Qué trabaja: autoobservación / claridad / activación interior / hábitos / seguimiento / coherencia
- CTA → `/programas/proceso-de-autoevaluacion-y-activacion-interior`: `Quiero empezar por acá`

### Sección 3 — Grupales y comunitarios (1 card)

**Card — Una Mirada hacia el Interior**
- Subtítulo: `Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad.`
- Para quién: organizaciones sociales / espacios comunitarios / dispositivos de acompañamiento / grupos que requieren trabajo emocional con cuidado
- Qué trabaja: autoconocimiento emocional / aceptación / perdón / gestión emocional saludable / resiliencia / bienestar integral
- CTA → `/agenda`: `Consultar por esta línea`

### Sección 4 — Para organizaciones
- **H2**: `Programas para equipos y organizaciones`
- Texto: `No todas las organizaciones necesitan lo mismo, pero muchas comparten un mismo fondo: desgaste, ruido, baja calidad conversacional, liderazgo tenso o necesidad de recuperar humanidad sin perder dirección.`
- Botón → `/organizaciones`: `Ver propuesta para organizaciones`

### Sección 5 — No sé por dónde empezar
- **H2**: `¿No sabés por dónde empezar?`
- Texto: `No hace falta llegar sabiendo exactamente qué programa necesitás. A veces la mejor puerta de entrada es una conversación para entender en qué momento estás y cuál es el formato más adecuado para empezar.`
- Botón 1 → `/agenda`: `Quiero orientación`
- Botón 2 → `/agenda`: `Agendar una conversación`

### Sección 6 — Cierre
Frase: `Mirar con más honestidad. Activar una respuesta más consciente. Sostener una coherencia posible. Ese es el trabajo de fondo que organiza nuestros programas.`

Registrar la ruta `/programas` en `App.tsx`.

---

## ETAPA 7 — Páginas individuales de programas

Crear tres archivos:
- `/pages/programas/ElSalto.tsx`
- `/pages/programas/AutoevaluacionActivacion.tsx`
- `/pages/programas/UnaMirada.tsx`

Cada uno usa el mismo layout de página de programa con: PageSEO, Hero, secciones "para quién es", "qué trabaja", "estructura del proceso" y CTA.

### ElSalto.tsx
- **title**: `El Salto de tu VIDA | Programa de evolución personal`
- **description**: `Un proceso de evolución personal para reconocer la incomodidad actual, activar nuevas respuestas y sostener una coherencia más consciente en la vida cotidiana.`
- **canonicalUrl**: `https://conscienciahumana.com/programas/el-salto-de-tu-vida`

**Contenido:**
- **H1**: `El Salto de tu VIDA`
- **Bajada**: `Un proceso de evolución personal organizado en tres etapas: Reconocimiento, Activación y Sustentabilidad.`
- **Para quién**: personas con agotamiento o desconexión / que quieren revisar hábitos y dirección / que necesitan claridad interna / que sienten que sus resultados no expresan quiénes son ni cómo quieren vivir
- **Qué trabaja**: claridad interna / observación de hábitos y patrones / revisión de resultados / activación de nuevas respuestas / disciplina consciente / alineamiento y sostén
- **Estructura**: 1. Reconocer → 2. Activar → 3. Sostener
- **Resultado esperado**: Más claridad para decidir, menos dispersión, mayor coherencia entre intención y acción, herramientas para volver al centro cuando el proceso se desordena.
- **CTA** → `/agenda`: `Quiero conocer este programa`

### AutoevaluacionActivacion.tsx
- **title**: `Autoevaluación y Activación Interior | Programa guiado`
- **description**: `Un recorrido guiado para observar con honestidad el presente, ordenar prioridades, activar hábitos y construir una nueva dirección personal con más coherencia.`
- **canonicalUrl**: `https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior`

**Contenido:**
- **H1**: `Proceso de Autoevaluación y Activación Interior`
- **Bajada**: `Una puerta de entrada a la metodología Consciencia Humana para quienes necesitan claridad, cambio, hábitos, foco o acompañamiento.`
- **Para quién**: personas en momento de revisión personal que necesitan estructura para observar lo que hoy les pasa, nombrar lo que ya no funciona, y empezar a activar decisiones, hábitos y dirección
- **Qué trabaja**: autoobservación / claridad / activación interior / hábitos / seguimiento / coherencia
- **Valor diferencial**: nombre más sobrio y fácil de explicar en ámbitos corporativos, institucionales o digitales
- **CTA** → `/agenda`: `Quiero empezar por acá`

### UnaMirada.tsx
- **title**: `Una Mirada hacia el Interior | Programa grupal y comunitario`
- **description**: `Programa de desarrollo emocional, conversación y bienestar integral para grupos, organizaciones sociales y contextos que requieren cuidado, escucha y metodología adaptable.`
- **canonicalUrl**: `https://conscienciahumana.com/programas/una-mirada-hacia-el-interior`

**Contenido:**
- **H1**: `Una Mirada hacia el Interior`
- **Bajada**: `Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad.`
- **Para quién**: organizaciones sociales / espacios comunitarios / dispositivos de acompañamiento / grupos que requieren trabajo emocional con cuidado y contención
- **Qué trabaja**: autoconocimiento emocional / aceptación y autoaceptación / perdón / gestión emocional saludable / resiliencia / bienestar integral / mirada de futuro
- **Metodología**: seis encuentros grupales en formato taller-conversatorio, encuentros en círculo, escucha mutua, ejercicios prácticos, dinámicas breves y propuestas corporales simples. Tono cercano y liviano que permite abordar temas profundos de forma cuidada.
- **Resultado observado**: buena recepción, participación activa, habilitación de la palabra en torno a emociones, miedos y deseos, apertura de procesos de reflexión sobre historia, vínculos y patrones de conducta.
- **CTA** → `/agenda`: `Consultar por esta línea de trabajo`

Registrar las tres rutas en `App.tsx`.

---

## ETAPA 8 — Página Agenda (formulario)

Crear `/pages/Agenda.tsx`

### PageSEO
- **title**: `Agenda | Agendá una conversación con Consciencia Humana`
- **description**: `Reservá una conversación inicial para explorar programas personales, propuestas para organizaciones o posibles alianzas con Consciencia Humana.`
- **canonicalUrl**: `https://conscienciahumana.com/agenda`

### Sección 1 — Hero
- **H1**: `Abramos una primera conversación`
- **Bajada**: `Si sentís que este enfoque puede ayudarte a vos, a tu equipo o a tu organización, este puede ser un buen punto de partida. No hace falta llegar con todo resuelto.`

### Sección 2 — Opciones de ingreso (3 cards clickeables que pre-seleccionan el tipo en el formulario)
- **Opción 1 — "Soy una persona"**: Quiero conocer procesos para revisar mi momento actual, mis hábitos, mi claridad o mi dirección.
- **Opción 2 — "Represento a una organización"**: Quiero conversar sobre liderazgo, bienestar, vínculos, cultura o una propuesta para mi equipo.
- **Opción 3 — "Quiero explorar una alianza"**: Quiero conversar sobre colaboración, articulación institucional o una iniciativa conjunta.

### Sección 3 — Formulario

Campos:
- Nombre y apellido (texto, requerido)
- Correo electrónico (email, requerido)
- Teléfono (texto, opcional)
- Ciudad / País (texto, opcional)
- Tipo de consulta (se pre-selecciona con la opción de arriba — valores: `"persona"` | `"organización"` | `"alianza"`)
- ¿Qué te gustaría trabajar? (textarea, requerido)
- ¿Qué te motivó a escribirnos hoy? (textarea, opcional)
- ¿Preferís que te contactemos por...? (radio: `mail` / `llamada` / `WhatsApp`)

Usar estado local de React (`useState`). Para el envío, usar Formspree:

```ts
fetch("https://formspree.io/f/[ID_A_DEFINIR]", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
})
```

> ⚠️ **Pendiente**: reemplazar `[ID_A_DEFINIR]` con el ID real de la cuenta Formspree una vez creada.

Mostrar estado de loading mientras envía. Mensaje de confirmación post-envío:
> `Recibimos tu mensaje. Vamos a leerlo con atención y responder a la brevedad.`

### Sección 4 — Mensaje de confianza
- **H2**: `Cada proceso empieza con una conversación bien orientada`
- Texto: `El objetivo de este primer intercambio no es apurarte a decidir nada. Es escuchar, entender el contexto y ver si hay un camino posible para trabajar juntos.`

Registrar la ruta `/agenda` en `App.tsx`.

---

## ETAPA 9 — SEO técnico final

### 1. En `index.html`, agregar en `<head>`:

```html
<meta name="robots" content="index, follow">

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fundación Consciencia Humana",
  "url": "https://conscienciahumana.com",
  "description": "Procesos de transformación para personas, equipos y organizaciones",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Spanish"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Consciencia Humana",
  "url": "https://conscienciahumana.com"
}
</script>
```

### 2. Crear `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://conscienciahumana.com/sitemap.xml
```

### 3. Crear `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://conscienciahumana.com/</loc><lastmod>2026-04-01</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://conscienciahumana.com/metodo</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://conscienciahumana.com/programas</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://conscienciahumana.com/programas/el-salto-de-tu-vida</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://conscienciahumana.com/programas/una-mirada-hacia-el-interior</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://conscienciahumana.com/organizaciones</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://conscienciahumana.com/nosotros</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://conscienciahumana.com/agenda</loc><lastmod>2026-04-01</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
</urlset>
```

### 4. Verificar `vite.config.ts`
Confirmar que el build genera assets con hash para cache busting.

### 5. Crear/verificar `vercel.json` en la raíz del proyecto:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

> ⚠️ **Crítico**: sin esto, las rutas de react-router-dom dan 404 al recargar la página en Vercel.

---

## ETAPA 10 — Actualizar Navbar y Footer

### Navbar.tsx

Reemplazar los links que van a páginas nuevas usando `<Link>` de react-router-dom:

| Link | Tipo | Destino |
|---|---|---|
| Método | `<Link>` | `/metodo` |
| Programas | `<Link>` | `/programas` |
| Organizaciones | `<Link>` | `/organizaciones` |
| Nosotros | `<Link>` | `/nosotros` |
| Agenda | `<Link>` | `/agenda` |
| Links de ancla al Home | Scroll suave en `"/"`, navegar a `"/#seccion"` desde otras rutas | — |

El botón principal del header `"Agendar conversación"` → `/agenda`.

### Footer.tsx

Actualizar todos los links de navegación y programas con `<Link to="...">`.

Agregar al pie del footer:

**Disclaimer legal:**
> `La información compartida en este sitio tiene fines orientativos y de presentación de programas. No reemplaza acompañamiento clínico, médico ni terapéutico especializado cuando este sea necesario.`

**Texto de privacidad:**
> `Tus datos serán utilizados únicamente para responder tu consulta y orientarte sobre propuestas de Consciencia Humana.`

---

## Resumen de orden de ejecución

| # | Etapa | Riesgo de romper algo |
|---|---|---|
| 0 | Instalar dependencias | Ninguno |
| 1 | Agregar routing | Bajo — solo envuelve lo existente |
| 10 | Actualizar Navbar y Footer | Bajo |
| 2 | SEO base Home | Ninguno |
| 3 | Página Método | Ninguno |
| 4 | Página Organizaciones | Ninguno |
| 5 | Página Nosotros | Ninguno |
| 6 | Página Programas | Ninguno |
| 7 | Páginas individuales de programas | Ninguno |
| 8 | Página Agenda + formulario | Ninguno (Formspree ID pendiente) |
| 9 | SEO técnico final | Ninguno |

---

## Pendientes a resolver antes de deploy

- [ ] Crear cuenta en Formspree y reemplazar `[ID_A_DEFINIR]` en Etapa 8
- [ ] Confirmar si se integra Calendly en `/agenda` además del formulario
- [ ] Fotos y bios del equipo para la sección Nosotros
- [ ] Definir si `/impacto` y `/recursos` se linkean en el nav desde el día 1 o quedan ocultas hasta tener contenido
- [ ] Confirmar número de WhatsApp para footer y formulario
