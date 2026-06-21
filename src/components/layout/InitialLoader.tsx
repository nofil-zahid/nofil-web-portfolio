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
          className="bg-background-primary fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden p-4 font-mono md:p-8"
        >
          {/* Scanline sweep on exit */}
          {isExiting && (
            <motion.div
              initial={{ top: '-4px' }}
              animate={{ top: '110%' }}
              transition={{ duration: 0.55, ease: 'linear' }}
              className="bg-accent/60 pointer-events-none absolute left-0 z-50 h-[2px] w-full shadow-[0_0_12px_#0df259]"
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
              'bg-background-secondary/50 border-border-glow rounded-2xl border md:rounded-3xl',
              'relative z-10 backdrop-blur-md',
            )}
          >
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:mb-12">
              <div className="w-full">
                <h1 className="text-accent text-[clamp(1.1rem,6vw,2.5rem)] leading-tight font-black tracking-tight">
                  Setup In Progress .....
                  <span className="bg-accent ml-1 inline-block h-[0.6em] w-[1ch] animate-pulse shadow-[0_0_15px_#0df259] md:ml-2" />
                </h1>
                <p className="text-accent/40 mt-1 text-[8px] tracking-[0.2em] md:mt-2 md:text-[10px] md:tracking-[0.3em]">
                  NODE_ID: 0x9F22 | portfolio-version: {KERNEL_VERSION}
                </p>
              </div>

              <div className="flex items-baseline sm:text-right">
                <span className="text-3xl font-black text-white tabular-nums md:text-5xl">{Math.round(progress)}</span>
                <span className="text-accent ml-1 text-sm md:text-xl">%</span>
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-text-secondary text-[8px] tracking-widest uppercase md:text-[10px]">
                  Current_Process
                </p>
                <p className="text-accent/20 hidden font-mono text-[8px] md:block">ADDR_0x004F2</p>
              </div>
              <p className="text-accent border-accent/10 truncate border-b pb-2 text-xs font-bold md:text-base">
                {currentProcess}
              </p>
            </div>

            <div className="w-full">
              <ProgressBar progress={progress} />
            </div>

            <div
              className={cn(
                'mt-8 p-4 md:mt-12 md:p-6',
                'border-border-glow bg-background-primary/50 rounded-xl border',
                'h-40 overflow-hidden md:h-52',
                'relative flex flex-col-reverse',
              )}
            >
              <div className="from-background-primary/80 pointer-events-none absolute inset-0 z-10 bg-linear-to-t to-transparent" />

              <div className="relative z-0 space-y-2">
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
