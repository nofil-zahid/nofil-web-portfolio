'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ShieldAlert, Terminal } from 'lucide-react';
import { ICapability } from '@/constants/capabilities';
import { routes } from '@/constants/routes';

const DARK_ICONS = new Set(['express', 'vercel', 'nextdotjs']);

interface ExpertiseCardProps {
  readonly expertise: ICapability;
  readonly index: number;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ expertise, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#061a0a]/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#0df259]/50 hover:shadow-[0_0_25px_rgba(13,242,89,0.12)] md:p-8"
    >
      {/* Top Header Section */}
      <div>
        <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#0df259]">
            <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{expertise.id}</span>
          </div>
        </div>

        {/* Title & Problem Statement */}
        <h3 className="mb-3 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#0df259] md:text-2xl">
          {expertise.title}
        </h3>
        <p className="mb-6 font-sans text-sm leading-relaxed text-gray-300">{expertise.problemStatement}</p>

        {/* Deliverables / Engineering Outcomes */}
        <div className="mb-6">
          <h4 className="mb-3 font-mono text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Engineering Outcomes
          </h4>
          <ul className="space-y-2.5">
            {expertise.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200 md:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0df259]" aria-hidden="true" />
                <span className="leading-normal">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Section: Tech Stack & Proof/Learning Context */}
      <div className="mt-auto border-t border-white/5 pt-4">
        {/* Tech Stack Chips */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {expertise.techStack.map((tech) => {
            const name = typeof tech === 'string' ? tech : tech.name;
            const icon = typeof tech === 'string' ? undefined : tech.icon;
            const isDarkIcon = icon ? DARK_ICONS.has(icon) : false;

            return (
              <span
                key={name}
                className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#030f06] px-2 py-1 font-mono text-xs text-gray-300 transition-colors group-hover:border-[#0df259]/30"
              >
                {icon && (
                  <Image
                    src={routes.thirdParty.icons(icon, isDarkIcon ? 'fff' : undefined)}
                    alt={`${name} icon`}
                    width={13}
                    height={13}
                    className="h-3.5 w-3.5 object-contain"
                    unoptimized
                  />
                )}
                <span>{name}</span>
              </span>
            );
          })}
        </div>

        {/* Active Learning Note */}
        {expertise.learningNote && (
          <div className="mt-2 flex items-start gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-2.5 font-mono text-xs text-yellow-200/90">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" aria-hidden="true" />
            <span className="leading-tight">{expertise.learningNote}</span>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export const CapabilityCard = ExpertiseCard;
