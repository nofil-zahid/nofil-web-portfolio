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
              'group relative flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-tighter transition-all duration-300',
              'rounded-t-lg border-t border-r border-l border-transparent',
              isActive
                ? 'bg-background-primary text-accent border-border-glow z-10 translate-y-px'
                : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary/50',
            )}
          >
            <span className={cn('opacity-40 transition-opacity group-hover:opacity-100', isActive && 'opacity-100')}>
              _
            </span>
            {link.name}
            <span className="ml-2 text-[8px] opacity-0 group-hover:opacity-30">x</span>
          </Link>
        );
      })}
    </nav>
  );
};
