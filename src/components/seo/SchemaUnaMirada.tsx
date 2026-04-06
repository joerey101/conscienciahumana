import { Helmet } from 'react-helmet-async'

export function SchemaUnaMirada() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Una Mirada Hacia el Interior",
        "description": "Un encuentro con vos mismo para identificar lo que ya no sirve y abrir espacio a lo nuevo.",
        "provider": {
          "@type": "Organization",
          "name": "Fundación Consciencia Humana",
          "url": "https://conscienciahumana.com"
        },
        "url": "https://conscienciahumana.com/programas/una-mirada-hacia-el-interior",
        "inLanguage": "es"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://conscienciahumana.com" },
          { "@type": "ListItem", "position": 2, "name": "Programas", "item": "https://conscienciahumana.com/programas" },
          { "@type": "ListItem", "position": 3, "name": "Una Mirada Hacia el Interior", "item": "https://conscienciahumana.com/programas/una-mirada-hacia-el-interior" }
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
