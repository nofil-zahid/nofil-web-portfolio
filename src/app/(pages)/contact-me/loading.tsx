import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function ContactLoading() {
  return (
    <section>
      <SectionHeaderSkeleton />

      <div className="mt-[clamp(2rem,5vh,4rem)] flex flex-col-reverse items-start gap-[clamp(3rem,8vw,6rem)] lg:flex-row">
        <div className="order-2 w-full flex-1 lg:order-1">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="skeleton-pulse mb-2 h-3.5 w-16" />
                <div className="skeleton-pulse h-12 w-full rounded-lg" />
              </div>
            </div>

            <div>
              <div className="skeleton-pulse mb-2 h-3.5 w-20" />
              <div className="skeleton-pulse h-12 w-full rounded-lg" />
            </div>

            <div>
              <div className="skeleton-pulse mb-2 h-3.5 w-20" />
              <div className="skeleton-pulse h-32 w-full rounded-lg" />
            </div>

            <div className="skeleton-pulse h-12 w-40 rounded-lg" />
          </div>
        </div>

        <div className="sticky top-24 order-1 w-full lg:order-2 lg:w-[clamp(350px,30vw,420px)]">
          <div className="rounded-xl border border-white/5 bg-[#061a0a]/50 p-6">
            {/* Avatar */}
            <div className="skeleton-pulse mx-auto mb-4 h-20 w-20 rounded-full" />

            {/* Name */}
            <div className="skeleton-pulse mx-auto mb-2 h-5 w-32" />

            {/* Title */}
            <div className="skeleton-pulse mx-auto mb-6 h-4 w-40" />

            {/* Contact info items */}
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="skeleton-pulse h-8 w-8 rounded-lg" />
                  <div className="skeleton-pulse h-4 w-40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
