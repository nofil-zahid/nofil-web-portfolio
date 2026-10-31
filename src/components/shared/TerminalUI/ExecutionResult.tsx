import { resolvePath } from '@/lib/file-system';
import { FileNode } from '@/lib/file-system/type';
import { CommandExecutionResult } from './type';
import { TERMINAL_HELP_COMMANDS } from '@/constants/terminal';
import { experiences } from '@/constants/experiences-data';
import { formatDate } from '@/utils/date';

const getHostLabel = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  }
};

export async function executeTerminalCommand(
  command: string,
  fileSystem: FileNode,
  currentPath: string[],
): Promise<CommandExecutionResult> {
  const parts = command.trim().split(/\s+/);
  const mainCommand = parts[0]?.toLowerCase();
  const args = parts.slice(1);

  const currentDirNode = resolvePath(fileSystem, currentPath, '.').node;

  switch (mainCommand) {
    case 'help':
      return {
        output: (
          <div className="text-text-secondary my-1 space-y-1 pl-4 font-mono text-xs">
            <p className="text-accent/90 mb-1 font-semibold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-[140px_1fr] gap-x-2 gap-y-1.5">
              {TERMINAL_HELP_COMMANDS.map((item) => (
                <div key={item.command} className="contents">
                  <span className="text-accent font-bold">{item.command}</span>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        ),
      };

    case 'whoami':
      return {
        output: <div className="text-accent my-1 pl-4 text-xs font-semibold">nofil</div>,
      };

    case 'ip': {
      try {
        const response = await fetch('/api/ip');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        return {
          output: (
            <div className="text-accent my-1 pl-4 text-xs">
              Client IP Address: <span className="font-bold">{data.ip ?? 'unknown'}</span>
            </div>
          ),
        };
      } catch {
        return {
          output: <div className="my-1 pl-4 text-xs text-red-400">ip: failed to resolve client IP address.</div>,
        };
      }
    }

    case 'pwd':
      return {
        output: (
          <div className="text-text-primary my-1 pl-4 text-xs">
            /~{currentPath.length > 0 ? currentPath.join('/') : ''}
          </div>
        ),
      };

    case 'ls': {
      if (!currentDirNode || currentDirNode.type !== 'directory' || !currentDirNode.children) {
        return {
          output: <div className="my-1 pl-4 text-xs text-red-400">ls: directory read error</div>,
        };
      }

      const entries = Object.values(currentDirNode.children);
      if (entries.length === 0) {
        return {
          output: <div className="text-text-secondary my-1 pl-4 text-xs italic">empty directory</div>,
        };
      }

      return {
        output: (
          <div className="my-1 flex flex-wrap gap-4 pl-4 text-xs font-semibold">
            {entries.map((item) => (
              <span key={item.name} className={item.type === 'directory' ? 'text-blue-400' : 'text-accent'}>
                {item.name}
                {item.type === 'directory' ? '/' : ''}
              </span>
            ))}
          </div>
        ),
      };
    }

    case 'cd': {
      const targetDir = args[0] || '~';
      if (targetDir === '~' || targetDir === '/') {
        return {
          output: null,
          updatedPath: [],
        };
      }

      const { node, path } = resolvePath(fileSystem, currentPath, targetDir);
      if (!node || node.type !== 'directory') {
        return {
          output: <div className="my-1 pl-4 text-xs text-red-400">cd: no such directory: {args[0]}</div>,
        };
      }

      return {
        output: null,
        updatedPath: path,
      };
    }

    case 'mkdir': {
      const dirName = args[0];
      if (!dirName) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              mkdir: missing operand. Usage: mkdir &lt;directory_name&gt;
            </div>
          ),
        };
      }

      const { node } = resolvePath(fileSystem, currentPath, dirName);
      if (node) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              mkdir: cannot create directory &apos;{dirName}&apos;: File or folder exists
            </div>
          ),
        };
      }

      const nextFs: FileNode = JSON.parse(JSON.stringify(fileSystem));
      const target = resolvePath(nextFs, currentPath, '.').node;
      if (target && target.children) {
        target.children[dirName] = {
          name: dirName,
          type: 'directory',
          children: {},
        };
      }

      return {
        updatedFs: nextFs,
        output: (
          <div className="text-accent my-1 pl-4 text-xs">Directory &apos;{dirName}&apos; created successfully.</div>
        ),
      };
    }

    case 'touch': {
      const fileName = args[0];
      const newContent = args.slice(1).join(' ');

      if (!fileName) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              touch: missing file operand. Usage: touch &lt;filename&gt; [optional_content]
            </div>
          ),
        };
      }

      const { node } = resolvePath(fileSystem, currentPath, fileName);

      if (node && node.isReadOnly) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              Permission denied: &apos;{fileName}&apos; is a read-only system file.
            </div>
          ),
        };
      }

      if (node && node.type === 'directory') {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              touch: cannot touch &apos;{fileName}&apos;: Is a directory.
            </div>
          ),
        };
      }

      const nextFs: FileNode = JSON.parse(JSON.stringify(fileSystem));
      const target = resolvePath(nextFs, currentPath, '.').node;
      if (target && target.children) {
        target.children[fileName] = {
          name: fileName,
          type: 'file',
          isReadOnly: false,
          content: newContent || target.children[fileName]?.content || '',
        };
      }

      return {
        updatedFs: nextFs,
        output: <div className="text-accent my-1 pl-4 text-xs">File &apos;{fileName}&apos; written successfully.</div>,
      };
    }

    case 'sudo': {
      const subCommand = args[0]?.toLowerCase();
      if (subCommand === 'hire-nofil' || subCommand === 'hire') {
        if (typeof window !== 'undefined') {
          setTimeout(() => {
            window.location.href = '/contact-me';
          }, 800);
        }
        return {
          output: (
            <div className="my-1.5 space-y-1.5 pl-4 font-mono text-xs">
              <p className="font-bold text-[#00FF66]">[PRIVILEGE ESCALATION: ROOT ACCESS GRANTED]</p>
              <p className="text-text-primary">
                Superuser override authorized. Initializing direct dispatch to Nofil Zahid...
              </p>
              <p className="text-accent animate-pulse">&gt; Rerouting to /contact-me transmission portal...</p>
            </div>
          ),
        };
      }
      return {
        output: (
          <div className="my-1 pl-4 font-mono text-xs text-red-400">
            sudo: &apos;{args.join(' ')}&apos; permission granted for recognized routines only. Try{' '}
            <span className="font-bold text-[#00FF66]">&apos;sudo hire-nofil&apos;</span>.
          </div>
        ),
      };
    }

    case 'hire-nofil': {
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          window.location.href = '/contact-me';
        }, 800);
      }
      return {
        output: (
          <div className="my-1.5 space-y-1.5 pl-4 font-mono text-xs">
            <p className="font-bold text-[#00FF66]">[INCOMING TALENT DIRECTIVE]</p>
            <p className="text-text-primary">Opening encrypted communication bridge...</p>
            <p className="text-accent animate-pulse">&gt; Navigating to /contact-me...</p>
          </div>
        ),
      };
    }

    case 'experience':
    case 'cat': {
      const fileName = (mainCommand === 'experience' ? 'experience.txt' : args[0]) || '';
      if (!fileName) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              cat: missing file argument. Usage: cat &lt;filename&gt;
            </div>
          ),
        };
      }

      if (fileName.toLowerCase() === 'experience.txt' || fileName.toLowerCase() === 'experience') {
        return {
          output: (
            <div className="my-2 space-y-3 pl-4 font-mono text-xs">
              <div className="border-accent/25 border-b pb-1 font-bold tracking-wider text-[#00FF66] uppercase">
                [STRUCTURED JOB HISTORY // KERNEL RECORD]
              </div>

              {experiences.map((exp) => {
                const isCurrent = !exp.endDate;
                const period = `${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`;
                const hostLabel = exp.website ? getHostLabel(exp.website) : '';

                return (
                  <div
                    key={`${exp.company}-${exp.role}`}
                    className="border-accent/25 bg-background-secondary/70 rounded-lg border p-3 shadow-inner"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#00FF66]">{exp.company}</span>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent text-[10px] underline hover:text-white"
                          >
                            ({hostLabel})
                          </a>
                        )}
                      </div>
                      <span
                        className={
                          isCurrent
                            ? 'bg-accent/10 text-accent rounded px-2 py-0.5 text-[10px] font-semibold'
                            : 'rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-slate-300'
                        }
                      >
                        {period}
                      </span>
                    </div>
                    <p className="text-text-primary mt-1 font-semibold">{exp.role}</p>
                    <ul className="mt-2 list-disc space-y-1.5 pl-4 text-slate-300 marker:text-[#00FF66]">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ),
        };
      }

      const { node } = resolvePath(fileSystem, currentPath, fileName);
      if (!node) {
        return {
          output: <div className="my-1 pl-4 text-xs text-red-400">cat: {fileName}: No such file or directory.</div>,
        };
      }

      if (node.type === 'directory') {
        return {
          output: <div className="my-1 pl-4 text-xs text-red-400">cat: {fileName}: Is a directory.</div>,
        };
      }

      return {
        output: (
          <div className="text-text-primary my-1 pl-4 text-xs leading-relaxed whitespace-pre-wrap">
            {node.content || <span className="text-text-secondary italic">(empty file)</span>}
          </div>
        ),
      };
    }

    case 'rm': {
      const targetName = args[0];
      if (!targetName) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">rm: missing operand. Usage: rm &lt;filename_or_dir&gt;</div>
          ),
        };
      }

      const { node } = resolvePath(fileSystem, currentPath, targetName);
      if (!node) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              rm: cannot remove &apos;{targetName}&apos;: No such file or directory
            </div>
          ),
        };
      }

      if (node.isReadOnly) {
        return {
          output: (
            <div className="my-1 pl-4 text-xs text-red-400">
              Permission denied: Cannot delete system protected file &apos;{targetName}&apos;.
            </div>
          ),
        };
      }

      const nextFs: FileNode = JSON.parse(JSON.stringify(fileSystem));
      const targetDir = resolvePath(nextFs, currentPath, '.').node;
      if (targetDir && targetDir.children) {
        delete targetDir.children[targetName];
      }

      return {
        updatedFs: nextFs,
        output: <div className="text-accent my-1 pl-4 text-xs">Removed &apos;{targetName}&apos;.</div>,
      };
    }

    default:
      return {
        output: (
          <div className="my-1 pl-4 text-xs text-red-400">
            zsh: command not found: {command}. Type <span className="text-accent">&apos;help&apos;</span> for commands.
          </div>
        ),
      };
  }
}
