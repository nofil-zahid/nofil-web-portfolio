'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSequenceDelay } from '@/hooks/core/use-sequence-delay';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import ProgressBar from '../element/ProgressBar';
import TermLogEntry from '../element/TermLogEntry';
import { cn } from '@/styles/tailwind-utils';
import { InitialLoaderProps } from '@/types/components';

const KERNEL_VERSION = '8.4.2-STABLE';

const InitialLoader = ({ onFinished }: InitialLoaderProps) => {
  const { state: isExiting, enable } = useBooleanToggle();
  const [progress, setProgress] = useState(0);
  const [currentProcess, setCurrentProcess] = useState('Initializing...');

  useEffect(() => {
    const startTime = Date.now();
    const duration = 4200;

    const update = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / duration) * 100);

      setProgress(newProgress);

      if (newProgress > 90) setCurrentProcess('Finalizing build...');
      else if (newProgress > 70) setCurrentProcess('Compiling modules...');
      else if (newProgress > 40) setCurrentProcess('Loading assets...');
      else if (newProgress > 15) setCurrentProcess('Bootstrapping app...');
      else setCurrentProcess('Initializing...');

      if (newProgress < 100) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, []);

  useSequenceDelay([{ delay: 5000, callback: () => enable() }]);

  return (
    <AnimatePresence onExitComplete={() => onFinished?.()}>
      {!isExiting && (
        <motion.div
          key="loader-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 z-[9999] bg-background-primary flex flex-col items-center justify-center overflow-hidden font-mono p-4 md:p-8"
        >
          {/* Scanline sweep on exit */}
          {isExiting && (
            <motion.div
              initial={{ top: '-4px' }}
              animate={{ top: '110%' }}
              transition={{ duration: 0.55, ease: 'linear' }}
              className="absolute left-0 w-full h-[2px] bg-accent/60 z-50 shadow-[0_0_12px_#0df259] pointer-events-none"
              style={{ position: 'absolute' }}
            />
          )}

          <motion.div
            key="terminal-card"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.97,
              filter: 'blur(8px)',
              transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
            }}
            className={cn(
              'w-full max-w-5xl',
              'p-6 md:p-12',
              'bg-background-secondary/50 border border-border-glow rounded-2xl md:rounded-3xl',
              'backdrop-blur-md z-10 relative',
            )}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
              <div className="w-full">
                <h1 className="text-[clamp(1.1rem,6vw,2.5rem)] font-black text-accent tracking-tight leading-tight">
                  Setup In Progress .....
                  <span className="animate-pulse inline-block w-[1ch] h-[0.6em] bg-accent ml-1 md:ml-2 shadow-[0_0_15px_#0df259]" />
                </h1>
                <p className="text-accent/40 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-2">
                  NODE_ID: 0x9F22 | portfolio-version: {KERNEL_VERSION}
                </p>
              </div>

              <div className="flex items-baseline sm:text-right">
                <span className="text-3xl md:text-5xl font-black text-white tabular-nums">{Math.round(progress)}</span>
                <span className="text-accent ml-1 text-sm md:text-xl">%</span>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="flex justify-between items-center mb-2">
                <p className="text-[8px] md:text-[10px] text-text-secondary uppercase tracking-widest">
                  Current_Process
                </p>
                <p className="text-[8px] text-accent/20 font-mono hidden md:block">ADDR_0x004F2</p>
              </div>
              <p className="text-accent font-bold truncate text-xs md:text-base border-b border-accent/10 pb-2">
                {currentProcess}
              </p>
            </div>

            <div className="w-full">
              <ProgressBar progress={progress} />
            </div>

            <div
              className={cn(
                'mt-8 md:mt-12 p-4 md:p-6',
                'border border-border-glow bg-background-primary/50 rounded-xl',
                'h-40 md:h-52 overflow-hidden',
                'flex flex-col-reverse relative',
              )}
            >
              <div className="absolute inset-0 bg-linear-to-t from-background-primary/80 to-transparent pointer-events-none z-10" />

              <div className="space-y-2 relative z-0">
                <TermLogEntry text="Initializing application..." active={true} />
                <TermLogEntry text="Preparing interface..." active={progress > 15} />
                <TermLogEntry text="Loading components..." active={progress > 40} />
                <TermLogEntry text="Optimizing performance..." active={progress > 70} />
                <TermLogEntry text="Finalizing experience..." active={progress > 90} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
