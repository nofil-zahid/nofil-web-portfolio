import Experience from '@/components/pages/ExperiencePage';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.experience];

export default function ExperiencePage() {
  return <Experience />;
}
