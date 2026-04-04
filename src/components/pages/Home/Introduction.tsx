'use client';
import { motion } from 'framer-motion';
import Button from '@/components/core/Button';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { routes } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { openAsBlobInNewTab } from '@/utils/api';

const Introduction = () => {
  const router = useRouter();

  const handleContactMe = () => {
    router.push(routes.ui.contact);
  };

  const handleDownloadCV = () => {
    openAsBlobInNewTab('/cv3-nofil.pdf');
  };

  return (
    <div className="flex flex-col items-start order-1">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="flex flex-col leading-[0.9] font-black tracking-tighter uppercase select-none">
          <span className="text-accent text-[clamp(2.5rem,9vw,5.5rem)] drop-shadow-[0_0_12px_rgba(13,242,89,0.25)]">
            Full Stack
          </span>
          <span className="text-white text-[clamp(2.5rem,9vw,5.5rem)]">Software Engineer</span>
        </h1>

        <p className="mt-6 text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-secondary max-w-lg leading-relaxed font-normal opacity-90">
          Hi! I am{' '}
          <span className="text-white font-bold hover:text-accent hover:underline cursor-pointer">Nofil Zahid</span>. I
          design and build scalable SaaS products, focusing on performance, clean architecture, and solving real-world
          problems across web and mobile platforms.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button onClick={handleDownloadCV}>
            <ExternalLink size={16} className="group-hover:animate-bounce" />
            <span className="relative z-10">View CV</span>
          </Button>
          <Button onClick={handleContactMe}>
            <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Contact Me</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
