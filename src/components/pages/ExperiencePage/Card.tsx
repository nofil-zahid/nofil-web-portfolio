'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { ExperienceItem } from '@/types/model';
import { formatDateRange, calculateDuration } from '@/utils/date'; // Assuming you add it here
import Link from 'next/link';

const ExperienceCard: React.FC<ExperienceItem> = ({ role, company, startDate, endDate, responsibilities, website }) => {
  const dateRange = formatDateRange(startDate, endDate);
  const duration = calculateDuration(startDate, endDate || new Date());

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-background-secondary/80 w-full rounded-[clamp(1rem,2vw,1.5rem)] border border-[#2a3c30] p-[clamp(1.2rem,3vw,2rem)] transition-colors hover:border-[#5ff07e]/40"
    >
      <div className="mb-[clamp(1rem,3vw,1.5rem)]">
        <h3 className="mb-2 text-[clamp(1.1rem,3vw,1.7rem)] font-bold text-gray-100">{role}</h3>

        <div className="flex flex-col items-start gap-2">
          <Link
            href={website ?? '#'}
            target="_blank"
            className="text-accent text-[clamp(.7rem,2vw,.95rem)] font-bold tracking-[0.15em] uppercase hover:underline"
          >
            {company}
          </Link>

          <div className="bg-accent/10 text-accent flex items-center gap-2 rounded-md px-3 py-1 font-mono text-[clamp(.7rem,2vw,.9rem)] font-medium">
            <span>{dateRange}</span>
            <span className="text-accent/50 font-sans text-xs">|</span>
            <span className="font-sans tracking-wide text-gray-400">{duration}</span>
          </div>
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
