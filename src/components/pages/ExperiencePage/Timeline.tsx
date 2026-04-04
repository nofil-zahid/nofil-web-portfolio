'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './Card';
import { TimelineProps } from '@/types/components';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-0 md:px-[clamp(1rem,4vw,2rem)] py-[clamp(3rem,8vw,6rem)]">
      <div className="absolute left-[calc(1.5rem)] md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-accent/50 to-transparent md:-translate-x-1/2" />

      <div className="space-y-[clamp(2.5rem,6vw,5rem)] md:space-y-[clamp(4rem,8vw,7rem)]">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item?.icon || Briefcase;

          return (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="absolute left-[calc(1.5rem)] md:left-1/2 w-[clamp(32px,4vw,40px)] h-[clamp(32px,4vw,40px)] rounded-full bg-[#0d130f] border-2 border-accent flex items-center justify-center z-10 md:-translate-x-1/2 shadow-[0_0_15px_rgba(95,240,126,0.3)]">
                <Icon size={18} className="text-accent" />
              </div>

              <div
                className={`w-full md:w-[calc(50%-clamp(2rem,6vw,4rem))] pl-[clamp(3rem,6vw,4rem)] md:pl-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5 }}
                >
                  <ExperienceCard {...item} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
