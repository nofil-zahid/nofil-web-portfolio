'use client';
import { motion } from 'framer-motion';
import { string } from '@/utils';
import { SectionHeaderProps } from '@/types/components';
import { cn } from '@/styles/tailwind-utils';
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
        'group mb-14 flex w-full max-w-3xl flex-col',
        isCenter ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {tag && !string.isEmpty(tag) && (
        <motion.div
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 flex items-center font-mono"
        >
          <span className="text-accent mr-2 text-[9px] font-bold opacity-40 select-none">ID_</span>
          <div className="bg-accent/5 border-accent/60 flex border-l px-2.5 py-1 backdrop-blur-sm">
            {tag.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={headerChildVariant}
                className="text-accent/90 text-[10px] font-bold tracking-[0.2em] uppercase"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <BlinkingCursor />
        </motion.div>
      )}

      <div className={cn('relative mb-4', isCenter ? 'w-full' : 'w-fit')}>
        <h1
          className={cn(
            'text-text-primary text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] font-bold tracking-tight uppercase',
            "before:text-accent/20 before:mr-3 before:align-middle before:font-mono before:text-[0.5em] before:content-['>']",
          )}
        >
          {title}
        </h1>
        <div
          className={cn(
            'from-accent/30 via-accent/5 mt-1.5 h-px bg-linear-to-r to-transparent',
            isCenter ? 'mx-auto w-24' : 'w-16',
          )}
        />
      </div>

      <div className={cn('relative mt-1 flex gap-3', isCenter ? 'flex-col items-center' : 'flex-row items-start')}>
        {!isCenter && (
          <div className="text-accent/15 flex flex-col border-r border-white/5 pt-1.5 pr-3 font-mono text-[9px] select-none">
            <span>ln</span>
            <span>01</span>
          </div>
        )}

        <p
          className={cn(
            'text-text-secondary max-w-xl text-[clamp(0.95rem,1.2vw,1.125rem)] leading-relaxed font-normal opacity-80',
            isCenter ? 'text-center' : 'text-left',
          )}
        >
          <span className="text-accent/40 mr-1.5 font-mono text-xs">{'//'}</span>
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
