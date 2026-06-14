'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { ExperienceItem } from '@/types/model';
import { formatDateRange } from '@/utils/date';

const ExperienceCard: React.FC<ExperienceItem> = ({ role, company, startDate, endDate, responsibilities }) => {
  const dateRange = formatDateRange(startDate, endDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-background-secondary/80 w-full rounded-[clamp(1rem,2vw,1.5rem)] border border-[#2a3c30] p-[clamp(1.2rem,3vw,2rem)] transition-colors hover:border-[#5ff07e]/40"
    >
      <div className="mb-[clamp(1rem,3vw,1.5rem)]">
        <h3 className="mb-2 text-[clamp(1.1rem,3vw,1.7rem)] font-bold text-gray-100">{role}</h3>

        <div className="flex flex-wrap items-center gap-[clamp(.5rem,2vw,1rem)]">
          <span className="bg-accent/10 text-accent rounded-md px-3 py-1 font-mono text-[clamp(.7rem,2vw,.9rem)] font-medium">
            {dateRange}
          </span>

          <span className="text-accent text-[clamp(.7rem,2vw,.95rem)] font-bold tracking-[0.15em] uppercase">
            {company}
          </span>
        </div>
      </div>

      <ul className="space-y-[clamp(.7rem,2vw,1.2rem)]">
        {responsibilities.map((item, index) => (
          <li key={index} className="group flex gap-[clamp(.5rem,2vw,.8rem)]">
            <span className="text-accent mt-1 shrink-0 transition-transform group-hover:translate-x-1">
              <MoveRight size={16} />
            </span>

            <p className="text-[clamp(.85rem,2.2vw,1.05rem)] leading-relaxed text-gray-300">{item}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
