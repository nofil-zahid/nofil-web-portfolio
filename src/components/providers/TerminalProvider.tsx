'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface TerminalContextType {
  isTerminalOpen: boolean;
  openTerminal: () => void;
  closeTerminal: () => void;
  toggleTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export function TerminalProvider({ children }: { children: React.ReactNode }) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = useCallback(() => setIsTerminalOpen(true), []);
  const closeTerminal = useCallback(() => setIsTerminalOpen(false), []);
  const toggleTerminal = useCallback(() => setIsTerminalOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Esc closes terminal
      if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        return;
      }

      // Ctrl+K or Cmd+K toggles terminal from anywhere
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        return;
      }

      // '/' toggles terminal if not actively typing in an editable field
      if (e.key === '/') {
        const target = e.target as HTMLElement | null;
        const isEditable =
          target &&
          (target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable ||
            (target as HTMLElement).getAttribute('role') === 'textbox');

        if (!isEditable) {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TerminalContext.Provider value={{ isTerminalOpen, openTerminal, closeTerminal, toggleTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}
