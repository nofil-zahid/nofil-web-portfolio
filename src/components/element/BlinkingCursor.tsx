'use client';
import { Easing, motion } from 'framer-motion';

const BlinkingCursor = () => {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: 'circInOut' as Easing }}
      className="ml-1 w-1.5 h-3 bg-accent/50"
    />
  );
};

export default BlinkingCursor;
