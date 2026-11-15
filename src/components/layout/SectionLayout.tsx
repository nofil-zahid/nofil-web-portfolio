import { cn } from '@/styles/tailwind-utils';
import { Children, Fragment, type ReactNode } from 'react';

const Separator = () => <hr className="my-4 border-t border-gray-600/30" />;

export default function SectionLayout({ children, className }: { children: ReactNode; className?: string }) {
  const sections = Children.toArray(children);

  return (
    <main className={cn('flex flex-col gap-8', className)}>
      {sections.map((section, index) => (
        <Fragment key={index}>
          {index > 0 && <Separator />}
          {section}
        </Fragment>
      ))}
    </main>
  );
}
