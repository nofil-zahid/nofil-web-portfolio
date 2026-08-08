import { resolvePath } from '@/lib/file-system';
import { ExecutionResultProps } from './type';

export default function ExecutionResult({
  command,
  fileSystem,
  setFileSystem,
  currentPath,
  setCurrentPath,
}: ExecutionResultProps) {
  const parts = command.trim().split(/\s+/);
  const mainCommand = parts[0]?.toLowerCase();
  const args = parts.slice(1);

  const currentDirNode = resolvePath(fileSystem, currentPath, '.').node;

  switch (mainCommand) {
    case 'help':
      return (
        <div className="text-text-secondary my-1 space-y-1 pl-4 text-xs">
          <p className="text-accent/90 mb-1 font-semibold">AVAILABLE COMMANDS:</p>
          <div className="grid grid-cols-[110px_1fr] gap-x-2 gap-y-1">
            <span className="text-accent font-bold">help</span>
            <span>Display list of available commands</span>
            <span className="text-accent font-bold">ls</span>
            <span>List directory contents</span>
            <span className="text-accent font-bold">cat [file]</span>
            <span>Read file contents</span>
            <span className="text-accent font-bold">touch [f] [t]</span>
            <span>Create or edit file contents</span>
            <span className="text-accent font-bold">mkdir [dir]</span>
            <span>Create a new directory</span>
            <span className="text-accent font-bold">cd [dir]</span>
            <span>Change directory</span>
            <span className="text-accent font-bold">pwd</span>
            <span>Print current directory path</span>
            <span className="text-accent font-bold">rm [target]</span>
            <span>Remove file or empty directory</span>
            <span className="text-accent font-bold">clear / ^L</span>
            <span>Clear screen terminal history</span>
          </div>
        </div>
      );

    case 'pwd':
      return (
        <div className="text-text-primary my-1 pl-4 text-xs">
          /~{currentPath.length > 0 ? currentPath.join('/') : ''}
        </div>
      );

    case 'ls': {
      if (!currentDirNode || currentDirNode.type !== 'directory' || !currentDirNode.children) {
        return <div className="my-1 pl-4 text-xs text-red-400">ls: directory read error</div>;
      }

      const entries = Object.values(currentDirNode.children);
      if (entries.length === 0) {
        return <div className="text-text-secondary my-1 pl-4 text-xs italic">empty directory</div>;
      }

      return (
        <div className="my-1 flex flex-wrap gap-4 pl-4 text-xs font-semibold">
          {entries.map((item) => (
            <span key={item.name} className={item.type === 'directory' ? 'text-blue-400' : 'text-accent'}>
              {item.name}
              {item.type === 'directory' ? '/' : ''}
            </span>
          ))}
        </div>
      );
    }

    case 'cd': {
      const targetDir = args[0] || '~';
      if (targetDir === '~' || targetDir === '/') {
        setCurrentPath([]);
        return null;
      }

      const { node, path } = resolvePath(fileSystem, currentPath, targetDir);
      if (!node || node.type !== 'directory') {
        return <div className="my-1 pl-4 text-xs text-red-400">cd: no such directory: {args[0]}</div>;
      }

      setCurrentPath(path);
      return null;
    }

    case 'mkdir': {
      const dirName = args[0];
      if (!dirName) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            mkdir: missing operand. Usage: mkdir &lt;directory_name&gt;
          </div>
        );
      }

      const { node } = resolvePath(fileSystem, currentPath, dirName);
      if (node) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            mkdir: cannot create directory &apos;{dirName}&apos;: File or folder exists
          </div>
        );
      }

      setFileSystem((prevFs) => {
        const nextFs = JSON.parse(JSON.stringify(prevFs));
        const target = resolvePath(nextFs, currentPath, '.').node;
        if (target && target.children) {
          target.children[dirName] = {
            name: dirName,
            type: 'directory',
            children: {},
          };
        }
        return nextFs;
      });

      return <div className="text-accent my-1 pl-4 text-xs">Directory &apos;{dirName}&apos; created successfully.</div>;
    }

    case 'touch': {
      const fileName = args[0];
      const newContent = args.slice(1).join(' ');

      if (!fileName) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            touch: missing file operand. Usage: touch &lt;filename&gt; [optional_content]
          </div>
        );
      }

      const { node } = resolvePath(fileSystem, currentPath, fileName);

      if (node && node.isReadOnly) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            Permission denied: &apos;{fileName}&apos; is a read-only system file.
          </div>
        );
      }

      setFileSystem((prevFs) => {
        const nextFs = JSON.parse(JSON.stringify(prevFs));
        const target = resolvePath(nextFs, currentPath, '.').node;
        if (target && target.children) {
          target.children[fileName] = {
            name: fileName,
            type: 'file',
            isReadOnly: false,
            content: newContent || target.children[fileName]?.content || '',
          };
        }
        return nextFs;
      });

      return <div className="text-accent my-1 pl-4 text-xs">File &apos;{fileName}&apos; written successfully.</div>;
    }

    case 'cat': {
      const fileName = args[0];
      if (!fileName) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">cat: missing file argument. Usage: cat &lt;filename&gt;</div>
        );
      }

      const { node } = resolvePath(fileSystem, currentPath, fileName);
      if (!node) {
        return <div className="my-1 pl-4 text-xs text-red-400">cat: {fileName}: No such file or directory.</div>;
      }

      if (node.type === 'directory') {
        return <div className="my-1 pl-4 text-xs text-red-400">cat: {fileName}: Is a directory.</div>;
      }

      return (
        <div className="text-text-primary my-1 pl-4 text-xs leading-relaxed whitespace-pre-wrap">
          {node.content || <span className="text-text-secondary italic">(empty file)</span>}
        </div>
      );
    }

    case 'rm': {
      const targetName = args[0];
      if (!targetName) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">rm: missing operand. Usage: rm &lt;filename_or_dir&gt;</div>
        );
      }

      const { node } = resolvePath(fileSystem, currentPath, targetName);
      if (!node) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            rm: cannot remove &apos;{targetName}&apos;: No such file or directory
          </div>
        );
      }

      if (node.isReadOnly) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">
            Permission denied: Cannot delete system protected file &apos;{targetName}&apos;.
          </div>
        );
      }

      setFileSystem((prevFs) => {
        const nextFs = JSON.parse(JSON.stringify(prevFs));
        const targetDir = resolvePath(nextFs, currentPath, '.').node;
        if (targetDir && targetDir.children) {
          delete targetDir.children[targetName];
        }
        return nextFs;
      });

      return <div className="text-accent my-1 pl-4 text-xs">Removed &apos;{targetName}&apos;.</div>;
    }

    default:
      return (
        <div className="my-1 pl-4 text-xs text-red-400">
          zsh: command not found: {command}. Type <span className="text-accent">&apos;help&apos;</span> for commands.
        </div>
      );
  }
}
