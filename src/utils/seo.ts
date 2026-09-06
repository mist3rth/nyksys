export interface SeoConfig {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

const BASE_URL = 'https://nyksys.fr';
const DEFAULT_IMAGE = `${BASE_URL}/hero-home.webp`;

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function updatePageSeo({ title, description, url = '', image = DEFAULT_IMAGE, type = 'website' }: SeoConfig) {
  if (typeof document === 'undefined') return;

  // Title
  document.title = title;

  // Primary Description
  setMetaTag('name', 'description', description);

  // Absolute URLs
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  // Canonical
  setCanonical(fullUrl);

  // Open Graph
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', fullUrl);
  setMetaTag('property', 'og:image', fullImageUrl);
  setMetaTag('property', 'og:image:secure_url', fullImageUrl);
  setMetaTag('property', 'og:type', type);
  setMetaTag('property', 'og:site_name', "Nyksys — Architecture d'Intérieur");
  setMetaTag('property', 'og:locale', 'fr_FR');

  // Twitter Card
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', fullImageUrl);
  setMetaTag('name', 'twitter:url', fullUrl);
}
