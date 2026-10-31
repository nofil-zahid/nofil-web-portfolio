export default function ProjectDetailLoading() {
  return (
    <section>
      {/* Back navigation skeleton */}
      <div className="skeleton-pulse mb-8 h-4 w-24" />

      {/* Project title */}
      <div className="skeleton-pulse mb-4 h-8 w-64" />

      {/* Project description */}
      <div className="mb-8 space-y-2">
        <div className="skeleton-pulse h-4 w-full" />
        <div className="skeleton-pulse h-4 w-5/6" />
        <div className="skeleton-pulse h-4 w-3/4" />
      </div>

      {/* Screenshot placeholder */}
      <div className="skeleton-pulse mb-8 h-64 w-full rounded-xl" />

      {/* Content body */}
      <div className="space-y-3">
        <div className="skeleton-pulse h-4 w-full" />
        <div className="skeleton-pulse h-4 w-full" />
        <div className="skeleton-pulse h-4 w-4/5" />
        <div className="skeleton-pulse h-4 w-full" />
        <div className="skeleton-pulse h-4 w-2/3" />
      </div>
    </section>
  );
}
