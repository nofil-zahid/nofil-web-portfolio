'use client';

import { ChildrenProps } from '@/types/components';
import { motion } from 'framer-motion';

const Outlet = ({ children }: ChildrenProps) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: 'backOut' }}
      className="mt-6 md:mt-10 max-w-7xl mx-auto px-6 py-8"
    >
      {children}
    </motion.div>
  );
};

export default Outlet;
