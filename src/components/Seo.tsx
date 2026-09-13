import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SeoProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

const BASE_URL = 'https://nyksys.fr';
const DEFAULT_IMAGE = `${BASE_URL}/hero-home.webp`;

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  url = '',
  image = DEFAULT_IMAGE,
  type = 'website'
}) => {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Nyksys — Architecture d'Intérieur" />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:url" content={fullUrl} />
    </Helmet>
  );
};
