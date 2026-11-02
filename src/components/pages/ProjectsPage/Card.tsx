'use client';

import React from 'react';
import Image from 'next/image';
import {
  Code2,
  ExternalLink,
  Code,
  Terminal,
  Globe,
  Smartphone,
  Monitor,
  Package,
  Library,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Tooltip from '@/components/core/Tooltip';
import { ProjectCardProps } from '@/types/components';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { cn } from '@/styles/tailwind-utils';

const TYPE_ICONS: Record<NonNullable<ProjectCardProps['type']>, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  desktop: Monitor,
  package: Package,
  library: Library,
  cli: Terminal,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  screenshotUrl,
  repoUrl = '',
  liveUrl = '',
  maxDescriptionLines = 3,
  maxTechTags = 4,
  type,
}) => {
  const { state: isLoaded, enable: setLoaded } = useBooleanToggle(false);
  const displayedTech = technologies.slice(0, maxTechTags);
  const extraTechCount = technologies.length - maxTechTags;
  const TypeIcon = (type && TYPE_ICONS[type]) || Code;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group bg-background-secondary/80 border-border-glow hover:border-accent/60 relative flex h-full flex-col overflow-hidden rounded-2xl border p-0 backdrop-blur-sm transition-all duration-300"
    >
      <motion.div
        className="border-border-glow/40 bg-background-primary relative mb-5 overflow-hidden border-b shadow-inner"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-background-secondary border-border-glow/40 flex items-center justify-between border-b px-3.5 py-2 font-mono text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          </div>

          <div className="flex items-center gap-3">
            {repoUrl && (
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} source repository on GitHub`}
                whileHover={{ y: -1, scale: 1.1 }}
                className="text-text-secondary hover:text-accent focus-visible:ring-accent rounded transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <Tooltip content="Repository URL">
                  <Code2 size={16} aria-hidden="true" />
                </Tooltip>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live deployment of ${title}`}
                whileHover={{ y: -1, scale: 1.1 }}
                className="text-text-secondary hover:text-accent focus-visible:ring-accent rounded transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <Tooltip content="Live URL">
                  <ExternalLink size={16} aria-hidden="true" />
                </Tooltip>
              </motion.a>
            )}
          </div>
        </div>

        {screenshotUrl ? (
          <div className="relative h-44 w-full overflow-hidden">
            {!isLoaded && (
              <div
                aria-hidden="true"
                className="bg-background-primary/95 absolute inset-0 z-20 flex flex-col items-center justify-center font-mono select-none"
              >
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
                  className="bg-accent/80 absolute left-0 z-30 h-0.5 w-full shadow-[0_0_12px_#0df259]"
                />

                <div className="z-10 flex flex-col items-center gap-1.5">
                  <Terminal className="text-accent/80 h-5 w-5 animate-pulse" />
                  <div className="text-accent flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                    <span className="bg-accent h-1.5 w-1.5 animate-ping rounded-full" />
                    <span>DECRYPTING_BUFFER...</span>
                  </div>
                </div>
              </div>
            )}

            <Image
              src={screenshotUrl}
              alt={`${title} project preview`}
              width={600}
              height={400}
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
              onLoad={() => setLoaded()}
              className={cn(
                'h-44 w-full object-cover object-top transition-all duration-700 group-hover:scale-105',
                isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
              )}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.5) 50%)',
                backgroundSize: '100% 4px',
              }}
            />
          </div>
        ) : (
          <div className="bg-background-primary/20 flex h-44 w-full items-center justify-center overflow-hidden">
            <TypeIcon
              className="text-accent/70 fill-accent/10 group-hover:fill-accent/25 h-12 w-12 transition-all duration-300"
              aria-hidden="true"
            />
          </div>
        )}
      </motion.div>

      <div className="flex grow flex-col px-5 pb-5">
        <div className="mb-2.5 flex items-start justify-between gap-2">
          <h2 className="text-text-primary group-hover:text-accent text-xl font-bold tracking-wide transition-colors">
            {title}
          </h2>
          {type && (
            <span className="border-border-glow/60 bg-background-primary/40 text-accent rounded px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase">
              {type}
            </span>
          )}
        </div>

        <p
          className={cn(
            'text-text-secondary mb-6 grow font-sans text-sm leading-relaxed',
            `line-clamp-${maxDescriptionLines}`,
          )}
        >
          {description}
        </p>

        <div className="border-border-glow/30 mt-auto flex flex-wrap gap-1.5 border-t pt-3">
          {displayedTech.map((tag, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, y: -1 }}
              className="border-border-glow/40 bg-background-primary/50 text-text-secondary hover:text-accent hover:border-accent/40 rounded-md border px-2.5 py-1 font-mono text-xs tracking-wider transition-all duration-200"
            >
              {tag}
            </motion.span>
          ))}
          {extraTechCount > 0 && (
            <span className="border-border-glow/40 bg-background-primary/30 text-text-secondary/70 rounded-md border px-2 py-1 font-mono text-xs tracking-wider">
              +{extraTechCount}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
