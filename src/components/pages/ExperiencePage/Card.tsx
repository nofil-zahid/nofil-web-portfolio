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
      className="w-full bg-background-secondary/80 border border-[#2a3c30] rounded-[clamp(1rem,2vw,1.5rem)] p-[clamp(1.2rem,3vw,2rem)] hover:border-[#5ff07e]/40 transition-colors"
    >
      <div className="mb-[clamp(1rem,3vw,1.5rem)]">
        <h3 className="text-[clamp(1.1rem,3vw,1.7rem)] font-bold text-gray-100 mb-2">{role}</h3>

        <div className="flex flex-wrap items-center gap-[clamp(.5rem,2vw,1rem)]">
          <span className="px-3 py-1 rounded-md bg-accent/10 text-accent text-[clamp(.7rem,2vw,.9rem)] font-mono font-medium">
            {dateRange}
          </span>

          <span className="uppercase tracking-[0.15em] text-accent font-bold text-[clamp(.7rem,2vw,.95rem)]">
            {company}
          </span>
        </div>
      </div>

      <ul className="space-y-[clamp(.7rem,2vw,1.2rem)]">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex gap-[clamp(.5rem,2vw,.8rem)] group">
            <span className="text-accent shrink-0 mt-1 transition-transform group-hover:translate-x-1">
              <MoveRight size={16} />
            </span>

            <p className="text-gray-300 leading-relaxed text-[clamp(.85rem,2.2vw,1.05rem)]">{item}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
