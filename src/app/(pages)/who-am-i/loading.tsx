import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function WhoAmILoading() {
  return (
    <section>
      {/* Header + Avatar row */}
      <div className="mb-20 grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:pr-30">
        <SectionHeaderSkeleton noOfDescriptionLines={4} />

        {/* Avatar skeleton */}
        <div className="flex justify-center justify-self-center lg:justify-end lg:justify-self-end">
          <div className="skeleton-pulse h-[240px] w-[240px] rounded-full lg:h-[260px] lg:w-[260px]" />
        </div>
      </div>

      {/* Two-column content grid */}
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left column — Overview + Philosophy */}
        <div className="space-y-12 lg:col-span-7">
          {/* Overview section */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="skeleton-pulse h-5 w-24" />
              <div className="skeleton-pulse h-3 w-28 opacity-40" />
            </div>
            <div className="space-y-4">
              <div className="skeleton-pulse h-4 w-full" />
              <div className="skeleton-pulse h-4 w-full" />
              <div className="skeleton-pulse h-4 w-5/6" />
              <div className="skeleton-pulse h-4 w-full" />
              <div className="skeleton-pulse h-4 w-3/4" />
            </div>
          </div>

          {/* Philosophy section */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="skeleton-pulse h-5 w-40" />
              <div className="skeleton-pulse h-3 w-32 opacity-40" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/5 bg-[#061a0a]/50 p-6">
                  <div className="skeleton-pulse mb-2 h-5 w-32" />
                  <div className="skeleton-pulse h-3 w-full" />
                  <div className="skeleton-pulse mt-1 h-3 w-4/5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Professional Overview + Quote */}
        <div className="space-y-12 lg:col-span-5">
          {/* Professional Overview card */}
          <div className="rounded-2xl border border-white/5 bg-[#061a0a]/80 p-5 md:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="skeleton-pulse h-5 w-36" />
              <div className="skeleton-pulse h-3 w-24 opacity-40" />
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 pr-8 md:pr-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <div className="skeleton-pulse mb-1 h-3 w-20 opacity-50" />
                  <div className="skeleton-pulse h-5 w-24" />
                </div>
              ))}
            </div>
          </div>

          {/* Quote blockquote skeleton */}
          <div className="min-h-[140px] rounded-r-xl border-l-4 border-[#0df259] bg-[#061a0a]/30 p-5">
            <div className="space-y-2 pb-4">
              <div className="skeleton-pulse h-4 w-full" />
              <div className="skeleton-pulse h-4 w-5/6" />
            </div>
            <div className="flex items-center justify-between border-t border-white/5 pt-3">
              <div className="skeleton-pulse h-3 w-36" />
              <div className="skeleton-pulse h-7 w-20 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
