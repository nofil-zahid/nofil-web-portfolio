'use client';
import { bottomJawVariants, dotsVariants, topJawVariants } from "@/styles/motion-framer-utils";
import { motion } from "framer-motion";

const PacManLoader = ({ size = 90 }: { size?: number }) => {
  const accentColor = "var(--color-accent)"; 

  return (
    <div className="relative flex items-center justify-center h-40 w-full overflow-hidden">
      <div className="relative" style={{ width: size, height: size }}>
        <motion.div
          variants={dotsVariants}
          animate="animate"
          className="absolute top-1/2 left-1/2 z-0"
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            marginTop: -4,
            backgroundColor: accentColor,
            boxShadow: `
              70px 0 10px 0 var(--color-border-glow),
              70px 0 0 0 ${accentColor},
              120px 0 0 0 ${accentColor},
              170px 0 0 0 ${accentColor},
              220px 0 0 0 ${accentColor}
            `,
          }}
        />

        <motion.div
          variants={topJawVariants}
          animate="animate"
          className="absolute top-0 right-5 origin-bottom shadow-[0_-4px_15px_rgba(13,242,89,0.3)]"
          style={{
            width: size,
            height: size / 2,
            backgroundColor: accentColor,
            borderTopLeftRadius: size,
            borderTopRightRadius: size,
          }}
        />

        <motion.div
          variants={bottomJawVariants}
          animate="animate"
          className="absolute bottom-0 right-5 origin-top shadow-[0_4px_15px_rgba(13,242,89,0.3)]"
          style={{
            width: size,
            height: size / 2,
            backgroundColor: accentColor,
            borderBottomLeftRadius: size,
            borderBottomRightRadius: size,
          }}
        />
      </div>
    </div>
  );
};

export default PacManLoader;
