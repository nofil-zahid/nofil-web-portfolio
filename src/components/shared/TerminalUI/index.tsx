'use client';

import { useState, useRef, useEffect, SyntheticEvent } from 'react';
import { executeTerminalCommand } from './ExecutionResult';
import BlinkingCursor from '@/components/element/BlinkingCursor';
import { getStoredFS, saveFS } from '@/lib/file-system';
import { FileNode } from '@/lib/file-system/type';
import { TerminalEntry } from './type';

export default function TerminalUI({ isOpen = false }: { isOpen?: boolean }) {
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [terminalHistory, setTerminalHistory] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [fileSystem, setFileSystem] = useState<FileNode>(getStoredFS);
  const [currentPath, setCurrentPath] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [savedDraft, setSavedDraft] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    saveFS(fileSystem);
  }, [fileSystem]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [terminalHistory, isProcessing, terminalInput]);

  const syncCursorPosition = (e?: SyntheticEvent<HTMLInputElement>) => {
    const target = e?.currentTarget || inputRef.current;
    if (target && typeof target.selectionStart === 'number') {
      setCursorPosition(target.selectionStart);
    }
  };

  const syncCaret = () => {
    if (inputRef.current && typeof inputRef.current.selectionStart === 'number') {
      setCursorPosition(inputRef.current.selectionStart);
    }
  };

  // Global key listener for auto-focus and Ctrl+L hotkey — only active when terminal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setTerminalHistory([]);
        return;
      }

      // Ignore when modifiers are active or already focused
      if (e.altKey || e.ctrlKey || e.metaKey) {
        return;
      }

      // Always focus the terminal input when any key is pressed
      if (document.activeElement !== inputRef.current) {
        inputRef.current?.focus();
      }

      // Prevent page scroll for ArrowUp/ArrowDown when not focused
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        // Let the input's onKeyDown handle history navigation
        return;
      }

      // For normal character keys and Backspace, ensure focus (already handled above)
      if (e.key.length === 1 || e.key === 'Backspace') {
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isOpen]);

  const handleEnterCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed || isProcessing) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setTerminalInput('');
    setCursorPosition(0);
    setHistoryIndex(null);
    setSavedDraft('');

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

    const currentPathSnapshot = [...currentPath];

    setTimeout(() => {
      const result = executeTerminalCommand(trimmed, fileSystem, currentPathSnapshot);

      if (result.updatedFs) {
        setFileSystem(result.updatedFs);
      }
      if (result.updatedPath !== undefined) {
        setCurrentPath(result.updatedPath);
      }

      setTerminalHistory((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          command: trimmed,
          timestamp,
          currentPath: currentPathSnapshot,
          output: result.output,
        },
      ]);
      setIsProcessing(false);
    }, 80);
  };

  const handleHistoryNavigation = (direction: 'up' | 'down') => {
    if (commandHistory.length === 0) return;

    if (direction === 'up') {
      if (historyIndex === null) {
        setSavedDraft(terminalInput);
        const nextIdx = commandHistory.length - 1;
        setHistoryIndex(nextIdx);
        const cmd = commandHistory[nextIdx];
        setTerminalInput(cmd);
        setCursorPosition(cmd.length);
        requestAnimationFrame(() => {
          inputRef.current?.setSelectionRange(cmd.length, cmd.length);
        });
      } else if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        const cmd = commandHistory[nextIdx];
        setTerminalInput(cmd);
        setCursorPosition(cmd.length);
        requestAnimationFrame(() => {
          inputRef.current?.setSelectionRange(cmd.length, cmd.length);
        });
      } else {
        // At the top of history (oldest command)
        const cmd = commandHistory[0];
        setTerminalInput(cmd);
        setCursorPosition(cmd.length);
        requestAnimationFrame(() => {
          inputRef.current?.setSelectionRange(cmd.length, cmd.length);
        });
      }
    } else if (direction === 'down') {
      if (historyIndex !== null) {
        if (historyIndex < commandHistory.length - 1) {
          const nextIdx = historyIndex + 1;
          setHistoryIndex(nextIdx);
          const cmd = commandHistory[nextIdx];
          setTerminalInput(cmd);
          setCursorPosition(cmd.length);
          requestAnimationFrame(() => {
            inputRef.current?.setSelectionRange(cmd.length, cmd.length);
          });
        } else {
          // At the bottom of history (restore user uncommitted draft)
          setHistoryIndex(null);
          setTerminalInput(savedDraft);
          setCursorPosition(savedDraft.length);
          requestAnimationFrame(() => {
            inputRef.current?.setSelectionRange(savedDraft.length, savedDraft.length);
          });
        }
      }
    }
  };

  const pathString = `~${currentPath.length > 0 ? '/' + currentPath.join('/') : ''}`;

  const textBeforeCursor = terminalInput.slice(0, cursorPosition);
  const currentChar = terminalInput[cursorPosition] ?? '';
  const textAfterCursor = terminalInput.slice(cursorPosition + 1);

  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden bg-[#030f06] p-6 font-mono select-none md:p-10"
      onClick={() => {
        inputRef.current?.focus();
        requestAnimationFrame(syncCaret);
      }}
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
            <span className="text-accent font-bold">{pathString} $&gt;</span>
            <span className="text-text-primary">systemctl status profile-core</span>
          </div>
          <div className="text-accent mt-1 pl-4 text-xs font-semibold">
            ● Stack: Next.js 15 / TypeScript / Tailwind CSS v4
          </div>
          <div className="text-text-secondary mt-1 pl-4 text-xs">
            Type <span className="text-accent font-bold">&lsquo;help&lsquo;</span> to view available shell commands.
          </div>
        </div>

        {terminalHistory.map((entry) => (
          <div key={entry.id} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold">
                ~{entry.currentPath.length > 0 ? '/' + entry.currentPath.join('/') : ''} $&gt;
              </span>
              <span className="text-text-primary">{entry.command}</span>
              <span className="text-text-secondary ml-auto text-[10px] opacity-40">[{entry.timestamp}]</span>
            </div>
            {entry.output}
          </div>
        ))}

        {isProcessing && (
          <div className="text-accent/60 flex items-center gap-2 py-1 text-xs">
            <span className="bg-accent inline-block h-2 w-2 animate-ping rounded-full" />
            <span>Executing command...</span>
          </div>
        )}

        {/* Input Container with Pixel-Perfect Caret Alignment */}
        <div className="relative mt-2 flex items-center gap-2">
          <span className="text-accent font-bold">{pathString} $&gt;</span>

          <div className="relative flex flex-1 items-center">
            {/* Native transparent input for input handling & selection */}
            <input
              ref={inputRef}
              type="text"
              name="terminal-input"
              id="terminal-input"
              value={terminalInput}
              disabled={isProcessing}
              autoComplete="off"
              spellCheck="false"
              onChange={(e) => {
                setTerminalInput(e.target.value);
                setCursorPosition(e.target.selectionStart ?? e.target.value.length);
              }}
              onClick={syncCursorPosition}
              onKeyUp={syncCursorPosition}
              onSelect={syncCursorPosition}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleEnterCommand(terminalInput);
                } else if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  handleHistoryNavigation('up');
                } else if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  handleHistoryNavigation('down');
                } else {
                  requestAnimationFrame(syncCaret);
                }
              }}
              className="absolute inset-0 z-10 w-full border-none bg-transparent font-mono text-sm text-transparent caret-transparent outline-none select-none"
            />

            {/* Visual Mirror with Terminal Block Caret */}
            <div className="pointer-events-none flex items-center font-mono text-sm">
              <span className="text-text-primary whitespace-pre">{textBeforeCursor}</span>
              {currentChar ? (
                <span className="bg-accent inline-block min-w-[1ch] text-center font-bold whitespace-pre text-[#030f06]">
                  {currentChar === ' ' ? '\u00A0' : currentChar}
                </span>
              ) : (
                <BlinkingCursor />
              )}
              <span className="text-text-primary whitespace-pre">{textAfterCursor}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
