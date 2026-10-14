import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function ExpertiseLoading() {
  return (
    <section>
      <SectionHeaderSkeleton noOfDescriptionLines={4} />

      {/* 3-column card grid skeleton matching ExpertiseCard layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-white/5 bg-[#061a0a]/50 p-6">
            {/* Category icon + title */}
            <div className="mb-5 flex items-center gap-3">
              <div className="skeleton-pulse h-10 w-10 rounded-lg" />
              <div className="skeleton-pulse h-5 w-28" />
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="skeleton-pulse h-7 w-20 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
