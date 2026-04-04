'use client';
import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';
import { Database, Monitor, Server, ShieldCheck, Smartphone, Terminal, Workflow } from 'lucide-react';

const getCategoryIcon = (category: string) => {
  const cat = category.toLowerCase();
  switch (true) {
    case cat.includes('frontend'):
      return <Monitor size={40} />;
    case cat.includes('backend'):
      return <Server size={40} />;
    case cat.includes('database'):
      return <Database size={40} />;
    case cat.includes('mobile'):
      return <Smartphone size={40} />;
    case cat.includes('security'):
      return <ShieldCheck size={40} />;
    case cat.includes('tools'):
    case cat.includes('devops'):
      return <Terminal size={40} />;
    default:
      return <Workflow size={40} />;
  }
};

export const ExpertiseCard = ({ category, skills, order }: { category: string; skills: string[]; order: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: order * 0.1, duration: 0.5 }}
    className="group relative bg-background-secondary/40 backdrop-blur-sm p-6 md:p-8 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-colors duration-500"
  >
    <div className="absolute -top-1 -right-1 p-2 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      <span className="text-[60px] font-black font-mono leading-none select-none uppercase text-accent">
        {getCategoryIcon(category)}
      </span>
    </div>

    <div className="relative mb-6 md:mb-8 flex items-center gap-3">
      <div className="h-[24px] w-[3px] bg-accent shadow-[0_0_10px_var(--color-accent)] group-hover:h-[30px] transition-all duration-300" />
      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
        {category.replace(/([A-Z])/g, ' $1').trim()}
      </h3>
    </div>

    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, index) => (
        <SkillTag key={skill} name={skill} index={index} />
      ))}
    </div>
  </motion.div>
);
