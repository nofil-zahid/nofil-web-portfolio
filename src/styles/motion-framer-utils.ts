import { Easing, Variants } from 'framer-motion';

export const sectionContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
  }),
};

export const headerChildVariant: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', damping: 12, stiffness: 100 },
  },
  hidden: { opacity: 0, x: -5 },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as Easing } },
};

export const topJawVariants = {
  animate: {
    rotate: [-40, 0, -40],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeInOut' as Easing,
    },
  },
};

export const bottomJawVariants = {
  animate: {
    rotate: [40, 0, 40],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: 'easeInOut' as Easing,
    },
  },
};

export const dotsVariants = {
  animate: {
    x: [0, -50],
    transition: { duration: 0.5, repeat: Infinity, ease: 'linear' as Easing },
  },
};
