import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';
import { numberOfProjects } from '@/constants/projects';

export default function ProjectsLoading() {
  return (
    <section>
      <SectionHeaderSkeleton />

      {/* Grid layout matching 3 columns on large screens */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {Array.from({ length: numberOfProjects }).map((_, i) => (
          <div
            key={i}
            className="bg-background-secondary/80 relative flex h-[640px] flex-col justify-between overflow-hidden rounded-[clamp(1rem,2vw,1.5rem)] border border-[#2a3c30] p-[clamp(1.2rem,3vw,2rem)]"
          >
            <div>
              {/* Preview Thumbnail Banner (matched to live image height) */}
              <div className="skeleton-pulse mb-6 h-40 w-full rounded-lg" />

              {/* Title and Top-right Action Icons Row */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="skeleton-pulse h-7 w-3/4 rounded-none" />
                <div className="flex shrink-0 gap-2">
                  <div className="skeleton-pulse h-5 w-5 rounded-none" />
                  <div className="skeleton-pulse h-5 w-5 rounded-none" />
                </div>
              </div>

              {/* Description Paragraph Lines */}
              <div className="mb-6 space-y-2.5">
                <div className="skeleton-pulse h-4 w-full rounded-none" />
                <div className="skeleton-pulse h-4 w-11/12 rounded-none" />
                <div className="skeleton-pulse h-4 w-4/5 rounded-none" />
              </div>
            </div>

            {/* Tech Stack Tags Footer */}
            <div className="flex flex-wrap gap-2 border-t border-[#2a3c30]/50 pt-4">
              {Array.from({ length: 3 }).map((_, j) => (
                <div key={j} className="skeleton-pulse h-6 w-16 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
