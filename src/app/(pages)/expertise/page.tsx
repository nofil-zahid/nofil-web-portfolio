import ExpertisePage from '@/components/pages/SkillsPage';
import { Metadata } from 'next';
import { pageMetadata } from '@/constants/seo-metadata';
import { routes } from '@/constants/routes';

export const metadata: Metadata = pageMetadata[routes.ui.expertise];

export default function Expertise() {
  return <ExpertisePage />;
}
