import { isMobileDevice } from '@/utils/device';
import {
  Home,
  FAQsPage,
  ContactMePage,
  WhoAmIPage,
  ProjectsPage,
  ExperiencePage,
  ExpertisePage,
} from '@/components/pages';
import SectionLayout from '@/components/layout/SectionLayout';

export default async function HomePage() {
  const isMobile = await isMobileDevice();

  if (!isMobile) return <Home />;

  return (
    <SectionLayout>
      <Home />
      <WhoAmIPage />
      <ExpertisePage />
      <ProjectsPage />
      <ExperiencePage />
      <ContactMePage />
      <FAQsPage />
    </SectionLayout>
  );
}
