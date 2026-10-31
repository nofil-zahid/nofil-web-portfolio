import ProjectPage from '@/components/pages/ProjectsPage';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.projects];

export default function ProjectsPage() {
  return <ProjectPage />;
}
