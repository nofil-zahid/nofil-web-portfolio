'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/styles/tailwind-utils';
import { BiometricAvatarProps } from '@/types/components';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';

const BiometricAvatar = ({ src = '/profile.png', size = 128, className }: BiometricAvatarProps) => {
  const { state: isLoaded, enable } = useBooleanToggle(false);
  return (
    <div className={cn('group relative z-10', className)} style={{ width: size, height: size }}>
      <div
        className="absolute -inset-8 -z-10 opacity-0 transition-all duration-700 ease-out group-hover:opacity-20"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '2px solid var(--color-accent)',
          transform: 'scale(1.1) rotate(5deg)',
        }}
      >
        <div className="bg-accent/5 absolute inset-0 animate-pulse blur-2xl" />
      </div>

      <div className="bg-background-primary relative h-full w-full border border-white/5 p-1">
        <div
          className="border-accent absolute -top-1 -left-1 border-t-2 border-l-2 shadow-[0_0_10px_#0df259] transition-all duration-300 group-hover:-top-2 group-hover:-left-2"
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />
        <div
          className="border-accent absolute -right-1 -bottom-1 border-r-2 border-b-2 shadow-[0_0_10px_#0df259] transition-all duration-300 group-hover:-right-2 group-hover:-bottom-2"
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />

        <div className="bg-background-secondary relative h-full w-full overflow-hidden">
          <div
            className={cn(
              'absolute inset-0 z-20 transition-opacity duration-500',
              isLoaded ? 'pointer-events-none opacity-0' : 'opacity-100',
            )}
            style={{
              background: 'linear-gradient(90deg, #0d0d0d 25%, #1a2e1e 50%, #0d0d0d 75%)',
              backgroundSize: '200% 100%',
              animation: isLoaded ? 'none' : 'avatar-shimmer 1.6s infinite',
            }}
          />

          <Image
            src={src}
            alt="System User Authorized"
            fill
            priority
            onLoad={() => enable()}
            className="object-cover opacity-70 brightness-90 contrast-125 grayscale transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0"
            sizes={`${size}px`}
          />

          <motion.div
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="bg-accent/60 absolute left-0 z-10 h-[1.5px] w-full shadow-[0_0_12px_var(--color-accent)]"
          />

          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)',
              backgroundSize: '100% 4px',
            }}
          />
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-accent/5 blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" /> */}
    </div>
  );
};

export default BiometricAvatar;
