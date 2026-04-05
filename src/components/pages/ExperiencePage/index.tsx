import SectionHeader from '@/components/shared/SectionHeader';
import Timeline from './Timeline';
import { experiences } from '@/constants/experiences-data';

const Experience = () => {
  return (
    <section>
      <SectionHeader
        title="Career Trajectory"
        description="A chronological journey through my professional milestones, technical contributions, and leadership roles in the tech industry."
        align="left"
        tag="HISTORY_LOG"
      />
      <Timeline items={experiences} />
    </section>
  );
};

export default Experience;
