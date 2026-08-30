'use client';
import { navLinks } from '@/constants/links';
import { cn } from '@/styles/tailwind-utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-end">
      {navLinks.slice(1).map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'group relative flex items-center font-mono leading-none tracking-tighter transition-all duration-300',
              'px-[clamp(0.35rem,0.8vw,1.25rem)] py-[clamp(0.5rem,0.9vw,0.875rem)]',
              'gap-[clamp(0.25rem,0.5vw,0.5rem)] text-[clamp(9px,0.75vw,12px)]',
              'rounded-t-lg border-t border-r border-l',
              isActive
                ? 'bg-background-primary text-accent border-border-glow z-10 translate-y-px'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary/50 border-transparent',
            )}
          >
            <span
              className={cn(
                'hidden opacity-40 transition-opacity group-hover:opacity-100 xl:inline',
                isActive && 'opacity-100',
              )}
            >
              _
            </span>

            <span className="whitespace-nowrap">{link.name}</span>

            <span className="ml-0.5 hidden text-[8px] opacity-0 group-hover:opacity-30 xl:inline">x</span>
          </Link>
        );
      })}
    </nav>
  );
};
