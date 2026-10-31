'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { navLinks, socialLinks } from '@/constants/links';
import { cn } from '@/styles/tailwind-utils';
import { routes } from '@/constants/routes';
import dynamic from 'next/dynamic';
import { useTerminal } from '../providers/TerminalProvider';

const TerminalUI = dynamic(() => import('../shared/TerminalUI'), {
  ssr: false,
  loading: () => null,
});

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state: isOpen, toggle, disable: closeMenu } = useBooleanToggle();
  const { isTerminalOpen, toggleTerminal, closeTerminal } = useTerminal();

  // Close mobile drawer on Escape key as well
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  const handleHomeNavigation = () => {
    if (pathname === routes.root) return;
    router.push(routes.root);
  };

  return (
    <>
      <motion.aside
        aria-label="Terminal Sidebar Rail"
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
          className="text-accent flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-lg p-2 transition hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none md:hidden"
          aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>

        <button
          type="button"
          className="text-text-secondary hover:text-accent active:text-accent min-h-11 cursor-pointer rounded-md px-2 text-[clamp(0.8rem,1.5vw,1.25rem)] font-medium tracking-[clamp(0.15em,0.5vw,0.25em)] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none active:scale-95 md:absolute md:top-1/2 md:-translate-y-1/2 md:-rotate-90 md:whitespace-nowrap"
          onClick={handleHomeNavigation}
          aria-label="Navigate to Home"
        >
          Nofil Zahid
        </button>

        <button
          onClick={() => toggleTerminal()}
          className={cn(
            'group relative hidden h-8 w-8 cursor-pointer items-center justify-center rounded-md border font-mono transition-all duration-300 active:scale-95 md:flex',
            'border-accent bg-accent text-background-primary',
            'hover:bg-background-primary hover:text-accent',
            'focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none',
            isTerminalOpen
              ? 'shadow-[0_0_20px_rgba(13,242,89,0.35)] hover:shadow-[0_0_25px_rgba(13,242,89,0.5)]'
              : 'hover:shadow-[0_0_20px_rgba(13,242,89,0.35)]',
          )}
          aria-label={
            isTerminalOpen
              ? 'Close Interactive Terminal Drawer'
              : 'Open Interactive Terminal Drawer (Press / or Ctrl+K)'
          }
          aria-expanded={isTerminalOpen}
          aria-controls="terminal-drawer"
          title={isTerminalOpen ? 'Close Terminal (ESC)' : 'Open Terminal (/ or Ctrl+K)'}
        >
          {isTerminalOpen ? (
            <X
              size={18}
              className="text-current transition-transform duration-300 group-hover:rotate-90"
              aria-hidden="true"
            />
          ) : (
            <div className="flex items-center -space-x-1 font-mono text-sm font-black text-current" aria-hidden="true">
              <ChevronRight
                size={16}
                strokeWidth={3}
                className="text-current transition-transform group-hover:translate-x-0.5"
              />
              <span className="text-[11px] font-bold text-current">_</span>
            </div>
          )}
        </button>

        <div className="block w-5 md:hidden" aria-hidden="true" />

        <div
          id="terminal-drawer"
          role="region"
          aria-label="Interactive Terminal Drawer"
          className="bg-background-primary border-border-glow absolute top-0 right-full h-screen w-[calc(100vw-clamp(60px,6vw,90px))] border-r"
        >
          <TerminalUI isOpen={isTerminalOpen} />
        </div>
      </motion.aside>

      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={() => closeTerminal()}
            className="fixed inset-0 z-40 hidden cursor-pointer bg-black/60 backdrop-blur-sm md:block"
            aria-label="Close Terminal Overlay"
          />
        )}
      </AnimatePresence>

      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile Navigation Drawer"
        aria-hidden={!isOpen}
        className={cn(
          'fixed z-45 flex h-screen w-full flex-col justify-between',
          'bg-background-primary text-text-primary border-border-glow border-r',
          'transition-transform duration-300',
          'px-[clamp(1.5rem,3vw,3rem)] py-[clamp(2rem,4vh,4rem)]',
          'md:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <nav aria-label="Mobile Navigation Links" className="mt-16 flex flex-col gap-2 font-mono">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => closeMenu()}
                className="group relative flex min-h-11 items-center rounded-lg px-3 py-2 transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none"
              >
                <div className="absolute left-0 flex w-4 items-center justify-center">
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
                    'text-[clamp(0.95rem,1.2vw,1.15rem)] tracking-widest uppercase transition-all duration-300',
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

        <div className="text-text-secondary flex flex-col gap-1 text-sm">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${link.name} profile in new tab`}
                  className="group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none"
                >
                  <Icon className="text-text-secondary group-hover:text-accent h-5 w-5 transition-colors duration-200" />
                  <span className="text-text-secondary group-hover:text-accent font-mono text-sm transition-colors duration-200">
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
