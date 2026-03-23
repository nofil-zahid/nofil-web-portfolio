export const SectionHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 bg-accent shadow-[0_0_8px_var(--color-accent)]" />
      <h2 className="text-accent font-mono text-xs uppercase tracking-[0.3em] font-bold">
        {subtitle}
      </h2>
    </div>
    <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
      {title}
    </h3>
  </div>
);
