'use client';
import { motion } from 'framer-motion';
import { string } from '@/utils';
import { SectionHeaderProps } from '@/types/components';
import { cn } from "@/styles/tailwind-utils";
import BlinkingCursor from '../element/BlinkingCursor';
import { headerChildVariant, sectionContainer } from '@/styles/motion-framer-utils';

const SectionHeader = ({ title, description, tag, align = 'left', className = '' }: SectionHeaderProps) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-3xl w-full flex flex-col mb-14 group", 
        isCenter ? 'items-center text-center mx-auto' : 'items-start text-left', 
        className
      )}
    >
      {tag && !string.isEmpty(tag) && (
        <motion.div 
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center font-mono mb-6"
        >
          <span className="text-accent text-[9px] font-bold mr-2 opacity-40 select-none">ID_</span>
          <div className="flex bg-accent/5 border-l border-accent/60 px-2.5 py-1 backdrop-blur-sm">
            {tag.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={headerChildVariant}
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent/90"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <BlinkingCursor />
        </motion.div>
      )}

      <div className={cn("relative mb-4", isCenter ? "w-full" : "w-fit")}>
        <h1 className={cn(
          "text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight leading-[1.1] text-text-primary uppercase",
          "before:content-['>'] before:text-accent/20 before:mr-3 before:text-[0.5em] before:font-mono before:align-middle",
        )}>
          {title}
        </h1>
        <div className={cn(
          "h-px mt-1.5 bg-linear-to-r from-accent/30 via-accent/5 to-transparent",
          isCenter ? "w-24 mx-auto" : "w-16"
        )} />
      </div>

      <div className={cn(
        "relative flex gap-3 mt-1",
        isCenter ? "flex-col items-center" : "flex-row items-start"
      )}>
        {!isCenter && (
          <div className="flex flex-col text-[9px] font-mono text-accent/15 select-none pt-1.5 border-r border-white/5 pr-3">
            <span>ln</span>
            <span>01</span>
          </div>
        )}

        <p className={cn(
          "text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed text-text-secondary max-w-xl font-normal opacity-80",
          isCenter ? "text-center" : "text-left"
        )}>
          <span className="text-accent/40 mr-1.5 font-mono text-xs">{'//'}</span>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
