import { cn } from '@/styles/tailwind-utils';

const TermLogEntry = ({ text, active }: { text: string; active: boolean }) => {
  const stamp = '0.434.334';
  return (
    <div
      className={cn(
        'flex items-center gap-2 font-mono text-[9px] transition-all duration-500 md:gap-4 md:text-[11px]',
        active ? 'text-accent translate-x-0 opacity-100' : '-translate-x-2 opacity-0',
      )}
    >
      <span className="shrink-0 opacity-30">[{stamp}]</span>
      <span className="truncate">
        {active ? <span className="mr-1 inline-block animate-pulse">»</span> : ''} {text}
      </span>
    </div>
  );
};

export default TermLogEntry;
