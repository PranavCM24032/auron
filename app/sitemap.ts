import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auronforum.com';
  const routes = [
    '',
    '/achievements',
    '/committee',
    '/contact',
    '/events',
    '/faqs',
    '/gallery',
    '/timeline',
    '/vision',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/events' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
