import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function ExperienceLoading() {
  return (
    <section>
      <SectionHeaderSkeleton noOfDescriptionLines={3} />

      {/* Base Track Line matching your actual component */}
      <div
        className="absolute top-0 bottom-0 left-[calc(1.5rem)] w-0.5 -translate-x-1/2 bg-[#2a3c30]/40 md:left-1/2"
        aria-hidden="true"
      />

      {/* Timeline Stations */}
      <div className="mt-8 space-y-[clamp(2.5rem,6vw,5rem)] md:space-y-[clamp(4rem,8vw,7rem)]">
        {Array.from({ length: 3 }).map((_, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index} className="relative flex flex-col items-start justify-between md:flex-row md:items-center">
              {/* --- Timeline Station Node Box --- */}
              <div className="bg-background-primary border-accent/40 text-accent absolute left-[calc(1.5rem)] z-10 flex h-[clamp(32px,4vw,40px)] w-[clamp(32px,4vw,40px)] -translate-x-1/2 items-center justify-center rounded-lg border shadow-[0_0_15px_rgba(13,242,89,0.3)] md:left-1/2">
                {/* Corner Bracket Details */}
                <span className="border-accent/70 absolute top-0.5 left-0.5 h-1 w-1 border-t border-l" />
                <span className="border-accent/70 absolute right-0.5 bottom-0.5 h-1 w-1 border-r border-b" />

                {/* Pulsing Node Icon Skeleton */}
                <div className="skeleton-pulse h-4 w-4 rounded-none" />
              </div>

              {/* --- Experience Card Skeleton (Alternating Even/Odd) --- */}
              <div
                className={`w-full pl-[clamp(3rem,6vw,4rem)] md:w-[calc(50%-clamp(2rem,6vw,4rem))] md:pl-0 ${
                  isEven ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="bg-background-secondary/80 w-full rounded-[clamp(1rem,2vw,1.5rem)] border border-[#2a3c30] p-[clamp(1.2rem,3vw,2rem)]">
                  {/* Header Skeleton */}
                  <div className="mb-[clamp(1rem,3vw,1.5rem)] space-y-2">
                    <div className="skeleton-pulse h-[clamp(1.1rem,3vw,1.7rem)] w-3/4 rounded-none" />
                    <div className="skeleton-pulse h-4 w-32 rounded-none" />
                    <div className="skeleton-pulse h-6 w-48 rounded-md" />
                  </div>

                  {/* Responsibilities list skeleton */}
                  <div className="space-y-[clamp(.7rem,2vw,1.2rem)]">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="flex items-start gap-[clamp(.5rem,2vw,.8rem)]">
                        <div className="skeleton-pulse mt-1 h-4 w-4 shrink-0 rounded-none" />
                        <div className="skeleton-pulse h-4 w-full rounded-none" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
