import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Secuur Brandveiligheid';
const SITE_URL = 'https://www.secuurbv.nl';
const DEFAULT_IMAGE = `${SITE_URL}/wp-content/uploads/2023/06/Secuur-Beeldmerk.png`;
const DEFAULT_KEYWORDS = 'brandveiligheid, passieve brandveiligheid, bouwkundige brandveiligheid, Secuur Brandveiligheid, Schiedam';

function setMetaTag(attr, key, content) {
  if (!content) {
    return;
  }

  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function toArray(value) {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function buildBreadcrumbSchema(items) {
  if (!items || items.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Secuur Brandveiligheid B.V.',
    url: SITE_URL,
    logo: `${SITE_URL}/wp-content/uploads/2023/06/Secuur-Beeldmerk.png`,
    email: 'info@secuurbv.nl',
    telephone: '+31-10-3214216',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cornelis Houtmanstraat 11',
      postalCode: '3124 LB',
      addressLocality: 'Schiedam',
      addressCountry: 'NL'
    },
    sameAs: ['https://nl.linkedin.com/company/secuur-brandveiligheid']
  };
}

function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'nl-NL'
  };
}

export default function Seo({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
  structuredData,
  breadcrumbItems
}) {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const canonical = `${SITE_URL}${normalizePath(location.pathname)}`;
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow';
    const metaKeywords = keywords || DEFAULT_KEYWORDS;

    document.title = pageTitle;
    setCanonical(canonical);

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', metaKeywords);
    setMetaTag('name', 'robots', robots);

    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:image', image);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    const existingJsonLd = document.head.querySelector('script[data-seo-jsonld="true"]');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
    const pageSchemas = toArray(structuredData);
    const schemas = [
      ...(noIndex ? [] : [buildOrganizationSchema(), buildWebsiteSchema()]),
      ...pageSchemas,
      ...(breadcrumbSchema ? [breadcrumbSchema] : [])
    ];

    if (schemas.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.text = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, type, noIndex, location.pathname, structuredData, breadcrumbItems]);

  return null;
}