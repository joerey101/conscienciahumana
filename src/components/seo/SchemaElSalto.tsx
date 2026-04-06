import { Helmet } from 'react-helmet-async'

export function SchemaElSalto() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "El Salto de Tu Vida",
        "description": "Programa intensivo para transformar tu vida desde adentro. Método Reconocer-Activar-Sostener.",
        "provider": {
          "@type": "Organization",
          "name": "Fundación Consciencia Humana",
          "url": "https://conscienciahumana.com"
        },
        "url": "https://conscienciahumana.com/programas/el-salto-de-tu-vida",
        "inLanguage": "es"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://conscienciahumana.com" },
          { "@type": "ListItem", "position": 2, "name": "Programas", "item": "https://conscienciahumana.com/programas" },
          { "@type": "ListItem", "position": 3, "name": "El Salto de Tu Vida", "item": "https://conscienciahumana.com/programas/el-salto-de-tu-vida" }
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
