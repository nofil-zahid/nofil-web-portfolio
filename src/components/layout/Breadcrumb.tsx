'use client';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { routes } from '@/constants/routes';
import { TERMINAL_PROMPT } from '@/constants/terminal';
import Link from 'next/link';

const Breadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
    >
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center overflow-x-auto font-mono whitespace-nowrap text-green-500/80">
          <li className="flex items-center">
            <Link
              className="focus-visible:ring-accent mr-1 cursor-pointer text-[clamp(0.75rem,2vw,1rem)] transition-all hover:text-green-500 hover:underline focus-visible:ring-1 focus-visible:outline-none"
              href={routes.root}
            >
              {TERMINAL_PROMPT}
            </Link>
          </li>

          {segments.map((segment, index) => {
            const urlPath = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;
            return (
              <li key={urlPath} className="flex items-center text-[clamp(0.75rem,2vw,1rem)]">
                <span className="mx-0.5 text-gray-500" aria-hidden="true">
                  ./
                </span>
                {isLast ? (
                  <span className="text-text-primary font-medium" aria-current="page">
                    {segment}
                  </span>
                ) : (
                  <Link
                    href={urlPath}
                    className="text-text-secondary hover:text-text-primary decoration-accent/30 focus-visible:ring-accent underline-offset-4 hover:underline focus-visible:ring-1 focus-visible:outline-none"
                  >
                    {segment}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </motion.div>
  );
};

export default Breadcrumb;
