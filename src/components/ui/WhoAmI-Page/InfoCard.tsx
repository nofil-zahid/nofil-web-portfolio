export const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="border-l border-white/10 pl-4 py-2 hover:border-accent/50 transition-colors group">
    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-accent/70">
      {label}
    </p>
    <p className="text-sm sm:text-base text-text-primary font-mono font-medium">
      {value}
    </p>
  </div>
);