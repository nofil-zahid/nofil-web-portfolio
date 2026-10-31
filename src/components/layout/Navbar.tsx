'use client';
import { navLinks } from '@/constants/links';
import { cn } from '@/styles/tailwind-utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav aria-label="Desktop Navigation" className="flex items-end">
      {navLinks.slice(1).map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              'group relative flex min-h-[44px] items-center font-mono leading-none tracking-tighter transition-all duration-300',
              'px-[clamp(0.5rem,1vw,1.25rem)] py-2.5',
              'gap-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(10px,0.8vw,12.5px)]',
              'rounded-t-lg border-t border-r border-l',
              'focus-visible:ring-2 focus-visible:ring-[#00FF66] focus-visible:outline-none',
              isActive
                ? 'bg-background-primary text-accent border-border-glow z-10 translate-y-px shadow-[0_-2px_10px_rgba(13,242,89,0.1)]'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary/70 border-transparent',
            )}
          >
            <span
              className={cn(
                'text-accent hidden opacity-70 transition-opacity group-hover:opacity-100 xl:inline',
                isActive && 'opacity-100',
              )}
            >
              _
            </span>

            <span className="whitespace-nowrap">{link.name}</span>

            <span className="ml-0.5 hidden text-[8px] opacity-0 group-hover:opacity-50 xl:inline">x</span>
          </Link>
        );
      })}
    </nav>
  );
};
