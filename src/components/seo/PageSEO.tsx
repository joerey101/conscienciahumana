import { Helmet } from 'react-helmet-async';

const DEFAULT_OG_IMAGE = 'https://conscienciahumana.com/img/hero-sunrise.png';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

export function PageSEO({ title, description, canonicalUrl, ogImage }: PageSEOProps) {
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
