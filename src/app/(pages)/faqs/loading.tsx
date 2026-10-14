import SectionHeaderSkeleton from '@/components/shared/SectionHeaderSkeleton';

export default function FaqsLoading() {
  return (
    <section className="mx-auto max-w-4xl px-4">
      <SectionHeaderSkeleton noOfDescriptionLines={3} />

      {/* FAQ accordion bar skeletons - constrained & centered */}
      <div className="mx-auto space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-white/5 bg-[#061a0a]/50 p-5">
            <div className="flex items-center justify-between">
              <div className="skeleton-pulse h-5 w-[clamp(12rem,40vw,24rem)]" />
              <div className="skeleton-pulse h-5 w-5 rounded-sm" />
            </div>
          </div>
        ))}
      </div>

      {/* Contact footer skeleton - also centered with matching width */}
      <div className="mx-auto mt-16 max-w-xl rounded-xl border border-white/5 bg-[#061a0a]/50 p-8 text-center">
        <div className="skeleton-pulse mx-auto mb-3 h-6 w-48" />
        <div className="skeleton-pulse mx-auto mb-6 h-4 w-64" />
        <div className="skeleton-pulse mx-auto h-12 w-40 rounded-lg" />
      </div>
    </section>
  );
}
