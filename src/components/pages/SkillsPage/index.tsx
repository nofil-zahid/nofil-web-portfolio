import { ExpertiseCard } from './ExpertiseCard';
import { CAPABILITIES } from '@/constants/capabilities';
import SectionHeader from '@/components/shared/SectionHeader';
import TechnicalInventory from './TechnicalInventory';

export default function ExpertisePage() {
  return (
    <section>
      <SectionHeader
        title="Engineering Expertise"
        tag="SYSTEMS_IN_ACTION"
        description="Architecting full-stack web applications, multi-tenant backend systems, and automated deployment pipelines focused on reliability and business requirements."
      />

      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {CAPABILITIES.map((expertise, index) => (
          <ExpertiseCard key={expertise.id} expertise={expertise} index={index} />
        ))}
      </div>

      <TechnicalInventory />
    </section>
  );
}
