import SectionHeader from "@/components/shared/SectionHeader";
import ProjectsGrid from "./Grid";

export default function ProjectPage() {
  return (
    <section>
      <SectionHeader
        title="Things I have built"
        description="List of my technical exploits and design experiments."
        tag="Projects"
        align="left"
      />

      <ProjectsGrid />
    </section>
  );
}
