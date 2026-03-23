'use client';
import { stats } from '@/constants/stats-data'
import { motion } from 'framer-motion'

const Stats = () => {
  return (
    <div className="order-2 flex flex-col gap-8 md:gap-10 lg:text-right border-l md:border-l-2 lg:border-l-0 lg:border-r border-white/10 pl-6 md:pl-8 lg:pl-0 lg:pr-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
          className="group"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-black text-accent leading-none mb-1 tracking-tighter transition-transform group-hover:translate-x-1 lg:group-hover:-translate-x-1">
            {stat.value}+
          </h2>
          <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-gray-500 whitespace-nowrap">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export default Stats