export const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-8">
    <div className="mb-1 flex items-center gap-2">
      <span className="bg-accent h-2 w-2 shadow-[0_0_8px_var(--color-accent)]" />
      <h2 className="text-accent font-mono text-xs font-bold tracking-[0.3em] uppercase">{subtitle}</h2>
    </div>
    <h3 className="text-3xl font-black tracking-tighter text-white uppercase">{title}</h3>
  </div>
);
