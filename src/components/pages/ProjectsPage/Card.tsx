'use client';

import React from 'react';
import Image from 'next/image';
import { Code2, ExternalLink, Code, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import Tooltip from '@/components/core/Tooltip';
import { ProjectCardProps } from '@/types/components';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { cn } from '@/styles/tailwind-utils';

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  screenshotUrl,
  repoUrl = '',
  liveUrl = '',
  maxDescriptionLines = 3,
  maxTechTags = 4,
}) => {
  const { state: isLoaded, enable: setLoaded } = useBooleanToggle(false);
  const displayedTech = technologies.slice(0, maxTechTags);
  const extraTechCount = technologies.length - maxTechTags;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-background-secondary/80 border-border-glow hover:border-accent/50 relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,242,89,0.25)]"
    >
      <div className="mb-4 flex justify-end gap-4">
        {repoUrl && (
          <motion.a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hover:text-accent transition-colors"
          >
            <Tooltip content="Repository URL">
              <Code2 size={22} />
            </Tooltip>
          </motion.a>
        )}
        {liveUrl && (
          <motion.a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hover:text-accent transition-colors"
          >
            <Tooltip content="Live URL">
              <ExternalLink size={22} />
            </Tooltip>
          </motion.a>
        )}
      </div>

      {screenshotUrl ? (
        <motion.div
          className="border-border-glow bg-background-primary relative mb-4 h-40 w-full overflow-hidden rounded-xl border"
          whileHover={{ scale: 1.02 }}
        >
          {!isLoaded && (
            <div className="bg-background-primary/95 absolute inset-0 z-20 flex flex-col items-center justify-center font-mono select-none">
              <div className="border-accent/50 absolute top-2 left-2 h-3 w-3 border-t-2 border-l-2" />
              <div className="border-accent/50 absolute top-2 right-2 h-3 w-3 border-t-2 border-r-2" />
              <div className="border-accent/50 absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2" />
              <div className="border-accent/50 absolute right-2 bottom-2 h-3 w-3 border-r-2 border-b-2" />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(13,242,89,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,242,89,0.15) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-accent/80 absolute left-0 z-30 h-[2px] w-full shadow-[0_0_12px_#0df259]"
              />

              <div className="z-10 flex flex-col items-center gap-1.5">
                <Terminal className="text-accent/80 h-6 w-6 animate-pulse" />
                <div className="text-accent flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                  <span className="bg-accent h-1.5 w-1.5 animate-ping rounded-full" />
                  <span>DECRYPTING_BUFFER...</span>
                </div>
              </div>
            </div>
          )}

          <Image
            src={screenshotUrl}
            alt={`${title} screenshot`}
            width={500}
            height={500}
            priority={false}
            onLoad={() => setLoaded()}
            className={cn(
              'h-40 w-full object-cover transition-all duration-500',
              isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
            )}
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.4) 50%)',
              backgroundSize: '100% 4px',
            }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="border-border-glow bg-background-primary/20 mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-xl border"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Code className="text-accent fill-accent/20 group-hover:fill-accent/40 h-10 w-10 transition-all duration-300" />
        </motion.div>
      )}

      <h3 className="text-text-primary group-hover:text-accent mb-3 text-2xl font-bold transition-colors">{title}</h3>

      <p className={`text-text-secondary mb-6 grow pb-5 leading-relaxed line-clamp-${maxDescriptionLines}`}>
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {displayedTech.map((tag, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05, color: '#0df259' }}
            className="bg-background-primary/20 rounded-md px-2 py-1 font-mono text-sm tracking-wider text-gray-500 transition-all duration-200"
          >
            {tag}
          </motion.span>
        ))}
        {extraTechCount > 0 && (
          <span className="bg-background-primary/20 rounded-md px-2 py-1 font-mono text-sm tracking-wider text-gray-500">
            +{extraTechCount}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
