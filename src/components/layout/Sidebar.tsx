'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { navLinks, socialLinks } from '@/constants/links';
import { cn } from '@/styles/tailwind-utils';
import { useInitialLoading } from '@/hooks/context/loading';
import { routes } from '@/constants/routes';
import TerminalUI from '../shared/TerminalUI';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state: isOpen, toggle } = useBooleanToggle();
  const { state: isTerminalOpen, toggle: toggleTerminal } = useBooleanToggle();

  const { hasLoaded } = useInitialLoading();
  if (!hasLoaded) return null;

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          x: isTerminalOpen ? 'calc(100vw - clamp(60px, 6vw, 90px))' : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 32 }}
        className={cn(
          'bg-background-secondary border-border-glow fixed top-0 right-0 left-0 z-50 flex h-[clamp(60px,8vw,70px)] flex-row items-center justify-between px-6 transition-colors duration-300',
          'md:top-0 md:left-0 md:flex md:h-screen md:w-[clamp(60px,6vw,90px)] md:flex-col md:border-r md:px-0 md:py-[clamp(1rem,3vh,2rem)]',
        )}
      >
        <button
          onClick={() => toggle()}
          className="text-accent cursor-pointer text-[clamp(1.5rem,2vw,2rem)] transition hover:scale-110 md:hidden"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className="text-text-secondary active:text-accent cursor-pointer text-[clamp(0.8rem,1.5vw,1.25rem)] font-medium tracking-[clamp(0.15em,0.5vw,0.25em)] transition-colors duration-200 active:scale-95 md:absolute md:top-1/2 md:-translate-y-1/2 md:-rotate-90 md:whitespace-nowrap"
          onClick={() => router.push(routes.root)}
        >
          Nofil Zahid
        </div>

        <button
          onClick={() => toggleTerminal()}
          className={cn(
            'group relative hidden h-8 w-8 cursor-pointer items-center justify-center rounded-md border font-mono transition-all duration-300 active:scale-95 md:flex',
            'border-accent bg-accent text-background-primary',
            'hover:bg-background-primary hover:text-accent',
            isTerminalOpen
              ? 'shadow-[0_0_20px_rgba(13,242,89,0.35)] hover:shadow-[0_0_25px_rgba(13,242,89,0.5)]'
              : 'hover:shadow-[0_0_20px_rgba(13,242,89,0.35)]',
          )}
          aria-label={isTerminalOpen ? 'Close Terminal' : 'Open Terminal'}
          title={isTerminalOpen ? 'Close Terminal (ESC)' : 'Open Terminal'}
        >
          {isTerminalOpen ? (
            <X size={16} className="text-current transition-transform duration-300 group-hover:rotate-90" />
          ) : (
            <div className="flex items-center -space-x-1 font-mono text-xs font-black text-current">
              <ChevronRight
                size={15}
                strokeWidth={3}
                className="text-current transition-transform group-hover:translate-x-0.5"
              />
              <span className="text-[10px] font-bold text-current">_</span>
            </div>
          )}
        </button>

        <div className="block w-5 md:hidden" />

        <div className="bg-background-primary border-border-glow absolute top-0 right-full h-screen w-[calc(100vw-clamp(60px,6vw,90px))] border-r">
          <TerminalUI isOpen={isTerminalOpen} />
        </div>
      </motion.div>

      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={() => toggleTerminal()}
            className="fixed inset-0 z-40 hidden bg-black/60 backdrop-blur-sm md:block"
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          'fixed z-45 flex h-screen w-full flex-col justify-between',
          'bg-background-primary text-text-primary border-border-glow border-r',
          'transition-transform duration-300',
          'px-[clamp(1.5rem,3vw,3rem)] py-[clamp(2rem,4vh,4rem)]',
          'md:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <nav className="mt-16 flex flex-col gap-[clamp(1rem,3vh,2rem)] font-mono">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => toggle()}
                className="group relative flex items-center py-1 transition-colors duration-300"
              >
                <div className="absolute -left-6 flex w-4 items-center justify-center">
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="bg-accent h-6 w-0.5 shadow-[0_0_12px_rgba(13,242,89,0.8)]"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>

                <span
                  className={cn(
                    'text-[clamp(0.9rem,1.2vw,1.1rem)] tracking-widest uppercase transition-all duration-300',
                    active
                      ? 'text-accent translate-x-2'
                      : 'text-text-secondary group-hover:text-text-primary group-hover:translate-x-1',
                  )}
                >
                  /{link.name}
                </span>

                {active && <span className="bg-accent/5 absolute inset-0 -z-10 rounded-full blur-xl" />}
              </Link>
            );
          })}
        </nav>

        <div className="text-text-secondary flex flex-col gap-3 text-sm">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="group flex items-center gap-2 transition-colors duration-200"
                >
                  <Icon className="text-text-secondary group-hover:text-accent h-4 w-4 transition-colors duration-200" />
                  <span className="text-text-secondary group-hover:text-accent font-mono transition-colors duration-200">
                    {link.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
