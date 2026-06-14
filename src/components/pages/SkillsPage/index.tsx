import SectionHeader from '@/components/shared/SectionHeader';
import { expertise, TExpertiseCategory } from '@/constants/expertise';
import { ExpertiseCard } from './Card';

const SkillsPage = () => {
  return (
    <section>
      <SectionHeader
        title="Skill Manifest"
        tag="System_Operational"
        description="A comprehensive manifest of architectural capabilities and technical proficiencies developed through complex system design and engineering protocols."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Object.entries(expertise).map(([category, skills], index) => (
          <ExpertiseCard key={category} order={index} category={category as TExpertiseCategory} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
