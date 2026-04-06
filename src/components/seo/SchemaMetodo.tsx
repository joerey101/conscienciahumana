import { Helmet } from 'react-helmet-async';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://conscienciahumana.com/metodo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué es el método de Consciencia Humana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El método de Consciencia Humana es un proceso de autoevaluación, activación y sostenimiento que ayuda a personas, equipos y organizaciones a observar con honestidad su realidad actual, activar nuevas respuestas y construir una coherencia más estable en la vida, los vínculos y el trabajo."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué significa Reconocer en el método?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reconocer es el primer paso del método: ampliar la perspectiva, poner en crisis viejos paradigmas, nombrar limitaciones y tomar conciencia del estado actual. Implica observar registros internos, patrones repetidos, desgaste emocional, hábitos, ruido y dispersión, y lectura de resultados."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué significa Activar en el método?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Activar es el segundo movimiento del método: ordenar prioridades, nombrar una dirección y construir una respuesta más consciente y alineada. Trabaja foco, capacidad de decisión, hábitos conscientes, lenguaje, acción alineada y compromiso con el proceso."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué significa Sostener en el método?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sostener es construir una nueva coherencia: una forma más consciente de estar, decidir, comunicar y actuar. Incluye prácticas de recentrado, seguimiento, comunicación asertiva y capacidad de mantener la nueva coherencia en el tiempo sin rigidez."
          }
        },
        {
          "@type": "Question",
          "name": "¿Para quién es el método de Consciencia Humana?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El método es especialmente valioso para personas que necesitan claridad o reordenamiento, equipos con desgaste o baja cohesión, líderes que quieren revisar su forma de conducir, organizaciones que buscan integrar bienestar y resultados, y espacios comunitarios que requieren cuidado y escucha."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://conscienciahumana.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Método",
          "item": "https://conscienciahumana.com/metodo"
        }
      ]
    }
  ]
};

export function SchemaMetodo() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
