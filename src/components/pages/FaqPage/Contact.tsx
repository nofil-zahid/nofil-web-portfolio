'use client';
import Button from '@/components/core/Button';
import { routes } from '@/constants/routes';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();

  const handleContactMe = () => {
    router.push(routes.ui.contact);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="border-border-glow bg-background-secondary hover:border-accent/40 mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-between gap-8 rounded-2xl border p-8 transition-colors md:flex-row"
    >
      <div className="text-center md:text-left">
        <h3 className="text-text-primary mb-2 text-xl font-bold">Still have questions?</h3>

        <p className="text-text-secondary max-w-[400px] text-sm md:text-base">
          If you couldnt find what you were looking for, feel free to reach out directly.
        </p>
      </div>

      <Button onClick={handleContactMe} customClass="shrink-0">
        <Mail size={18} />
        Contact Me
      </Button>
    </motion.div>
  );
};

export default Contact;
