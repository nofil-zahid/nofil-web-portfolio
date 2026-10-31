import Link from 'next/link';
import { PROFILE } from '@/constants/profile';
import { socialLinks } from '@/constants/links';

export default function Footer() {
  return (
    <footer className="border-border-glow bg-background-secondary/40 mt-16 border-t py-3 font-mono text-xs text-slate-400">
      <div className="flex flex-col items-center justify-between gap-4 px-[clamp(1.2rem,3vw,2.5rem)] md:flex-row">
        <div className="hidden items-center gap-2 md:flex">
          <span
            className="bg-accent h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_var(--color-accent)]"
            aria-hidden="true"
          />
          <span className="text-slate-300">
            SYSTEM STATUS: <span className="text-accent font-bold">OPERATIONAL</span>
          </span>
        </div>
        <p className="text-center text-slate-400">
          &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <nav aria-label="Footer Social Links" className="hidden items-center gap-4 md:flex">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name} profile in new tab`}
              className="hover:text-accent focus-visible:ring-accent rounded px-1 text-slate-400 transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
