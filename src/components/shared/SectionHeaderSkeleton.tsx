interface SectionHeaderSkeletonProps {
  noOfDescriptionLines?: number;
}

const SectionHeaderSkeleton = ({ noOfDescriptionLines = 2 }: SectionHeaderSkeletonProps) => {
  return (
    <div className="mb-14 flex w-full max-w-3xl flex-col items-start text-left">
      {/* Tag badge skeleton */}
      <div className="mb-6 flex items-center font-mono">
        <span className="skeleton-pulse mr-2 h-3 w-6 opacity-40" />
        <div className="flex items-center border-l border-[rgba(13,242,89,0.6)] px-2.5 py-1">
          <span className="skeleton-pulse h-3 w-28" />
        </div>
      </div>

      {/* Title skeleton */}
      <div className="relative mb-4 w-fit">
        <div className="flex items-center">
          <span className="skeleton-pulse mr-3 h-4 w-3 opacity-20" />
          <div className="skeleton-pulse h-[clamp(1.75rem,4vw,2.75rem)] w-[clamp(14rem,30vw,22rem)]" />
        </div>
        <div className="mt-1.5 h-px w-16 bg-gradient-to-r from-[rgba(13,242,89,0.3)] via-[rgba(13,242,89,0.05)] to-transparent" />
      </div>

      {/* Description skeleton */}
      <div className="relative mt-1 flex items-start gap-3">
        <div className="flex flex-col border-r border-white/5 pt-1.5 pr-3 font-mono text-[9px]">
          <span className="skeleton-pulse h-2.5 w-4 opacity-15" />
          <span className="skeleton-pulse mt-1 h-2.5 w-4 opacity-15" />
        </div>
        <div className="max-w-xl space-y-2">
          {Array.from({ length: noOfDescriptionLines }).map((_, i) => (
            <div key={i} className="skeleton-pulse h-[clamp(0.95rem,1.2vw,1.125rem)] w-[clamp(16rem,40vw,32rem)]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionHeaderSkeleton;
