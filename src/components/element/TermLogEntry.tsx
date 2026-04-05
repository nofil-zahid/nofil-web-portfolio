import { cn } from '@/styles/tailwind-utils';

const TermLogEntry = ({ text, active }: { text: string; active: boolean }) => {
  const stamp = '0.434.334';
  return (
    <div
      className={cn(
        'text-[9px] md:text-[11px] font-mono transition-all duration-500 flex gap-2 md:gap-4 items-center',
        active ? 'opacity-100 text-accent translate-x-0' : 'opacity-0 -translate-x-2',
      )}
    >
      <span className="opacity-30 shrink-0">[{stamp}]</span>
      <span className="truncate">
        {active ? <span className="mr-1 inline-block animate-pulse">»</span> : ''} {text}
      </span>
    </div>
  );
};

export default TermLogEntry;
