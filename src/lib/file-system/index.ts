import { FileNode } from './type';
import { generateUserTxt, generateContactTxt, generateProjectsTxt } from '@/constants/profile';
import { projects } from '@/constants/projects';

const FS_STORAGE_KEY = 'terminal_fs_v2';

export const INITIAL_FS: FileNode = {
  name: '~',
  type: 'directory',
  children: {
    'user.txt': {
      name: 'user.txt',
      type: 'file',
      isReadOnly: true,
      content: generateUserTxt(),
    },
    'projects.txt': {
      name: 'projects.txt',
      type: 'file',
      isReadOnly: true,
      content: generateProjectsTxt(projects),
    },
    'contact.txt': {
      name: 'contact.txt',
      type: 'file',
      isReadOnly: true,
      content: generateContactTxt(),
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
  if (targetPathStr === '~' || targetPathStr === '') {
    return { node: root, path: [], parent: null, name: '~' };
  }

  const rawSegments = targetPathStr.startsWith('/')
    ? targetPathStr.split('/').filter(Boolean)
    : [...currentPath, ...targetPathStr.split('/').filter(Boolean)];

  const normalizedSegments: string[] = [];
  for (const seg of rawSegments) {
    if (seg === '.' || seg === '') continue;
    if (seg === '..') {
      normalizedSegments.pop();
    } else {
      normalizedSegments.push(seg);
    }
  }

  let current: FileNode = root;
  let parent: FileNode | null = null;

  for (let i = 0; i < normalizedSegments.length; i++) {
    const seg = normalizedSegments[i];
    if (current.type !== 'directory' || !current.children || !current.children[seg]) {
      return { node: null, path: [], parent: null, name: seg };
    }
    parent = current;
    current = current.children[seg];
  }

  const name = normalizedSegments.length > 0 ? normalizedSegments[normalizedSegments.length - 1] : '~';
  return { node: current, path: normalizedSegments, parent, name };
};
