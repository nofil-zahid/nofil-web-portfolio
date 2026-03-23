'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/styles/tailwind-utils';
import { BiometricAvatarProps } from '@/types/components';

const BiometricAvatar = ({ src = '/profile.png', size = 128, className }: BiometricAvatarProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={cn("relative z-10 group", className)} style={{ width: size, height: size }}>
      
      <div 
        className="absolute -inset-8 -z-10 opacity-0 group-hover:opacity-20 transition-all duration-700 ease-out"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '2px solid var(--color-accent)',
          transform: 'scale(1.1) rotate(5deg)',
        }}
      >
        <div className="absolute inset-0 bg-accent/5 blur-2xl animate-pulse" />
      </div>

      <div className="relative w-full h-full bg-background-primary border border-white/5 p-1">
        
        <div 
          className="absolute -top-1 -left-1 border-t-2 border-l-2 border-accent transition-all duration-300 group-hover:-top-2 group-hover:-left-2 shadow-[0_0_10px_#0df259]" 
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />
        <div 
          className="absolute -bottom-1 -right-1 border-b-2 border-r-2 border-accent transition-all duration-300 group-hover:-bottom-2 group-hover:-right-2 shadow-[0_0_10px_#0df259]" 
          style={{ width: `calc(${size}px * 0.18)`, height: `calc(${size}px * 0.18)` }}
        />
        
        <div className="relative w-full h-full overflow-hidden bg-background-secondary">
          <div
            className={cn(
              "absolute inset-0 z-20 transition-opacity duration-500",
              isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            style={{
              background:
                "linear-gradient(90deg, #0d0d0d 25%, #1a2e1e 50%, #0d0d0d 75%)",
              backgroundSize: "200% 100%",
              animation: isLoaded ? "none" : "avatar-shimmer 1.6s infinite",
            }}
          />

          <Image
            src={src}
            alt="System User Authorized"
            fill
            priority
            onLoad={() => setIsLoaded(true)}
            className="object-cover grayscale brightness-90 contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
            sizes={`${size}px`}
          />

          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1.5px] bg-accent/60 shadow-[0_0_12px_var(--color-accent)] z-10"
          />

          <div 
            className="absolute inset-0 pointer-events-none opacity-30 group-hover:opacity-10 transition-opacity" 
            style={{ 
              backgroundImage: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)',
              backgroundSize: '100% 4px'
            }}
          />
        </div>

      </div>

      <div className="absolute inset-0 bg-accent/5 blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
};

export default BiometricAvatar;