import ProjectPage from '@/components/pages/ProjectsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nofil | Projects',
};

export default function ProjectsPage() {
  return <ProjectPage />;
}
