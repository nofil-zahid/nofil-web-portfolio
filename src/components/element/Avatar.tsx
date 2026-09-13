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

      <div className="bg-background-primary relative h-full w-full border border-white/10 p-1">
        <div
          className="border-accent absolute -top-1 -left-1 border-t-2 border-l-2 shadow-[0_0_10px_#0df259] transition-all duration-300 group-hover:-top-2 group-hover:-left-2"
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />
        <div
          className="border-accent absolute -right-1 -bottom-1 border-r-2 border-b-2 shadow-[0_0_10px_#0df259] transition-all duration-300 group-hover:-right-2 group-hover:-bottom-2"
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />

        <div className="bg-background-secondary relative h-full w-full overflow-hidden">
          {!isLoaded && (
            <div className="bg-background-primary/95 absolute inset-0 z-30 flex flex-col items-center justify-center font-mono select-none">
              <div className="border-accent/30 absolute inset-2 animate-[spin_10s_linear_infinite] rounded-full border border-dashed" />
              <div className="border-accent/40 absolute h-4 w-4 rounded-full border" />

              <div className="border-accent/20 absolute inset-0 top-1/2 -translate-y-1/2 border-t border-b" />
              <div className="border-accent/20 absolute inset-0 left-1/2 -translate-x-1/2 border-r border-l" />

              <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-accent/80 absolute left-0 z-40 h-[2px] w-full shadow-[0_0_12px_#0df259]"
              />

              <div className="text-accent absolute bottom-2 flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase">
                <span className="bg-accent h-1.5 w-1.5 animate-ping rounded-full" />
                <span>SCANNING...</span>
              </div>
            </div>
          )}

          <Image
            src={src}
            alt="System User Authorized"
            fill
            priority
            onLoad={() => enable()}
            className={cn(
              'object-cover opacity-70 brightness-90 contrast-125 grayscale transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:brightness-100 group-hover:grayscale-0',
              !isLoaded && 'opacity-0',
            )}
            sizes={`${size}px`}
          />

          {isLoaded && (
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="bg-accent/60 absolute left-0 z-10 h-[1.5px] w-full shadow-[0_0_12px_var(--color-accent)]"
            />
          )}

          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity group-hover:opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)',
              backgroundSize: '100% 4px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BiometricAvatar;
