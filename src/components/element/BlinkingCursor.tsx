'use client';
import { Easing, motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'circInOut' as Easing }}
      className="bg-accent/50 ml-1 h-3 w-1.5"
    />
  );
};

export default BlinkingCursor;
