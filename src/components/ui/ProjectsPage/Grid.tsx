'use client';
import { motion } from "framer-motion";
import ProjectCard from "./Card";
import { projects } from "@/constants/projects";
import { containerVariants, itemVariants } from "@/styles/motion-framer-utils";

const ProjectsGrid = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-[repeat(auto-fit,minmax(clamp(260px,28vw,340px),1fr))] gap-[clamp(1rem,2vw,1.6rem)] w-full"
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProjectCard
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            screenshotUrl={project.screenshotUrl}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsGrid;
