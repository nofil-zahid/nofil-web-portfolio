import { useState, useRef, useEffect } from 'react';
import ExecutionResult from './ExecutionResult';
import BlinkingCursor from '@/components/element/BlinkingCursor';

export interface TerminalEntry {
  command: string;
  timestamp: string;
}

export default function TerminalUI() {
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [terminalHistory, isProcessing, terminalInput]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || document.activeElement === inputRef.current) {
        return;
      }

      if (e.key.length === 1 || e.key === 'Backspace') {
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleEnterCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed || isProcessing) return;

    setTerminalInput('');

    if (trimmed.toLowerCase() === 'clear') {
      setTerminalHistory([]);
      return;
    }

    setIsProcessing(true);

    const now = new Date();
    const timestamp = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    setTimeout(() => {
      setTerminalHistory((prev) => [...prev, { command: trimmed, timestamp }]);
      setIsProcessing(false);
    }, 300);
  };

  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden bg-[#030f06] p-6 font-mono select-none md:p-10"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0df259_1px,transparent_1px),linear-gradient(to_bottom,#0df259_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02]" />

      <div className="border-accent/20 text-accent/70 mb-4 flex items-center justify-between border-b pb-3 text-xs tracking-wider uppercase">
        <div className="flex items-center gap-2">
          <span className="bg-accent h-2 w-2 animate-pulse rounded-full" />
          <span>Core Terminal Sessions v4.0</span>
        </div>
        <span className="text-[10px] opacity-40">TTY_0x9F</span>
      </div>

      <div
        ref={scrollContainerRef}
        className="terminal-scrollbar text-text-primary flex flex-1 flex-col gap-3 overflow-y-auto pr-2 text-sm"
      >
        <div className="text-accent/40 text-xs">Initializing Secure Environment Connection...</div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">$&gt;</span>
            <span className="text-text-primary">systemctl status profile-core</span>
          </div>
          <div className="text-accent mt-1 pl-4 text-xs font-semibold">
            ● Stack: Next.js 15 / TypeScript / Tailwind CSS v4
          </div>
          <div className="text-text-secondary mt-1 pl-4 text-xs">
            Type <span className="text-accent font-bold">&lsquo;help&lsquo;</span> to view available shell commands.
          </div>
        </div>
        {terminalHistory.map((entry, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold">$&gt;</span>
              <span className="text-text-primary">{entry.command}</span>
              <span className="text-text-secondary ml-auto text-[10px] opacity-40">[{entry.timestamp}]</span>
            </div>
            <ExecutionResult command={entry.command} />
          </div>
        ))}

        {isProcessing && (
          <div className="text-accent/60 flex items-center gap-2 py-1 text-xs">
            <span className="bg-accent inline-block h-2 w-2 animate-ping rounded-full" />
            <span>Executing command...</span>
          </div>
        )}

        <div className="relative mt-2 flex items-center gap-2">
          <span className="text-accent font-bold">$&gt;</span>

          <div className="relative flex flex-1 items-center">
            <input
              ref={inputRef}
              type="text"
              name="terminal-input"
              id="terminal-input"
              value={terminalInput}
              disabled={isProcessing}
              autoComplete="off"
              spellCheck="false"
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEnterCommand(terminalInput);
                }
              }}
              className="text-text-primary absolute inset-0 z-10 w-full border-none bg-transparent font-mono text-sm caret-transparent outline-none"
            />

            <div className="text-text-primary pointer-events-none flex items-center font-mono text-sm">
              <span className="whitespace-pre">{terminalInput}</span>
              <BlinkingCursor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
