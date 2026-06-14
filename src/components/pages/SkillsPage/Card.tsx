'use client';

import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';
import { routes } from '@/constants/routes';
import Image from 'next/image';

export const ExpertiseCard = ({ category, skills, order }: { category: string; skills: { name: string; icon?: string }[]; order: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: order * 0.1, duration: 0.5 }}
    className="group relative bg-background-secondary/40 backdrop-blur-sm p-6 md:p-8 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-colors duration-500"
  >
    <div className="absolute -top-1 -right-1 p-2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      {skills && skills[0] && skills[0].icon ? (
        <Image
          src={routes.ui.icons(skills[0].icon)}
          alt={`${category} icon`}
          className="object-contain filter grayscale opacity-70"
          height={60}
          width={60}
          unoptimized
        />
      ) : (
        <span className="text-[60px] font-black font-mono leading-none select-none uppercase text-accent">.</span>
      )}
    </div>

    <div className="relative mb-6 md:mb-8 flex items-center gap-3">
      <div className="h-6 w-0.75 bg-accent shadow-[0_0_10px_var(--color-accent)] group-hover:h-7.5 transition-all duration-300" />
      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, index) => (
        <SkillTag key={skill.name} name={skill.name} icon={skill.icon} index={index} />
      ))}
    </div>
  </motion.div>
);
