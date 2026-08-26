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
              'group relative flex items-center gap-1.5 px-2 py-3 font-mono text-[10px] tracking-tighter transition-all duration-300 lg:gap-2 lg:px-4 lg:text-xs xl:px-6',
              'rounded-t-lg border-t border-r border-l border-transparent',
              isActive
                ? 'bg-background-primary text-accent border-border-glow z-10 translate-y-px'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary/50',
            )}
          >
            <span
              className={cn(
                'hidden opacity-40 transition-opacity group-hover:opacity-100 lg:inline',
                isActive && 'opacity-100',
              )}
            >
              _
            </span>
            {link.name}
            <span className="ml-1 hidden text-[8px] opacity-0 group-hover:opacity-30 lg:ml-2 lg:inline">x</span>
          </Link>
        );
      })}
    </nav>
  );
};
