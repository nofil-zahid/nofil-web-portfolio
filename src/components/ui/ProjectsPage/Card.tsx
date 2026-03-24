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
  repoUrl = "",
  liveUrl = "",
  maxDescriptionLines = 3,
  maxTechTags = 4,
}) => {
  const displayedTech = technologies.slice(0, maxTechTags);
  const extraTechCount = technologies.length - maxTechTags;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full p-6 rounded-2xl bg-background-secondary/80 border border-border-glow hover:border-accent/50 hover:shadow-[0_0_20px_rgba(13,242,89,0.25)] transition-all duration-300"
    >
      <div className="flex justify-end gap-4 mb-4">
        {repoUrl && (
          <motion.a 
            href={repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="hover:text-accent transition-colors"
          >
            <Tooltip content="Repository URL"><Code2 size={22} /></Tooltip>
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
            <Tooltip content="Live URL"><ExternalLink size={22} /></Tooltip>
          </motion.a>
        )}
      </div>

      {screenshotUrl ? (
        <motion.div
          className="w-full mb-4 rounded-xl overflow-hidden border border-border-glow"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={screenshotUrl}
            alt={`${title} screenshot`}
            className="w-full h-40 object-cover"
            width={500}
            height={500}
          />
        </motion.div>
      ) : (
        <motion.div
          className="w-full mb-4 rounded-xl overflow-hidden border border-border-glow"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-full h-40 bg-background-primary/20 flex items-center justify-center">
            <Code className="w-10 h-10 text-accent fill-accent/20 transition-all duration-300 group-hover:fill-accent/40" />
          </div>
        </motion.div>
      )}

      <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>

      <p className={`text-text-secondary leading-relaxed mb-6 grow pb-5 line-clamp-${maxDescriptionLines}`}>
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {displayedTech.map((tag, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05, color: '#0df259' }}
            className="text-sm font-mono text-gray-500 tracking-wider bg-background-primary/20 px-2 py-1 rounded-md transition-all duration-200"
          >
            {tag}
          </motion.span>
        ))}
        {extraTechCount > 0 && (
          <span className="text-sm font-mono text-gray-500 tracking-wider bg-background-primary/20 px-2 py-1 rounded-md">
            +{extraTechCount}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
