# Instrucciones para Antigravity — Fundación Consciencia Humana
## Construcción de páginas nuevas del sitio

**Stack:** React 19 + TypeScript | Bundler: Vite v8.0.x | Routing: `react-router-dom` | SEO: componente `PageSEO.tsx` ya existente en `/components/seo/` | Estilos: CSS modular con clases semánticas | Iconografía: `@phosphor-icons/react` y `lucide-react`

**Regla de datos:** Todos los textos hardcodeados deben vivir en `/data/site.ts`, no inline en los componentes.  
**Navegación interna:** Usar siempre `<Link>` de `react-router-dom`. Nunca `<a href>` para rutas internas.  
**Formularios:** Nunca usar `<form>` HTML nativo en React. Usar `onSubmit` en un `<div>` wrapper con lógica de estado.  
**Animaciones:** Usar el hook `useRevealAnimation` ya existente en `/hooks/` para animaciones de scroll.

---

## Arquitectura de rutas a implementar

Agregar las siguientes rutas a `react-router-dom` en `App.tsx` o en el archivo de routing correspondiente:

```
/metodo
/programas
/programas/el-salto-de-tu-vida
/programas/proceso-de-autoevaluacion-y-activacion-interior
/programas/una-mirada-hacia-el-interior
/organizaciones
/nosotros
/agenda
```

Los componentes de página van en `/components/sections/` o en una nueva carpeta `/pages/` según la convención del proyecto. Los bloques reutilizables entre páginas van en `/components/sections/`.

---

## Componente PageSEO

Antes de implementar cualquier página, verificar la firma del componente `PageSEO.tsx` existente en `/components/seo/`. Usarlo al inicio de cada página así:

```tsx
<PageSEO
  title="[Meta title exacto definido abajo]"
  description="[Meta description exacta definida abajo]"
/>
```

Los valores de `title` y `description` para cada página están especificados en la sección correspondiente de este documento, bajo el bloque **"Meta tags SEO"**.

---

---

# PÁGINA 1: `/metodo`

## Entrada desde el sitio
- Link **"Método"** en el Navbar principal
- Botón **"Ver el método completo"** en la sección del método del Home (`<Mision />` o equivalente)
- Botón **"Conocer el método"** en el Footer
- Botón **"Conocer el método"** al final de la página `/nosotros`

## Meta tags SEO

```
title: "Método | Reconocer, activar y sostener el cambio"
description: "Conocé el método de Consciencia Humana: un proceso de autoevaluación, activación y sostenimiento para transformar hábitos, dirección y forma de habitar la vida y el trabajo."
```

## Estructura de la página

### Hero

**H1:**
```
Método de autoevaluación, activación y sostenimiento
```

**Bajada:**
```
Un proceso para observar con honestidad la realidad actual, activar nuevas respuestas y construir una coherencia más estable en la vida, en los vínculos y en la forma de habitar el trabajo.
```

---

### Introducción

Párrafo 1:
```
En Consciencia Humana no entendemos la transformación como un momento aislado ni como una experiencia meramente emocional.
```

Párrafo 2:
```
La entendemos como un proceso.
Un proceso que empieza cuando una persona, un equipo o una organización acepta mirar con más verdad lo que hoy está viviendo, y se anima a revisar no solo lo que le pasa, sino también la forma en que responde a eso.
```

Párrafo 3:
```
La estructura que ordena nuestro trabajo se apoya en tres movimientos:
Reconocer, Activar y Sostener. Esta secuencia ya está presente en el desarrollo conceptual de El Salto de tu VIDA, donde se plantea el paso desde la incomodidad inconsciente a la acción consciente y luego a una nueva coherencia.
```

---

### Sección 1: Reconocer

**H2:** `Reconocer`

**Subtítulo (H3):** `Ver con más honestidad lo que hoy es`

**Texto:**
```
El primer paso no es cambiar rápido.
Es reconocer.

Reconocer la incomodidad.
Reconocer el desgaste.
Reconocer los hábitos que ya no sostienen.
Reconocer la distancia entre los resultados actuales y la vida que se quiere habitar.

Este momento implica ampliar la perspectiva, poner en crisis viejos paradigmas, nombrar limitaciones y tomar conciencia del estado actual. Así aparece en el desarrollo metodológico de El Salto de tu VIDA.
```

**Lista "Qué se trabaja":**
- registro interno
- patrones repetidos
- desgaste emocional
- hábitos
- ruido y dispersión
- lectura de resultados
- zonas de desconexión

---

### Sección 2: Activar

**H2:** `Activar`

**Subtítulo (H3):** `Responder distinto también es una práctica`

**Texto:**
```
Una vez que algo se ve, aparece la posibilidad de responder de otra manera.

Activar es dejar de quedar atrapado solo en el diagnóstico.
Es ordenar prioridades.
Es nombrar una dirección.
Es empezar a construir una respuesta más consciente, más alineada y más concreta.

En el material base, esta etapa se asocia con visualizar el yo buscado, reconocer la matriz de generación de resultados, redescubrir la capacidad de responder a las circunstancias y trabajar nuevos hábitos como portal de cambio.
```

**Lista "Qué se trabaja":**
- foco y dirección
- capacidad de decisión
- hábitos y disciplina consciente
- lenguaje y declaración
- acción alineada
- compromiso con el proceso

---

### Sección 3: Sostener

**H2:** `Sostener`

**Subtítulo (H3):** `La transformación se vuelve real cuando encuentra forma de permanecer`

**Texto:**
```
No alcanza con tener un momento de claridad.
Hace falta sostenerlo.

Sostener es construir una nueva coherencia: una forma más consciente de estar, decidir, comunicar y actuar.
Es también poder volver al centro cuando aparecen la dispersión, el cansancio o la desconexión.

En El Salto de tu VIDA, esta etapa se vincula con prácticas que ayudan a recuperar alineamiento, revisar la causa raíz de la limitación, fortalecer comunicación asertiva y sostener la nueva coherencia en el tiempo.
```

**Lista "Qué se trabaja":**
- coherencia cotidiana
- seguimiento
- prácticas de recentrado
- comunicación
- revisión de desvíos
- capacidad de sostener sin rigidez

---

### Sección: Cómo trabajamos

**H2:** `Cómo se vive este proceso`

**Texto:**
```
Nuestra forma de acompañar combina:
```

**Lista:**
- espacios conversatorios guiados
- escucha atenta y sin juicio
- ejercicios simples y aplicables
- reflexión individual y grupal
- herramientas para trasladar lo trabajado a la vida diaria

**Párrafo adicional:**
```
En Una Mirada hacia el Interior, esta lógica se expresó en encuentros en círculo, priorizando la palabra, la escucha mutua, el respeto y propuestas prácticas en un tono cercano y liviano, que permitió abordar temas profundos de manera cuidada.
```

---

### Sección: Para quién aplica

**H2:** `Para quién aplica este método`

**Texto:**
```
Este proceso puede tomar distintas formas según el contexto, pero suele ser especialmente valioso para:
```

**Lista:**
- personas que necesitan claridad, dirección o reordenamiento
- equipos con desgaste, baja cohesión o necesidad de conversación real
- líderes que quieren revisar su forma de estar y conducir
- organizaciones que buscan integrar bienestar, humanidad y resultados
- espacios comunitarios que requieren cuidado, escucha y metodología adaptable

---

### Sección: Qué puede habilitar

**H2:** `Qué puede habilitar`

**Texto:**
```
No prometemos fórmulas mágicas.
Sí creemos en procesos que pueden abrir:
```

**Lista:**
- mayor claridad
- mejor registro de uno mismo
- más coherencia entre intención y acción
- hábitos más alineados
- vínculos más honestos
- mejor capacidad de pedir ayuda, sostener dirección y cuidar el propio bienestar

**Párrafo adicional:**
```
En el informe de ejecución de Una Mirada hacia el Interior, entre los logros cualitativos observados se mencionan mayor habilitación de la palabra en torno a emociones, miedos y deseos; inicio de procesos de reflexión sobre historia, vínculos y patrones de conducta; y mayor registro de la necesidad de pedir ayuda y cuidar el bienestar emocional.
```

---

### Cierre / CTA

**H2:** `Mirar distinto puede cambiar lo que sigue`

**Texto:**
```
Todo proceso empieza cuando algo deja de poder seguir igual.
A veces ese es el mejor momento para comenzar.
```

**Botón primario (CTA):**
```
Quiero conversar sobre este proceso
→ <Link to="/agenda">
```

---

---

# PÁGINA 2: `/programas`

## Entrada desde el sitio
- Link **"Programas"** en el Navbar principal
- Botón **"Ver programas"** en el Hero del Home
- Botón **"Explorar programas"** en el bloque de cierre del Home
- Botón **"Consultar por programas"** en la página `/organizaciones`
- Columna "Programas" del Footer

## Meta tags SEO

```
title: "Programas | Transformación personal y grupal aplicada"
description: "Explorá los programas de Consciencia Humana para personas, grupos y organizaciones: procesos guiados de claridad, activación, hábitos, bienestar y coherencia."
```

## Estructura de la página

### Hero

**H1:**
```
Programas para mirar, activar y sostener un cambio real
```

**Bajada:**
```
En Consciencia Humana diseñamos programas y procesos para personas, equipos y organizaciones que necesitan claridad, dirección, nuevas herramientas y una forma más consciente de habitar la vida, los vínculos y el trabajo.
```

**Botones:**
```
Quiero conocer cuál aplica para mí → <Link to="/agenda">
Quiero llevarlo a mi organización → <Link to="/organizaciones">
```

---

### Introducción

Párrafo 1:
```
No todos los procesos empiezan del mismo modo.
Algunos empiezan con una incomodidad personal.
Otros, con una sensación de desgaste.
Otros, con la necesidad de revisar hábitos, vínculos, liderazgo o dirección.
```

Párrafo 2:
```
Por eso nuestra propuesta se organiza en programas que comparten un mismo fondo metodológico, pero que toman distintas formas según el punto de partida, el contexto y el tipo de transformación buscada.
```

---

### Sección 1: Programa marco

**H2:** `Proceso de Autoevaluación y Activación Interior`

**Bajada:**
```
Nombre marco sugerido para ordenar la propuesta general del sitio.
```

**Texto:**
```
Este nombre permite reunir de manera clara el corazón metodológico de Consciencia Humana: observar con más honestidad la realidad actual, activar una nueva respuesta y sostener una coherencia más estable en el tiempo.

Además, dialoga muy bien con el recorrido conceptual ya presente en tus materiales y con una de las alternativas de naming que compartiste como referencia.
```

**Subestructura visible:**
```
Reconocer · Activar · Sostener
```

**Texto "Para qué sirve dentro del sitio":**
```
No necesariamente tiene que funcionar como el nombre comercial de todos los programas.
Puede funcionar como el marco rector bajo el cual viven las distintas propuestas.
```

**CTA:**
```
Ver el método → <Link to="/metodo">
```

---

### Sección 2: Programas para personas

**H2:** `Procesos para personas`

**Intro:**
```
Espacios pensados para quienes sienten que algo necesita ser revisado, ordenado o activado en su forma de vivir, decidir, vincularse y sostener dirección.
```

#### Card — Programa 1

**Nombre:** `El Salto de tu VIDA`
→ `<Link to="/programas/el-salto-de-tu-vida">`

**Subtítulo:**
```
Un proceso de evolución personal para reconocer, activar y sostener una nueva coherencia.
```

**Descripción breve (para card):**
```
Experiencia de evolución personal organizada en tres etapas: Reconocimiento, Activación y Sustentabilidad. Trabaja sobre hábitos, claridad interna, activación de nuevas respuestas y construcción de coherencia.
```

**Etiqueta:** `Para personas`

**CTA:**
```
Quiero conocer este programa → <Link to="/programas/el-salto-de-tu-vida">
```

---

#### Card — Programa 2

**Nombre:** `Proceso de Autoevaluación y Activación Interior`
→ `<Link to="/programas/proceso-de-autoevaluacion-y-activacion-interior">`

**Subtítulo:**
```
Un recorrido guiado para mirar con honestidad el presente y empezar a ordenar una nueva dirección.
```

**Descripción breve (para card):**
```
Puerta de entrada a la metodología Consciencia Humana para quienes buscan claridad, cambio, hábitos, foco o acompañamiento. Nombre claro, sobrio y aplicable en ámbitos corporativos, institucionales y digitales.
```

**Etiqueta:** `Proceso guiado`

**CTA:**
```
Quiero empezar por acá → <Link to="/programas/proceso-de-autoevaluacion-y-activacion-interior">
```

---

### Sección 3: Programas grupales y comunitarios

**H2:** `Procesos grupales y comunitarios`

**Intro:**
```
Espacios diseñados para grupos, organizaciones sociales y contextos donde la transformación requiere escucha, cuidado y capacidad de adaptación a realidades complejas.
```

#### Card — Programa 3

**Nombre:** `Una Mirada hacia el Interior`
→ `<Link to="/programas/una-mirada-hacia-el-interior">`

**Subtítulo:**
```
Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad.
```

**Descripción breve (para card):**
```
Programa con evidencia concreta de ejecución. Seis encuentros grupales en modalidad taller-conversatorio, con escucha mutua, ejercicios prácticos y cuidado especial frente a situaciones de vulnerabilidad emocional.
```

**Etiqueta:** `Programa comunitario`

**CTA:**
```
Consultar por esta línea de trabajo → <Link to="/agenda">
```

---

### Sección 4: Programas para organizaciones

**H2:** `Programas para equipos y organizaciones`

**Intro:**
```
No todas las organizaciones necesitan lo mismo, pero muchas comparten un mismo fondo: desgaste, ruido, baja calidad conversacional, liderazgo tenso o necesidad de recuperar humanidad sin perder dirección.

Acá la propuesta no debería mostrarse como un solo "programa cerrado", sino como una línea de intervenciones bajo un mismo enfoque.
```

**Línea 1:**
- **Nombre:** `Activación de liderazgo y claridad`
- **Texto:** `Espacios para revisar la manera en que se lidera, se decide, se comunica y se sostiene un equipo, con foco en presencia, coherencia y dirección.`
- **Etiqueta:** `Liderazgo`

**Línea 2:**
- **Nombre:** `Bienestar, desgaste y hábitos organizacionales`
- **Texto:** `Procesos para trabajar sobre agotamiento, saturación, desconexión y hábitos colectivos que deterioran la energía y la calidad del trabajo.`
- **Etiqueta:** `Bienestar`

**Línea 3:**
- **Nombre:** `Vínculos, conversación y cohesión`
- **Texto:** `Experiencias grupales para abrir conversación donde hoy hay tensión, distancia o silencio, fortaleciendo escucha, confianza y calidad vincular.`
- **Etiqueta:** `Cohesión`

**Línea 4:**
- **Nombre:** `Procesos en contextos sociales y comunitarios`
- **Texto:** `Programas diseñados para organizaciones sociales, espacios de acompañamiento y contextos de vulnerabilidad que requieren profundidad con muchísimo cuidado y realismo operativo.`
- **Nota:** `Esta línea se apoya especialmente en la metodología y los aprendizajes ya documentados en Una Mirada hacia el Interior.`
- **Etiqueta:** `Cuidado`

**CTA general de sección:**
```
Quiero conversar sobre mi organización → <Link to="/agenda">
```

---

### Sección 5: ¿No sabés por dónde empezar?

**H2:** `¿No sabés por dónde empezar?`

**Texto:**
```
No hace falta llegar sabiendo exactamente qué programa necesitás.

A veces la mejor puerta de entrada no es una etiqueta, sino una conversación inicial para entender:
```

**Lista:**
- en qué momento estás
- si el proceso es personal, grupal u organizacional
- qué nivel de profundidad hace falta
- y cuál es el formato más adecuado para empezar

**Botones:**
```
Quiero orientación → <Link to="/agenda">
Agendar una conversación → <Link to="/agenda">
```

---

### Sección 6: Cierre

**H2:** `Cada proceso tiene su forma. El fondo es el mismo.`

**Texto:**
```
Mirar con más honestidad.
Activar una respuesta más consciente.
Sostener una coherencia posible.

Ese es el trabajo de fondo que organiza nuestros programas.
```

---

---

# PÁGINA 3: `/programas/el-salto-de-tu-vida`

## Entrada desde el sitio
- Card del programa en `/programas` (botón "Quiero conocer este programa")
- Link directo desde la columna "Programas" del Footer

## Meta tags SEO

```
title: "El Salto de tu VIDA | Programa de evolución personal"
description: "Un proceso de evolución personal para reconocer la incomodidad actual, activar nuevas respuestas y sostener una coherencia más consciente en la vida cotidiana."
```

## Estructura de la página

### Hero

**H1:**
```
El Salto de tu VIDA
```

**Subtítulo (H2):**
```
Un proceso de evolución personal para reconocer, activar y sostener una nueva coherencia.
```

---

### Texto largo

```
El Salto de tu VIDA aparece en tus materiales como una experiencia de evolución personal organizada en tres etapas complementarias: Reconocimiento, Activación y Sustentabilidad. Parte de una idea muy potente: muchas veces el problema no es solo lo que queremos lograr, sino la forma en que estamos habitando el presente, nuestros hábitos, nuestros vínculos y nuestros resultados.

La propuesta trabaja sobre la incomodidad actual, la ampliación de perspectiva, la identificación de viejos paradigmas, la visualización del estado buscado, la activación de nuevos hábitos y la construcción de una nueva coherencia. También promete claridad para decidir, sistema de acción, hoja de ruta para cuando aparece el desvío y una red de pares que sostiene el compromiso.
```

---

### Para quién es

**H2:** `Para quién es`

```
Para personas que:
```

**Lista:**
- sienten agotamiento o desconexión
- quieren revisar hábitos y dirección
- necesitan claridad interna
- sienten que sus resultados no expresan del todo quiénes son ni cómo quieren vivir

---

### Qué trabaja

**H2:** `Qué trabaja`

**Lista:**
- claridad interna
- observación de hábitos y patrones
- revisión de resultados
- activación de nuevas respuestas
- disciplina consciente
- alineamiento y sostén

---

### Estructura del programa

**H2:** `Estructura`

**Etiqueta:** `Programa guiado en etapas`

**Pasos visibles:**
```
1. Reconocer
2. Activar
3. Sostener
```

---

### Resultado esperado

**H2:** `Resultado esperado`

```
Más claridad para decidir, menos dispersión, mayor coherencia entre intención y acción, y herramientas para volver al centro cuando el proceso se desordena.
```

---

### CTA

**Botón primario:**
```
Quiero conocer este programa → <Link to="/agenda">
```

**Botón secundario:**
```
Ver todos los programas → <Link to="/programas">
```

---

---

# PÁGINA 4: `/programas/proceso-de-autoevaluacion-y-activacion-interior`

## Entrada desde el sitio
- Card del programa en `/programas` (botón "Quiero empezar por acá")
- Link directo desde la columna "Programas" del Footer

## Meta tags SEO

```
title: "Autoevaluación y Activación Interior | Programa guiado"
description: "Un recorrido guiado para observar con honestidad el presente, ordenar prioridades, activar hábitos y construir una nueva dirección personal con más coherencia."
```

## Estructura de la página

### Hero

**H1:**
```
Proceso de Autoevaluación y Activación Interior
```

**Subtítulo (H2):**
```
Un recorrido guiado para mirar con honestidad el presente y empezar a ordenar una nueva dirección.
```

---

### Texto largo

```
Este programa puede funcionar como una versión más institucional y más clara de entrada para personas que todavía no conectan con nombres más identitarios. Su valor está en la legibilidad: nombra exactamente lo que propone.

Puede presentarse como una puerta de entrada a la metodología Consciencia Humana, especialmente para quienes llegan a la web buscando claridad, cambio, hábitos, foco o acompañamiento sin tener todavía una referencia previa del universo de la marca.
```

---

### Para quién es

**H2:** `Para quién es`

```
Para personas que están en un momento de revisión personal y necesitan una primera estructura para:
```

**Lista:**
- observar lo que hoy les pasa
- nombrar lo que ya no funciona
- empezar a activar decisiones, hábitos y dirección

---

### Qué trabaja

**H2:** `Qué trabaja`

**Lista:**
- autoobservación
- claridad
- activación interior
- hábitos
- seguimiento
- coherencia

---

### Valor diferencial

**H2:** `Valor diferencial`

```
Es un nombre más claro, más sobrio y más fácil de explicar en ámbitos corporativos, institucionales o digitales.
```

---

### CTA

**Botón primario:**
```
Quiero empezar por acá → <Link to="/agenda">
```

**Botón secundario:**
```
Ver todos los programas → <Link to="/programas">
```

---

---

# PÁGINA 5: `/programas/una-mirada-hacia-el-interior`

## Entrada desde el sitio
- Card del programa en `/programas` (botón "Consultar por esta línea de trabajo")
- Link directo desde la columna "Programas" del Footer

## Meta tags SEO

```
title: "Una Mirada hacia el Interior | Programa grupal y comunitario"
description: "Programa de desarrollo emocional, conversación y bienestar integral para grupos, organizaciones sociales y contextos que requieren cuidado, escucha y metodología adaptable."
```

## Estructura de la página

### Hero

**H1:**
```
Una Mirada hacia el Interior
```

**Subtítulo (H2):**
```
Un programa de desarrollo emocional, conversación y apertura de posibilidades de cambio en contextos de vulnerabilidad.
```

---

### Texto largo

```
Este programa ya cuenta con evidencia concreta de ejecución. En el informe final presentado por Fundación Consciencia Humana se describe como una propuesta orientada a empoderar procesos de recuperación en población vulnerable del CIS "Hogar de Cristo", incluyendo personas con consumo problemático, a través del desarrollo emocional. El foco estuvo puesto en brindar herramientas internas para una mayor comprensión de sí, una gestión emocional más saludable y una apertura de posibilidades de cambio en la vida cotidiana.

La metodología incluyó seis encuentros grupales en modalidad taller-conversatorio, con encuentros en círculo, escucha mutua, respeto, espacios guiados, ejercicios prácticos de reflexión, dinámicas breves y propuestas corporales simples. El informe destaca además un tono cercano y liviano que permitió abordar temas profundos de forma cuidada.
```

---

### Para quién es

**H2:** `Para quién es`

**Lista:**
- organizaciones sociales
- espacios comunitarios
- dispositivos de acompañamiento
- grupos que requieren trabajo emocional con cuidado y contención

---

### Qué trabaja

**H2:** `Qué trabaja`

**Lista:**
- autoconocimiento emocional
- aceptación y autoaceptación
- perdón
- gestión emocional saludable
- resiliencia
- bienestar integral
- mirada de futuro

---

### Qué muestra como capacidad

**H2:** `Qué muestra como capacidad`

```
El informe también deja ver algo muy valioso para la web: la capacidad de adaptar el diseño metodológico a dinámicas fluctuantes, sostener encuentros autónomos, articular con referentes institucionales y generar espacios seguros, cercanos y profundos.
```

---

### Resultado observado

**H2:** `Resultado observado`

```
Buena recepción, participación activa, habilitación de la palabra en torno a emociones, miedos y deseos, y apertura de procesos de reflexión sobre historia, vínculos y patrones de conducta.
```

---

### CTA

**Botón primario:**
```
Consultar por esta línea de trabajo → <Link to="/agenda">
```

**Botón secundario:**
```
Ver todos los programas → <Link to="/programas">
```

---

---

# PÁGINA 6: `/organizaciones`

## Entrada desde el sitio
- Link **"Organizaciones"** en el Navbar principal
- Botón **"Llevarlo a mi organización"** en el Hero del Home y en el Hero de `/programas`
- Botón **"Quiero una reunión inicial"** en el bloque de Cierre de esta misma página (enlace circular de referencia, no loop)

## Meta tags SEO

```
title: "Organizaciones | Liderazgo, bienestar y cohesión de equipos"
description: "Programas para equipos y organizaciones que buscan trabajar liderazgo, bienestar, vínculos, cultura, comunicación y transformación humana aplicada."
```

## Estructura de la página

### Hero

**H1:**
```
Procesos para equipos y organizaciones que necesitan más claridad, cohesión y humanidad
```

**Bajada:**
```
Diseñamos experiencias y programas para organizaciones que quieren trabajar liderazgo, bienestar, comunicación, cultura y transformación humana aplicada, sin caer en soluciones superficiales ni en discursos vacíos.
```

**Botón:**
```
Agendar una conversación inicial → <Link to="/agenda">
```

---

### Introducción

Párrafo 1:
```
Toda organización expresa algo más que sus objetivos.
Expresa también su nivel de coherencia, su forma de vincularse, la calidad de sus conversaciones, su manera de sostener presión, conflicto, desgaste y cambio.
```

Párrafo 2:
```
Por eso, cuando una organización necesita transformarse, no alcanza con tocar procesos o estructuras.
Muchas veces hace falta revisar también el plano humano desde el que esos procesos y estructuras son habitados.
```

Párrafo 3:
```
Ahí es donde intervenimos.
```

---

### Situaciones en las que podemos aportar

**H2:** `Situaciones en las que podemos aportar`

**Texto:**
```
Acompañamos organizaciones que atraviesan, entre otras, situaciones como:
```

**Lista:**
- desgaste sostenido o burnout
- liderazgo desconectado o sin centro
- vínculos tensos o conversaciones difíciles
- falta de cohesión
- culturas sobrecargadas de urgencia y poca reflexión
- necesidad de recuperar sentido, presencia y forma de trabajo

---

### Qué podemos trabajar

**H2:** `Qué podemos trabajar con una organización`

**Bloque 1:**
- **Nombre:** `Liderazgo y claridad`
- **Texto:** `Espacios para revisar la manera de conducir, decidir, comunicar y sostener equipos desde una mayor presencia y coherencia.`

**Bloque 2:**
- **Nombre:** `Bienestar y desgaste`
- **Texto:** `Procesos para abordar agotamiento, sobrecarga, desregulación y hábitos organizacionales que dañan la energía del equipo.`

**Bloque 3:**
- **Nombre:** `Vínculos y comunicación`
- **Texto:** `Experiencias para abrir conversación, fortalecer escucha, mejorar la calidad vincular y habilitar intercambios más honestos y productivos.`

**Bloque 4:**
- **Nombre:** `Cultura y coherencia`
- **Texto:** `Intervenciones para alinear narrativa, prácticas y formas reales de habitar la organización.`

**Bloque 5:**
- **Nombre:** `Procesos en contextos sociales y comunitarios`
- **Texto:** `Acompañamiento a organizaciones sociales, espacios comunitarios y dispositivos que requieren sensibilidad, cuidado y realismo operativo.`

---

### Una metodología sensible y aplicable

**H2:** `Una metodología sensible y aplicable`

**Texto:**
```
Nuestro trabajo con organizaciones se basa en procesos conversatorios, facilitación guiada, ejercicios prácticos y espacios que habilitan profundidad sin perder estructura.

La experiencia documentada en Una Mirada hacia el Interior muestra una metodología capaz de sostener escucha mutua, respeto, participación activa, adaptación a dinámicas cambiantes y cuidado especial frente a situaciones de mayor vulnerabilidad emocional. También muestra articulación con referentes institucionales para ajustar el trabajo según el clima, la participación y el impacto cualitativo de cada encuentro.

Eso no define solo un programa puntual.
Define una forma de trabajar.
```

---

### Enfoque diferencial

**H2:** `No trabajamos solo para que un equipo "se sienta mejor"`

**Texto:**
```
Trabajamos para que una organización pueda:
```

**Lista:**
- verse con más honestidad
- mejorar la calidad de sus conversaciones
- ordenar lo humano que hoy está operando en silencio
- y construir una forma más coherente de liderar y vincularse

**Párrafo adicional:**
```
No ofrecemos entretenimiento corporativo.
Ofrecemos procesos cuidados, serios y aplicables.
```

---

### Formatos de trabajo

**H2:** `Formatos de trabajo`

**Texto:**
```
La propuesta puede tomar distintas formas según necesidad y contexto:
```

**Lista:**
- talleres
- ciclos de encuentros
- procesos de activación
- espacios de liderazgo
- acompañamiento de equipos
- experiencias para organizaciones sociales o comunitarias

**Párrafo adicional:**
```
Cada formato se diseña en función del punto de partida, la madurez del grupo y el tipo de transformación buscada.
```

---

### CTA

**H2:** `Cada organización necesita su propia puerta de entrada`

**Texto:**
```
Podemos conversar sobre el momento actual de tu equipo u organización y pensar juntos cuál es el formato más adecuado.
```

**Botones:**
```
Quiero una reunión inicial → <Link to="/agenda">
Consultar por programas → <Link to="/programas">
```

---

---

# PÁGINA 7: `/nosotros`

## Entrada desde el sitio
- Link **"Nosotros"** en el Navbar principal
- Botón **"Conocer quiénes somos"** en el bloque de equipo/facilitación del Home
- Columna de navegación del Footer

## Meta tags SEO

```
title: "Nosotros | Quiénes somos en Consciencia Humana"
description: "Conocé la visión, el criterio y la forma de acompañar de Consciencia Humana: profundidad con cuidado, humanidad con estructura y procesos con sentido."
```

## Estructura de la página

### Hero

**H1:**
```
Un espacio para mirar con más verdad y acompañar con más conciencia
```

**Bajada:**
```
Consciencia Humana nace del deseo de crear procesos donde la transformación no sea una consigna vacía, sino una experiencia real de observación, activación y coherencia aplicada a la vida.
```

---

### Lo que creemos

**H2:** `Lo que creemos`

**Texto:**
```
Creemos que muchas personas y organizaciones viven sosteniendo formas que ya no expresan lo que son, lo que necesitan o lo que están llamadas a construir.

Creemos también que transformar no es escapar de la realidad.
Es habitarla con más verdad.

Por eso generamos espacios para:
```

**Lista:**
- reconocer lo que hoy pasa
- abrir conversación donde hay ruido o silencio
- revisar hábitos, dirección y vínculos
- y activar formas más conscientes de estar, decidir y actuar

---

### Nuestra forma de acompañar

**H2:** `Nuestra forma de acompañar`

**Texto:**
```
Trabajamos desde una facilitación cercana, respetuosa y profunda.

No buscamos imponer respuestas ni generar impacto vacío.
Buscamos crear condiciones para que aparezca una mirada más honesta, una palabra más verdadera y una posibilidad real de movimiento.

La experiencia de Una Mirada hacia el Interior describe un estilo de facilitación basado en cercanía, confianza, respeto, habilitación de conversación franca, ejercicios simples y una experiencia vivida como segura, liviana pero profunda. Ese tono es una referencia central para la identidad del sitio.
```

---

### Profundidad con cuidado

**H2:** `Profundidad con cuidado. Humanidad con estructura.`

**Texto:**
```
Nos importa tanto la profundidad del proceso como el modo en que ese proceso se sostiene.

Por eso cuidamos:
```

**Lista:**
- el lenguaje
- la intensidad
- el contexto
- el momento del grupo o de la persona
- y la posibilidad real de llevar lo trabajado a la vida concreta

**Párrafo adicional:**
```
No creemos en transformaciones declamadas.
Creemos en procesos honestos, sensibles y aplicables.
```

---

### Quiénes acompañan

**H2:** `Quiénes acompañan`

**Texto base:**
```
Consciencia Humana está impulsada por facilitadores comprometidos con el desarrollo humano, la escucha, la autoobservación, la activación y la construcción de procesos con sentido.
```

> **Nota para el desarrollador:** Esta sección está pensada para incorporar cards o fotos de facilitadores cuando el equipo provea el contenido. Por ahora, renderizar solo el texto base.

---

### Cierre

**H2:** `No acompañamos desde afuera. Acompañamos desde presencia.`

**Texto:**
```
Cada proceso necesita escucha, criterio y una forma de estar.
Eso también es parte de lo que ofrecemos.
```

**Botón:**
```
Conocer el método → <Link to="/metodo">
```

---

---

# PÁGINA 8: `/agenda`

## Entrada desde el sitio
- Link **"Agenda"** en el Navbar principal
- Botón **"Agendar conversación"** en el header (botón principal del Navbar)
- Botón **"Agendar una conversación"** en el bloque de cierre del Home
- Botón **"Reservar una conversación"** en el Footer
- Botones CTA de `/metodo`, `/programas`, `/organizaciones` y `/nosotros`

## Meta tags SEO

```
title: "Agenda | Agendá una conversación con Consciencia Humana"
description: "Reservá una conversación inicial para explorar programas personales, propuestas para organizaciones o posibles alianzas con Consciencia Humana."
```

## Integración Formspree

**Endpoint:** `https://formspree.io/f/mlgoppeo`

El formulario envía los datos vía `fetch` POST a ese endpoint con `Content-Type: application/json`. Manejar estados: idle → loading → success → error. No usar `<form action>`. Usar estado React con `useState`.

---

## Estructura de la página

### Hero

**H1:**
```
Abramos una primera conversación
```

**Bajada:**
```
Si sentís que este enfoque puede ayudarte a vos, a tu equipo o a tu organización, este puede ser un buen punto de partida.

No hace falta llegar con todo resuelto.
Alcanza con poder nombrar qué te está pasando hoy y qué te gustaría empezar a ordenar.
```

---

### Opciones de ingreso

**H2:** `¿Sobre qué querés conversar?`

**Opción 1:**
- **Título:** `Soy una persona`
- **Texto:** `Quiero conocer procesos, programas o espacios para revisar mi momento actual, mis hábitos, mi claridad o mi dirección.`

**Opción 2:**
- **Título:** `Represento a una organización`
- **Texto:** `Quiero conversar sobre liderazgo, bienestar, vínculos, cultura o una propuesta para mi equipo.`

**Opción 3:**
- **Título:** `Quiero explorar una alianza`
- **Texto:** `Quiero conversar sobre colaboración, articulación institucional, impacto social o una iniciativa conjunta.`

> **Nota para el desarrollador:** Estas tres opciones pueden funcionar como selector visual (tabs o cards clicables) que preseleccionen el valor correspondiente en el campo `¿Sobre qué querés conversar?` del formulario.

---

### Formulario

**H2:** `Contanos un poco para orientar mejor la conversación`

**Campos:**

| Campo | Tipo | Placeholder / Opciones |
|---|---|---|
| Nombre y apellido | `text` | `Escribí tu nombre completo` |
| Correo electrónico | `email` | `nombre@correo.com` |
| Teléfono | `tel` | `+54 9 ...` |
| Ciudad / País | `text` | `Ciudad / País` |
| ¿Sobre qué querés conversar? | `select` | Quiero conocer un programa personal / Quiero una propuesta para mi organización / Quiero explorar una alianza / Todavía no lo tengo claro |
| ¿Qué te gustaría trabajar hoy? | `textarea` | `Contanos brevemente qué te está pasando o qué te gustaría empezar a ordenar` |
| ¿Cómo preferís que te contactemos? | `radio` | Mail / WhatsApp / Llamada |

**Texto de confianza debajo del formulario (antes del botón):**
```
Tu mensaje no entra en un circuito automático sin contexto.
Lo leemos con atención para orientarte mejor.
```

**Botón de envío:**
```
Enviar consulta
```

---

### Lógica de envío (Formspree)

```typescript
const handleSubmit = async () => {
  setStatus('loading');
  try {
    const res = await fetch('https://formspree.io/f/mlgoppeo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};
```

---

### Mensaje de confirmación post envío (estado `success`)

**H2:** `Gracias por escribirnos`

**Texto:**
```
Recibimos tu mensaje.
Vamos a leerlo con atención y responder a la brevedad para orientarte mejor sobre el próximo paso.
```

---

### Mensaje de error post envío (estado `error`)

**Título:** `No pudimos enviar el formulario`

**Texto:**
```
Probá nuevamente en unos minutos o escribinos por correo.
```

---

### Sección: alternativa agenda

**H2:** `Si preferís, también podés reservar un espacio`

**Texto:**
```
Podés agendar una conversación inicial para contarnos tu situación y explorar si este enfoque aplica para vos o para tu organización.
```

**Botón:**
```
Reservar una conversación
```

> **Nota para el desarrollador:** Este botón puede abrir un widget de Calendly embebido o un link externo si el equipo lo provee. Por ahora, dejarlo como botón visible que apunta a `mailto:contacto@conscienciahumana.com` como fallback.

---

### Mensaje de confianza

**H2:** `Cada proceso empieza con una conversación bien orientada`

**Texto:**
```
El objetivo de este primer intercambio no es apurarte a decidir nada.
Es escuchar, entender el contexto y ver si hay un camino posible para trabajar juntos.
```

---

---

# Notas de implementación transversales

## Navbar

El Navbar ya existente (`/components/layout/Navbar.tsx`) debe actualizarse para incluir los nuevos links. Según el documento, los ítems del menú son:

```
Inicio · Método · Programas · Organizaciones · Impacto · Recursos · Nosotros · Agenda
```

El botón principal del header es:
```
Agendar conversación → <Link to="/agenda">
```

Las páginas `/impacto` y `/recursos` **no están en el alcance de este sprint** pero deben existir como rutas en `react-router-dom` con un componente placeholder que muestre el microcopy de estado vacío:

```
Estamos preparando este contenido.
Mientras tanto, podés escribirnos o agendar una conversación.
```

## Footer

El Footer ya existente (`/components/layout/Footer.tsx`) debe actualizarse con la siguiente estructura:

**Columna 1 — Marca:**
```
Consciencia Humana
Procesos de transformación para personas, equipos y organizaciones que buscan más claridad, coherencia y presencia en la forma de vivir, liderar y vincularse.
```

**Columna 2 — Navegación:**
- Inicio → `<Link to="/">`
- Método → `<Link to="/metodo">`
- Programas → `<Link to="/programas">`
- Organizaciones → `<Link to="/organizaciones">`
- Impacto → `<Link to="/impacto">`
- Recursos → `<Link to="/recursos">`
- Nosotros → `<Link to="/nosotros">`
- Agenda → `<Link to="/agenda">`

**Columna 3 — Programas:**
- El Salto de tu VIDA → `<Link to="/programas/el-salto-de-tu-vida">`
- Proceso de Autoevaluación y Activación Interior → `<Link to="/programas/proceso-de-autoevaluacion-y-activacion-interior">`
- Una Mirada hacia el Interior → `<Link to="/programas/una-mirada-hacia-el-interior">`
- Programas para Organizaciones → `<Link to="/organizaciones">`

**Columna 4 — Contacto:**
```
Abramos una conversación
Si querés conocer un programa, explorar una propuesta para tu organización o hacer una consulta, escribinos.
```
- `contacto@conscienciahumana.com`
- Botón: `Agendar una conversación → <Link to="/agenda">`

**Franja inferior:**
```
Consciencia Humana © 2026. Todos los derechos reservados.
Política de privacidad
Términos de uso
```

**Disclaimer legal (pie o formularios):**
```
La información compartida en este sitio tiene fines orientativos y de presentación de programas. No reemplaza acompañamiento clínico, médico ni terapéutico especializado cuando este sea necesario.
```

**Texto de privacidad breve (formularios):**
```
Tus datos serán utilizados únicamente para responder tu consulta y orientarte sobre propuestas de Consciencia Humana.
```

## SEO técnico por página

Cada página debe montar el componente `PageSEO.tsx` con los valores exactos definidos en este documento. Adicionalmente, el desarrollador debe implementar:

- `sitemap.xml` con todas las URLs listadas
- `robots.txt`
- Open Graph y Twitter Cards (title + description + image por página)
- Schema markup: `Organization` y `WebSite` en el Home; `FAQPage` cuando se implementen las FAQs; `BreadcrumbList` en páginas de programa
- Canonical por URL
- Compresión de imágenes y carga rápida en mobile

## Estructura de encabezados (todas las páginas)

- **1 solo H1** por página (el título del Hero)
- **3 a 6 H2** por página
- **H3** solo para subtítulos dentro de secciones con H2

## Datos en `/data/site.ts`

Todos los textos de estas páginas deben estar mapeados en `site.ts`. No hardcodear strings directamente en los componentes. Estructura sugerida:

```typescript
export const metodoPage = { hero: { title: '...', bajada: '...' }, secciones: [...] }
export const programasPage = { ... }
export const organizacionesPage = { ... }
export const nosotrosPage = { ... }
export const agendaPage = { ... }
```

---

*Este documento contiene el 100% del contenido aprobado para la construcción de las páginas nuevas de conscienciahumana.com. Cualquier texto no presente aquí y no verificado con el equipo de FCH no debe ser inventado ni inferido por el IDE.*