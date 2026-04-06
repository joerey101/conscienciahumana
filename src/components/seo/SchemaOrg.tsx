import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://conscienciahumana.com/#organization",
      "name": "Fundación Consciencia Humana",
      "url": "https://conscienciahumana.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://conscienciahumana.com/img/hero-sunrise.png"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contacto@conscienciahumana.com",
        "contactType": "customer service",
        "availableLanguage": "Spanish"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://conscienciahumana.com/#website",
      "url": "https://conscienciahumana.com",
      "name": "Consciencia Humana",
      "description": "Procesos de transformación para personas, equipos y organizaciones que buscan más claridad, dirección, hábitos conscientes y coherencia en su forma de vivir y liderar.",
      "publisher": {
        "@id": "https://conscienciahumana.com/#organization"
      },
      "inLanguage": "es"
    }
  ]
};

export function SchemaOrg() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
