import ExpertisePage from '@/components/pages/SkillsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nofil | Expertise',
};

export default function Expertise() {
  return <ExpertisePage />;
}
