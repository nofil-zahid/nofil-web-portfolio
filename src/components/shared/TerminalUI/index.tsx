// TerminalUI.tsx

export default function TerminalUI() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#030f06] p-6 font-mono select-none md:p-10">
      {/* Subtle CRT matrix screen lines overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0df259_1px,transparent_1px),linear-gradient(to_bottom,#0df259_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02]" />

      {/* Terminal Title Bar */}
      <div className="border-accent/20 text-accent/70 mb-4 flex items-center justify-between border-b pb-3 text-xs tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span>Core Terminal Sessions v4.0</span>
        </div>
        <span className="text-[10px] opacity-40">TTY_0x9F</span>
      </div>

      {/* Terminal Window View Area */}
      <div className="terminal-scrollbar text-text-primary flex flex-1 flex-col gap-2 overflow-y-auto text-sm">
        <div className="text-accent/40 text-xs">Initializing Secure Environment Connection...</div>
        <div className="flex items-center gap-2">
          <span className="text-accent font-bold">$&gt;</span>
          <span className="text-text-primary">systemctl status profile-core</span>
        </div>
        <div className="text-accent pl-4 text-xs font-semibold">● Stack: Next.js 15 / TypeScript / Tailwind CSS v4</div>

        {/* Active cursor tracking simulation */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-accent font-bold">$&gt;</span>
          <span className="bg-accent inline-block h-4 w-2 animate-[blink_0.8s_infinite]" />
        </div>
      </div>
    </div>
  );
}
