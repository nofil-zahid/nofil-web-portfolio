import { cn } from '@/styles/tailwind-utils';
import { ProgressBarProps } from '@/types/components';

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const TOTAL_SEGMENTS = 30;
  const activeSegments = Math.floor((progress / 100) * TOTAL_SEGMENTS);

  return (
    <div className="mt-4 flex w-full flex-col font-mono">
      <div className="mb-2.5 flex items-center justify-between text-[9px] font-medium tracking-[0.3em] text-gray-700 uppercase select-none">
        <span>SECTOR_001</span>
        <span>SECTOR_256</span>
      </div>

      <div
        className="border-accent/20 relative rounded-[3px] border p-[1.5px]"
        style={{
          boxShadow: '0 0 15px -1px rgba(13, 242, 89, 0.2), inset 0 0 10px -2px rgba(13, 242, 89, 0.1)',
        }}
      >
        <div className="flex h-[40px] w-full gap-[3.5px]">
          {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
            const isActive = i < activeSegments;
            return (
              <div
                key={i}
                className={cn(
                  'relative flex-1 overflow-hidden rounded-[1.5px] transition-all duration-300 ease-out',
                  isActive ? 'bg-accent/90 shadow-[inset_0_0_8px_#b3fdb3]' : 'bg-accent/3 border-accent/10 border',
                )}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 50%, transparent 50%)',
                    backgroundSize: '100% 3px',
                    mixBlendMode: 'multiply',
                  }}
                />
                {isActive && <div className="bg-accent/20 absolute inset-0 -z-10 blur-[2.5px]" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
