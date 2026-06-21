'use client';

import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';
import { CategoryIcon } from './Icons';
import { TExpertiseCategory, TExpertiseIcon, TExpertiseName } from '@/constants/expertise';

export const ExpertiseCard = ({
  category,
  skills,
  order,
}: {
  category: TExpertiseCategory;
  skills: readonly { name: string; icon?: TExpertiseIcon }[];
  order: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: order * 0.1, duration: 0.5 }}
    className="group bg-background-secondary/40 hover:border-accent/20 relative overflow-hidden rounded-2xl border border-white/5 p-6 backdrop-blur-sm transition-colors duration-500 md:p-8"
  >
    <div className="absolute -top-1 -right-1 p-2 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
      <CategoryIcon category={category} />
    </div>

    <div className="relative mb-6 flex items-center gap-3 md:mb-8">
      <div className="bg-accent h-6 w-0.75 shadow-[0_0_10px_var(--color-accent)] transition-all duration-300 group-hover:h-7.5" />
      <h3 className="text-xl font-black tracking-tighter text-white uppercase md:text-2xl">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
    </div>

    <div className="relative z-10 flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <SkillTag key={skill.name} name={skill.name as TExpertiseName} icon={skill.icon} index={index} />
      ))}
    </div>
  </motion.div>
);
