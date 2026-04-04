'use client';

import { motion } from 'framer-motion';
import { cn } from '@/styles/tailwind-utils';
import { Code2, Cpu, Layers, Palette, Terminal, Zap, Type } from 'lucide-react';

const getSkillIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return <Zap size={14} className="text-accent" />;
  if (n.includes('next')) return <Layers size={14} className="text-accent" />;
  if (n.includes('typescript') || n.includes('js')) return <Code2 size={14} className="text-accent" />;
  if (n.includes('tailwind') || n.includes('css')) return <Palette size={14} className="text-accent" />;
  if (n.includes('redux') || n.includes('state')) return <Cpu size={14} className="text-accent" />;
  if (n.includes('slate')) return <Type size={14} className="text-accent" />;
  return <Terminal size={14} className="text-accent" />;
};

export const SkillTag = ({ name, index }: { name: string; index: number }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.3 }}
    whileHover={{
      backgroundColor: 'rgba(13, 242, 89, 0.1)',
      scale: 1.02,
    }}
    className={cn(
      'flex items-center gap-2.5',
      'text-[13px] md:text-[14px] font-medium text-accent/90',
      'px-4 py-2 border border-accent/20 rounded-lg',
      'bg-[#0a1a12]/60 backdrop-blur-sm',
      'transition-all duration-300 cursor-default select-none shadow-sm hover:border-accent/40',
    )}
  >
    <span className="opacity-80 group-hover:opacity-100 transition-opacity">{getSkillIcon(name)}</span>
    {name}
  </motion.span>
);
