import { cn } from '@/styles/tailwind-utils';
import { ProgressBarProps } from '@/types/components';

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const TOTAL_SEGMENTS = 30;
  const activeSegments = Math.floor((progress / 100) * TOTAL_SEGMENTS);

  return (
    <div className="flex flex-col w-full font-mono mt-4">
      <div className="flex justify-between items-center mb-2.5 text-[9px] font-medium uppercase tracking-[0.3em] text-gray-700 select-none">
        <span>SECTOR_001</span>
        <span>SECTOR_256</span>
      </div>

      <div
        className="relative p-[1.5px] rounded-[3px] border border-accent/20"
        style={{
          boxShadow: '0 0 15px -1px rgba(13, 242, 89, 0.2), inset 0 0 10px -2px rgba(13, 242, 89, 0.1)',
        }}
      >
        <div className="flex gap-[3.5px] w-full h-[40px]">
          {Array.from({ length: TOTAL_SEGMENTS }).map((_, i) => {
            const isActive = i < activeSegments;
            return (
              <div
                key={i}
                className={cn(
                  'flex-1 rounded-[1.5px] relative overflow-hidden transition-all duration-300 ease-out',
                  isActive ? 'bg-accent/90 shadow-[inset_0_0_8px_#b3fdb3]' : 'bg-accent/3 border border-accent/10',
                )}
              >
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 50%, transparent 50%)',
                    backgroundSize: '100% 3px',
                    mixBlendMode: 'multiply',
                  }}
                />
                {isActive && <div className="absolute inset-0 bg-accent/20 blur-[2.5px] -z-10" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
