'use client';
import { stats } from '@/constants/stats-data';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="order-2 flex flex-col gap-8 border-l border-white/10 pl-6 md:gap-10 md:border-l-2 md:pl-8 lg:border-r lg:border-l-0 lg:pr-8 lg:pl-0 lg:text-right">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className="group"
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
