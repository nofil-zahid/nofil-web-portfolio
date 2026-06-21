'use client';

import { motion } from 'framer-motion';
import { cn } from '@/styles/tailwind-utils';
import { routes } from '@/constants/routes';
import Image from 'next/image';
import { SkillIcons } from './Icons';
import { TExpertiseIcon, TExpertiseName } from '@/constants/expertise';

const DARK_ICONS: Partial<TExpertiseIcon>[] = ['express', 'vercel'];

export const SkillTag = ({ name, icon, index }: { name: TExpertiseName; icon?: TExpertiseIcon; index: number }) => {
  const isDarkIcon = icon ? DARK_ICONS.includes(icon) : false;

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{
        backgroundColor: 'rgba(13, 242, 89, 0.1)',
        scale: 1.02,
      }}
      className={cn(
        'group flex items-center gap-2.5',
        'text-accent/90 text-[13px] font-medium md:text-[14px]',
        'border-accent/20 rounded-lg border px-4 py-2',
        'bg-[#0a1a12]/60 backdrop-blur-sm',
        'hover:border-accent/40 cursor-default shadow-sm transition-all duration-300 select-none',
      )}
    >
      <span className="opacity-80 transition-opacity group-hover:opacity-100">
        {icon ? (
          <Image
            src={routes.ui.icons(icon, isDarkIcon ? 'fff' : undefined)}
            height={14}
            width={14}
            alt={`${name} icon`}
            className="h-3.5 w-3.5 object-contain"
            unoptimized
          />
        ) : (
          <SkillIcons name={name as TExpertiseName} />
        )}
      </span>
      {name}
    </motion.span>
  );
};
