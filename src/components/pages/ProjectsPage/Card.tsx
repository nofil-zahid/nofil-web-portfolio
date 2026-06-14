'use client';
import React from 'react';
import Image from 'next/image';
import { Code2, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import Tooltip from '@/components/core/Tooltip';
import { ProjectCardProps } from '@/types/components';

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
          className="border-border-glow mb-4 w-full overflow-hidden rounded-xl border"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={screenshotUrl}
            alt={`${title} screenshot`}
            className="h-40 w-full object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      ) : (
        <motion.div
          className="border-border-glow mb-4 w-full overflow-hidden rounded-xl border"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-background-primary/20 flex h-40 w-full items-center justify-center">
            <Code className="text-accent fill-accent/20 group-hover:fill-accent/40 h-10 w-10 transition-all duration-300" />
          </div>
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
