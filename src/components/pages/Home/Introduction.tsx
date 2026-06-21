'use client';
import { motion } from 'framer-motion';
import Button from '@/components/core/Button';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { routes } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import { handleAsync, openAsBlobInNewTab } from '@/utils/api';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';

const Introduction = () => {
  const router = useRouter();
  const { state: isCvLoading, enable: startCvLoading, disable: stopCvLoading } = useBooleanToggle();

  const handleContactMe = () => {
    router.push(routes.ui.contact);
  };

  const handleDownloadCV = handleAsync(
    () => {
      startCvLoading();
      return openAsBlobInNewTab('/cv3-nofil.pdf');
    },
    {
      onError: (err) => {
        console.error('Error opening CV:', err);
      },
      onFinally: stopCvLoading,
    },
  );

  return (
    <div className="order-1 flex flex-col items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="flex flex-col leading-[0.9] font-black tracking-tighter uppercase select-none">
          <span className="text-accent text-[clamp(2.5rem,9vw,5.5rem)] drop-shadow-[0_0_12px_rgba(13,242,89,0.25)]">
            Full Stack
          </span>
          <span className="text-[clamp(2.5rem,9vw,5.5rem)] text-white">Software Engineer</span>
        </h1>

        <p className="text-text-secondary mt-6 max-w-lg text-[clamp(0.95rem,1.2vw,1.1rem)] leading-relaxed font-normal opacity-90">
          Hi! I am&nbsp;
          <span className="hover:text-accent cursor-pointer font-bold text-white hover:underline">Nofil Zahid</span>. I
          design and build scalable SaaS products, focusing on performance, clean architecture, and solving real-world
          problems across web and mobile platforms.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button onClick={handleDownloadCV} isLoading={isCvLoading}>
            <ExternalLink size={16} className="group-hover:animate-bounce" />
            <span className="relative z-10">View CV</span>
          </Button>
          <Button onClick={handleContactMe}>
            <MessageCircle size={16} className="transition-transform group-hover:scale-110" />
            <span className="relative z-10">Contact Me</span>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;
