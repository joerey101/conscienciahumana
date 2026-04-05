# Registro de Cambios (Changelog) - Fundación Consciencia Humana (FCH)

Este documento registra cronológicamente todas las mejoras, correcciones y nuevas funcionalidades implementadas en el sitio web de la Fundación Consciencia Humana.

---

## [Sesión Mobile & UI] - 2026-04-04

### Corrección crítica — Navbar rota en mobile
**Problema:** En las páginas `/programas` y `/organizaciones`, el botón "Agendar" y el ícono hamburguesa desaparecían en mobile. Solo se veía el logo.

**Causa raíz:** La sección "Formatos" de Organizaciones tenía pills (etiquetas) sin `flex-wrap`. Al renderizarse en una sola fila horizontal, desbordaban 299px hacia la izquierda, rompiendo el `position: fixed` de la navbar en navegadores mobile.

**Fix — `src/styles/globals.css`:**
```css
.flex-wrap   { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
```
Agregadas en la PREMIUM UTILITY LAYER, junto a `.flex-col` y `.flex-row`.

---

### Rediseño — Sección "Marco Rector" en `/programas`
**Archivo:** `src/pages/Programas.tsx`

- Eliminado el contenedor tipo card blanco con borde
- Pills de subestructura con `flex: 1` cada una → distribución igual en toda la línea
- Botón rosa centrado debajo, ancho 70%, estilo bloque (`display: block`)
- Sin contenedor wrapper, diseño limpio sin bordes

---

### Eliminación global de íconos ArrowRight en botones
**Archivos modificados:**
| Archivo | Botones afectados |
|---|---|
| `src/pages/Agenda.tsx` | Submit formulario + CTA Calendly |
| `src/pages/Organizaciones.tsx` | CTA hero |
| `src/pages/programas/ElSalto.tsx` | 2 botones (Agenda + Programas) |
| `src/pages/programas/AutoevaluacionActivacion.tsx` | 2 botones |
| `src/pages/programas/UnaMirada.tsx` | 2 botones |
| `src/pages/Programas.tsx` | Import eliminado |

Criterio: ArrowRight en botones es redundante con la acción del CTA. Se mantienen textos tipo "Leer reflexión →" en links de texto (Bitácora).

---

### Cards "Para Organizaciones" en `/programas` — Mejoras mobile
**Archivo:** `src/pages/Programas.tsx`

**Cambios en los 4 cards de la sección "Programas para equipos y organizaciones":**

1. **Íconos ocultos en mobile, visibles en desktop**
   - De `flex` a `hidden md:flex` en el div del ícono
   - Sin ícono visible en pantallas < 768px

2. **Tag uppercase movido sobre el título negro**
   - Antes: `LIDERAZGO` aparecía debajo de la descripción
   - Ahora: aparece como primer elemento dentro del card, antes del `<h4>`
   - Agregado `inline-block mb-3` para correcto espaciado

3. **Margen izquierdo en mobile**
   - `pl-1 md:pl-0` en el div de contenido
   - Compensa visualmente la ausencia del ícono en mobile

---

## [Sesión Actual] - 2026-03-02
### Planificado
- **Punto de Partida:** Creación de este CHANGELOG para seguimiento de hitos.
- **Preparativos:** Revisión de la estructura actual en `WebFCHV1.2.html`.

## [1.2.0] - 2026-03-01
### Agregado
- **Widget de Diagnóstico de Madurez Digital:** Herramienta interactiva con puntaje, niveles y áreas de debilidad. Integración con Formspree.
- **Secciones de Contenido:** Incorporación de "Manifiesto", "Ejes de Intervención", "Journal", "Sectores de Impacto" y "Manuales y Guías".
- **Identidad de Marca Unificada:** Paleta de colores basada en el logo (Cian, Magenta, Lima, Amarillo) y texto en azul profundo.
- **Estética Cálida:** Fondo en marfil/crema suave y widgets en carbón cálido.

### Cambiado
- **Rediseño Integral:** Enfoque en "Minimalismo Humano de Alto Impacto" con inspiración argentina/latinoamericana.
- **Navegación:** Estandarización de rutas de archivos (index.html, whitepapers.html) y corrección de enlaces rotos.
- **Actualización de Secciones:** "Nuestra Mirada", "Marco Metodológico" y "Casos de Éxito" actualizados con información dinámica.

### Solucionado
- **Portal Login:** Mejora del manejo de errores cuando el servicio PocketBase no está disponible.
- **Compatibilidad Local:** Configuración de entorno localhost para previsualización precisa.

## [1.1.0] - Enero 2026
### Agregado
- **Módulos de Gestión (MAD-Gestión):** Planeamiento Estratégico, Objetivos SMART y Matriz de Impacto vs. Factibilidad.
- **Arquitectura de Datos:** Definición de objetos de iniciativa y métricas de desempeño.

---
*Última actualización: 2026-03-02*
