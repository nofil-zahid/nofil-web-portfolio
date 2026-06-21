'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './Card';
import { TimelineProps } from '@/types/components';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-0 pb-[clamp(3rem,8vw,6rem)] md:px-[clamp(1rem,4vw,2rem)]">
      <div className="via-accent/50 absolute top-0 bottom-0 left-[calc(1.5rem)] w-[2px] bg-linear-to-b from-transparent to-transparent md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-[clamp(2.5rem,6vw,5rem)] md:space-y-[clamp(4rem,8vw,7rem)]">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = item?.icon || Briefcase;

          return (
            <div key={index} className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
              <div className="border-accent absolute left-[calc(1.5rem)] z-10 flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] items-center justify-center rounded-full border-2 bg-[#0d130f] shadow-[0_0_15px_rgba(95,240,126,0.3)] md:left-1/2 md:-translate-x-1/2">
                <Icon size={18} className="text-accent" />
              </div>

              <div
                className={`w-full pl-[clamp(3rem,6vw,4rem)] md:w-[calc(50%-clamp(2rem,6vw,4rem))] md:pl-0 ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}
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
