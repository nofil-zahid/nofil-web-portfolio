'use client';
import { Easing, motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'circInOut' as Easing }}
      className="bg-accent ml-0.5 inline-block h-4 w-2 align-middle"
    />
  );
};

export default BlinkingCursor;
