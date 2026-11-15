import { isMobileDevice } from '@/utils/device';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Home } from '@/components/pages';
import SectionLayout from '@/components/layout/SectionLayout';

const WhoAmIPage = dynamic(() => import('@/components/pages/WhoAmI-Page'));
const ExpertisePage = dynamic(() => import('@/components/pages/SkillsPage'));
const ProjectsPage = dynamic(() => import('@/components/pages/ProjectsPage'));
const ExperiencePage = dynamic(() => import('@/components/pages/ExperiencePage'));
const ContactMePage = dynamic(() => import('@/components/pages/ContactPage'));
const FAQsPage = dynamic(() => import('@/components/pages/FaqPage'));

export default async function HomePage() {
  const isMobile = await isMobileDevice();

  if (!isMobile) return <Home />;

  return (
    <SectionLayout>
      <Home />
      <Suspense
        fallback={
          <div className="text-accent/50 block animate-pulse py-12 text-center font-mono text-xs tracking-widest uppercase md:hidden">
            Loading modules...
          </div>
        }
      >
        <SectionLayout className="block md:hidden">
          <WhoAmIPage />
          <ExpertisePage />
          <ProjectsPage />
          <ExperiencePage />
          <ContactMePage />
          <FAQsPage />
        </SectionLayout>
      </Suspense>
    </SectionLayout>
  );
}
