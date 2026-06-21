export const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="hover:border-accent/50 group border-l border-white/10 py-2 pl-4 transition-colors">
    <p className="group-hover:text-accent/70 text-[9px] font-bold tracking-widest text-gray-500 uppercase sm:text-[10px]">
      {label}
    </p>
    <p className="text-text-primary font-mono text-sm font-medium sm:text-base">{value}</p>
  </div>
);
