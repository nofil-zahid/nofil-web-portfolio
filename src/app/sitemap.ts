import type { MetadataRoute } from 'next';
import { projects, getProjectSlug } from '@/constants/projects';
import { routes } from '@/constants/routes';
import { SITE_URL, staticSitemapRoutes } from '@/constants/seo-metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes = staticSitemapRoutes.map((route) => ({
    ...route,
    lastModified: currentDate,
  }));

  const projectRoutes = projects.map((project) => ({
    url: new URL(routes.ui.project(getProjectSlug(project.title)), SITE_URL).toString(),
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
