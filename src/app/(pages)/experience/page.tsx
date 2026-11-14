import { ExperiencePage as Experience } from '@/components/pages';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.experience];

export default function ExperiencePage() {
  return <Experience />;
}
