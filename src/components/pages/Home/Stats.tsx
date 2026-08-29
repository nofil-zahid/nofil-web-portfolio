'use client';
import { stats } from '@/constants/stats-data';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="order-2 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-center sm:gap-10 lg:mt-0 lg:w-auto lg:flex-col lg:items-end lg:justify-start lg:gap-10 lg:border-t-0 lg:border-r lg:pt-0 lg:pr-8 lg:text-right">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className="group flex flex-col items-center lg:items-end"
        >
          <h2 className="text-accent mb-1 text-[clamp(1.75rem,4vw,2.75rem)] leading-none font-black tracking-tighter transition-transform group-hover:translate-x-1 lg:group-hover:-translate-x-1">
            {stat.value}+
          </h2>
          <p className="text-[9px] font-bold tracking-[0.25em] whitespace-nowrap text-gray-500 uppercase">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
