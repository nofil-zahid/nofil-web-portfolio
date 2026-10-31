const HomeLoadingSkeleton = () => {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center">
      <div className="z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
        {/* Introduction skeleton */}
        <div className="order-1 flex w-full flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center lg:items-start">
            {/* Hero title — "Full Stack &" */}
            <div className="flex flex-col leading-[0.9]">
              <div className="skeleton-pulse h-[clamp(2.5rem,9vw,5.5rem)] w-[clamp(14rem,45vw,30rem)]" />
              {/* Hero title — "DevOps Engineer" */}
              <div className="skeleton-pulse mt-2 h-[clamp(2.5rem,9vw,5.5rem)] w-[clamp(16rem,50vw,34rem)]" />
            </div>

            {/* Paragraph — fixed wrapper width for lines */}
            <div className="mt-6 w-full max-w-3xl space-y-2.5">
              <div className="skeleton-pulse h-[clamp(0.95rem,1.2vw,1.1rem)] w-full" />
              <div className="skeleton-pulse h-[clamp(0.95rem,1.2vw,1.1rem)] w-11/12" />
              <div className="skeleton-pulse h-[clamp(0.95rem,1.2vw,1.1rem)] w-3/4" />
            </div>

            {/* Buttons */}
            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              <div className="skeleton-pulse h-12 w-full rounded-lg sm:w-36 lg:w-36" />
              <div className="skeleton-pulse h-12 w-full rounded-lg sm:w-40 lg:w-40" />
            </div>
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="order-2 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-center sm:gap-10 lg:mt-0 lg:w-auto lg:flex-col lg:items-end lg:justify-start lg:gap-10 lg:border-t-0 lg:border-r lg:pt-0 lg:pr-8 lg:text-right">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center lg:items-end">
              <div className="skeleton-pulse mb-1 h-[clamp(1.75rem,4vw,2.75rem)] w-20" />
              <div className="skeleton-pulse h-2.5 w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLoadingSkeleton;
