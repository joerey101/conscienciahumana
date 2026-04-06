import { Helmet } from 'react-helmet-async'

export function SchemaAutoevaluacion() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Proceso de Autoevaluación y Activación Interior",
        "description": "Un proceso de acompañamiento individual para observar la realidad actual, activar nuevas respuestas y construir coherencia.",
        "provider": {
          "@type": "Organization",
          "name": "Fundación Consciencia Humana",
          "url": "https://conscienciahumana.com"
        },
        "url": "https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior",
        "inLanguage": "es"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://conscienciahumana.com" },
          { "@type": "ListItem", "position": 2, "name": "Programas", "item": "https://conscienciahumana.com/programas" },
          { "@type": "ListItem", "position": 3, "name": "Proceso de Autoevaluación y Activación Interior", "item": "https://conscienciahumana.com/programas/proceso-de-autoevaluacion-y-activacion-interior" }
        ]
      }
    ]
  }
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
