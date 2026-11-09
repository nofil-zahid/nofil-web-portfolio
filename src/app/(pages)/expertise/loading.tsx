import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function ExpertiseLoading() {
  return (
    <section>
      {/* Primary Section Header Skeleton */}
      <SectionHeaderSkeleton noOfDescriptionLines={2} />

      {/* Main 2-column Expertise Cards Grid Skeleton */}
      <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {Array.from({ length: 5 }).map((_, cardIdx) => (
          <div
            key={cardIdx}
            className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#061a0a]/60 p-6 md:p-8"
          >
            <div>
              {/* Card ID Header */}
              <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="skeleton-pulse h-3.5 w-3.5 rounded-sm" />
                  <div className="skeleton-pulse h-3 w-10 rounded-sm" />
                </div>
              </div>

              {/* Title & Icon */}
              <div className="mb-3 flex items-center gap-2.5">
                <div className="skeleton-pulse h-5 w-5 shrink-0 rounded md:h-6 md:w-6" />
                <div className="skeleton-pulse h-6 w-3/4 rounded md:h-7" />
              </div>

              {/* Problem Statement */}
              <div className="mb-6 space-y-2">
                <div className="skeleton-pulse h-4 w-full" />
                <div className="skeleton-pulse h-4 w-5/6" />
              </div>

              {/* Engineering Outcomes */}
              <div className="mb-6">
                <div className="skeleton-pulse mb-3 h-3 w-32" />
                <div className="space-y-2.5">
                  {Array.from({ length: 4 }).map((_, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5">
                      <div className="skeleton-pulse mt-0.5 h-4 w-4 shrink-0 rounded-full" />
                      <div className="skeleton-pulse h-4 w-11/12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Tech Stack Chips */}
            <div className="mt-auto border-t border-white/5 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 5 }).map((_, chipIdx) => (
                  <div key={chipIdx} className="skeleton-pulse h-6 w-20 rounded-md" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Technical Inventory Skeleton */}
      <div className="mb-8 border-t border-white/10 pt-12">
        <div className="skeleton-pulse mb-2 h-7 w-52 md:h-8 md:w-64" />
        <div className="skeleton-pulse h-4 w-3/4 max-w-md" />
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, catIdx) => (
          <div key={catIdx} className="rounded-xl border border-white/5 bg-[#061a0a]/30 p-5">
            <div className="skeleton-pulse mb-4 h-4 w-36 border-b border-white/5 pb-2" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, skillIdx) => (
                <div key={skillIdx} className="skeleton-pulse h-6 w-24 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend Footer */}
      <div className="mt-6 flex items-center justify-end gap-4">
        <div className="flex items-center gap-1.5">
          <div className="skeleton-pulse h-2 w-2 rounded-full" />
          <div className="skeleton-pulse h-3 w-32" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="skeleton-pulse h-2 w-2 rounded-full" />
          <div className="skeleton-pulse h-3 w-32" />
        </div>
      </div>
    </section>
  );
}
