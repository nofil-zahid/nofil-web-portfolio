import { FileNode } from './type';

const FS_STORAGE_KEY = 'terminal_fs_v1';

export const INITIAL_FS: FileNode = {
  name: '~',
  type: 'directory',
  children: {
    'user.txt': {
      name: 'user.txt',
      type: 'file',
      isReadOnly: true,
      content: `[USER PROFILE]\nName: Full-Stack Developer\nSpecialization: Modern Web Systems, Frontend Engineering & Performance`,
    },
    'projects.txt': {
      name: 'projects.txt',
      type: 'file',
      isReadOnly: true,
      content: `[SYSTEM PROJECTS]\n• Portfolio Architecture (Next.js 15, Tailwind CSS v4)\n• Multi-tenant Core Systems`,
    },
    'contact.txt': {
      name: 'contact.txt',
      type: 'file',
      isReadOnly: true,
      content: `[COMMUNICATION ENDPOINTS]\nEmail: available on request\nStatus: Open for opportunities`,
    },
  },
};

export const getStoredFS = (): FileNode => {
  if (typeof window === 'undefined') return INITIAL_FS;
  try {
    const data = localStorage.getItem(FS_STORAGE_KEY);
    return data ? JSON.parse(data) : INITIAL_FS;
  } catch {
    return INITIAL_FS;
  }
};

export const saveFS = (fs: FileNode) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(FS_STORAGE_KEY, JSON.stringify(fs));
  } catch (err) {
    console.error('Failed to save filesystem state:', err);
  }
};

export const resolvePath = (
  root: FileNode,
  currentPath: string[],
  targetPathStr: string,
): { node: FileNode | null; path: string[]; parent: FileNode | null; name: string } => {
  const pathSegments = targetPathStr.startsWith('/')
    ? targetPathStr.split('/').filter(Boolean)
    : [...currentPath, ...targetPathStr.split('/').filter(Boolean)];

  let current = root;
  let parent: FileNode | null = null;
  const resolvedPath: string[] = [];

  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    if (segment === '.') continue;
    if (segment === '..') {
      if (resolvedPath.length > 0) {
        resolvedPath.pop();
      }
      continue;
    }

    if (current.type !== 'directory' || !current.children || !current.children[segment]) {
      return { node: null, path: [], parent: null, name: segment };
    }

    parent = current;
    current = current.children[segment];
    resolvedPath.push(segment);
  }

  const name = resolvedPath.length > 0 ? resolvedPath[resolvedPath.length - 1] : '~';
  return { node: current, path: resolvedPath, parent, name };
};
