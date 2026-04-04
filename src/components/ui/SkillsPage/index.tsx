import SectionHeader from '@/components/shared/SectionHeader';
import { expertise } from '@/constants/expertise';
import { ExpertiseCard } from './Card';

const SkillsPage = () => {
  return (
    <section>
      <SectionHeader
        title="Skill Manifest"
        tag="System_Operational"
        description="A comprehensive manifest of architectural capabilities and technical proficiencies developed through complex system design and engineering protocols."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {Object.entries(expertise).map(([category, skills], index) => (
          <ExpertiseCard key={category} category={category} skills={skills} order={index} />
        ))}
      </div>

      {/* <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-600 font-mono text-[9px] tracking-[0.3em] uppercase">
        <p>Verified_Capabilities_Sync: OK</p>
        <p>Access_Level: Authorized_Developer</p>
      </div> */}
    </section>
  );
};

export default SkillsPage;
