"use client";

import Accordion from '@/components/core/Accordion';
import { faqData } from '@/constants/faq-data';
import { containerVariants, itemVariants } from '@/styles/motion-framer-utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Body = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="w-full flex justify-center px-[clamp(1rem,4vw,2rem)]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[clamp(520px,65vw,900px)]"
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Accordion
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Body;
