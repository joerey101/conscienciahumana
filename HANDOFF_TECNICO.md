# Documento de Traspaso Técnico (Handoff) - Fundación Consciencia Humana

**Fecha de Actualización**: Abril de 2026
**Propósito**: Este documento está dirigido al ingeniero/equipo de sistemas entrante para proveer un estado detallado, arquitectónico y estructural de la aplicación frontend desarrollada hasta la fecha.

---

## 1. Stack Tecnológico Actual
El proyecto base (inicialmente HTML/JS tradicional) ha sido evolucionado a un entorno de desarrollo moderno y escalable:
- **Framework Core**: React 19.x
- **Lenguaje**: TypeScript
- **Bundler / Server**: Vite v8.0.x
- **Estilos**: CSS modular y utilitario (Custom clases semánticas).
- **Iconografía**: `@phosphor-icons/react` y `lucide-react`.

## 2. Decisiones de Arquitectura Frontend
Actualmente, el sitio está orquestado como una **Landing Page (Single Page Application)** sólida. La regla de oro actual validada con Negocio es **NO fragmentar el Home principal**.

### A. Estructura de Directorios Clave (`src/`)
* `/components/layout/`: Contiene el `Navbar.tsx` (con lógica de scroll fluido y menú mobile) y el `Footer.tsx`.
* `/components/sections/`: Todos los bloques modulares que construyen la vista.
* `/data/`: Archivo `site.ts`. Aquí se aislaron todos los mapeos de datos puros (textos, links del nav, estadísticas, verticales). **Cualquier cambio de texto debe hacerse aquí y no inyectarse en los componentes**.
* `/hooks/`: Custom hooks críticos como `useRevealAnimation` (maneja las animaciones de aparición al hacer scroll usando Intersection Observer).

### B. Módulo de Flujo Principal (`App.tsx`)
Todo está renderizado de manera lineal en `App.tsx`:
1. `<Hero />`
2. `<Conversacion />` (Nuestra Mirada)
3. `<Mision />`
4. `<Bitacora />`
5. `<Transformacion />`
6. `<Protagonista />`
7. `<DondeActuamos />`
8. `<Verticales />`
9. `<Impacto />`
10. `<Alianzas />`
11. `<Sumate />`

## 3. Estado de Calidad y Warnings (Historial)
- **Responsividad:** Todos los componentes se maquertaron con un enfoque "Mobile-First" estricto. La cuadrícula de Alianzas y la sección de Íconos de la Tríada ya están optimizadas para apilarse correctamente en móbiles sin desbordes.
- **Herramientas de Debug:** Durante el desarrollo usamos un panel llamado `VisualProgress`. **Se decidió removerlo por completo** del pipeline principal (`App.tsx`) por seguridad hacia producción. El código sigue en el repo interno pero oculto en el main.

## 4. Hoja de Ruta Pendiente (SEO & Expansión)
Recientemente se aprobó un documento de **Estrategia SEO Organizacional (FCH Docmento final WEB.docx)** que proyecta una plataforma corporativa inmensa.
* **Status**: Lo analizamos, pero se frenó su implementación porque implicaba partir en pedazos el Landing principal en múltiples URLs (`/metodo`, `/programas`, etc.).
* **Nota para el Ingeniero**: Si en el futuro retoman las métricas orgánicas (Sitemaps, Open Graph, Tags dinámicas), la recomendación documentada es acoplar `react-router-dom` y `react-helmet-async`. El análisis indica que los componentes actuales de `/sections/` sirven perfecto como bloques legos para armar las nuevas páginas sin rearmar diseño.

---
**Despliegue Actual**: Actualmente sincronizado con rama `main` en Github (`joerey101/conscienciahumana`) con CD automático presumiblemente hacia Vercel u host estático similar.
