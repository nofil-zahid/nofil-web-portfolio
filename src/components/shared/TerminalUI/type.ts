import { FileNode } from '@/lib/file-system/type';
import { Dispatch, SetStateAction } from 'react';

export interface ExecutionResultProps {
  command: string;
  fileSystem: FileNode;
  setFileSystem: Dispatch<SetStateAction<FileNode>>;
  currentPath: string[];
  setCurrentPath: Dispatch<SetStateAction<string[]>>;
}
