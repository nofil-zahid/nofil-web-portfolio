export interface FileNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  isReadOnly?: boolean;
  children?: Record<string, FileNode>;
}
