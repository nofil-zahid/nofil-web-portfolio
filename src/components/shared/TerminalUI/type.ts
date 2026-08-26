import { ReactNode } from 'react';
import { FileNode } from '@/lib/file-system/type';

export interface TerminalEntry {
  id: string;
  command: string;
  timestamp: string;
  currentPath: string[];
  output: ReactNode;
}

export interface CommandExecutionResult {
  output: ReactNode;
  updatedFs?: FileNode;
  updatedPath?: string[];
}
