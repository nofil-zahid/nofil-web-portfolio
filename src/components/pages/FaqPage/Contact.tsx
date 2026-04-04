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
      className="w-full max-w-3xl mx-auto mt-12 p-8 rounded-2xl border border-border-glow bg-background-secondary flex flex-col md:flex-row items-center justify-between gap-8 hover:border-accent/40 transition-colors"
    >
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold text-text-primary mb-2">Still have questions?</h3>

        <p className="text-text-secondary text-sm md:text-base max-w-[400px]">
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
