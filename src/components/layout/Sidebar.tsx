'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X, SquareTerminal, ChevronLeft } from 'lucide-react';
import { useBooleanToggle } from '@/hooks/core/use-boolean-toggle';
import { navLinks, socialLinks } from '@/constants/links';
import { containerVariants, itemVariants } from '@/styles/motion-framer-utils';
import { cn } from '@/styles/tailwind-utils';
import { useInitialLoading } from '@/hooks/context/loading';
import { useRouter } from 'next/navigation';
import { routes } from '@/constants/routes';
import TerminalUI from '../shared/TerminalUI';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { state: isOpen, toggle } = useBooleanToggle();
  const { state: isTerminalOpen, toggle: toggleTerminal } = useBooleanToggle();

  const { hasLoaded } = useInitialLoading();
  if (!hasLoaded) return null;

  const handleTerminalIconClick = () => {
    toggleTerminal();
  };

  return (
    <>
      {/* Sidebar Navigation Strip Container */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
        className={cn(
          'bg-background-secondary border-border-glow fixed top-0 right-0 left-0 z-50 flex h-[clamp(60px,8vw,70px)] flex-row items-center justify-between px-6 transition-all duration-300',
          'md:top-0 md:left-0 md:flex md:h-screen md:w-[clamp(60px,6vw,90px)] md:flex-col md:border-r md:px-0 md:py-[clamp(1rem,3vh,2rem)]',
          // Desktop Only: Slide the core tab alongside the layout transition when terminal triggers
          isTerminalOpen && 'md:translate-x-[95vw]',
        )}
      >
        <button
          onClick={() => toggle()}
          className="text-accent cursor-pointer text-[clamp(1.5rem,2vw,2rem)] transition hover:scale-110 md:hidden"
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
          onClick={handleTerminalIconClick}
          className={cn(
            'text-accent flex hidden -translate-y-1 cursor-pointer items-center justify-center rounded-xl p-2 md:block md:-translate-y-3',
            'border border-transparent bg-transparent transition-all duration-300 ease-out',
            'hover:border-accent/20 hover:scale-105 hover:bg-[#061a0a]',
            'hover:shadow-[0_0_15px_rgba(13,242,89,0.25)]',
            'active:bg-accent/10 active:scale-95',
            'focus-visible:ring-accent/50 focus:outline-none focus-visible:ring-2',
            isTerminalOpen && 'border-accent/20 scale-105 bg-[#061a0a] shadow-[0_0_15px_rgba(13,242,89,0.25)]',
          )}
          aria-label="Open Terminal"
        >
          {!isTerminalOpen ? (
            <SquareTerminal size={40} className="transition-transform duration-300" />
          ) : (
            <ChevronLeft size={30} className="transition-transform duration-300" />
          )}
        </button>
        <div className="block w-5 md:hidden" />
      </motion.div>

      {/* Desktop Terminal Flyout Drawer Layer (70% width) */}
      <AnimatePresence>
        {isTerminalOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="border-border-glow bg-background-primary fixed inset-y-0 left-0 z-45 hidden h-screen w-[95vw] border-r md:block"
          >
            <TerminalUI />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Drawer (Mobile Dropdown View Overlay) */}
      {/* CHANGED: z-30 replaced with z-45 to safely layer completely above the Topbar (z-40) */}
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
                      className="bg-accent h-6 w-[2px] shadow-[0_0_12px_rgba(13,242,89,0.8)]"
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

        <motion.div
          className="text-text-secondary flex flex-col gap-3 text-sm"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div key={link.name} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="group flex items-center gap-2 transition-colors duration-200"
                >
                  <Icon className="text-text-secondary group-hover:text-accent h-4 w-4 transition-colors duration-200" />
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-text-secondary group-hover:text-accent font-mono transition-colors duration-200"
                  >
                    {link.name}
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </aside>
    </>
  );
}
