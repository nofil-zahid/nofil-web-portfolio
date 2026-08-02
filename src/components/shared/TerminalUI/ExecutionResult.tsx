interface ExecutionResultProps {
  command: string;
}

export default function ExecutionResult({ command }: ExecutionResultProps) {
  const parts = command.trim().split(/\s+/);
  const mainCommand = parts[0]?.toLowerCase();
  const args = parts.slice(1);

  switch (mainCommand) {
    case 'help':
      return (
        <div className="text-text-secondary my-1 space-y-1 pl-4 text-xs">
          <p className="text-accent/90 mb-1 font-semibold">AVAILABLE COMMANDS:</p>
          <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1">
            <span className="text-accent font-bold">help</span>
            <span>Display list of available terminal commands</span>
            <span className="text-accent font-bold">who</span>
            <span>Show information about the system user</span>
            <span className="text-accent font-bold">uname</span>
            <span>Print system architecture & OS information</span>
            <span className="text-accent font-bold">ls</span>
            <span>List target environment directory contents</span>
            <span className="text-accent font-bold">cat [file]</span>
            <span>Display contents of specified text file</span>
            <span className="text-accent font-bold">clear</span>
            <span>Clear the terminal execution history</span>
          </div>
        </div>
      );

    case 'who':
      return (
        <div className="text-text-primary my-1 pl-4 text-xs">
          <p>
            <span className="text-accent">User:</span> Developer / System Administrator
          </p>
          <p className="text-text-secondary">Role: Full-Stack Developer | Access: Granted (0x01)</p>
        </div>
      );

    case 'uname':
      return (
        <div className="text-text-primary my-1 pl-4 text-xs">
          <p className="text-accent/90">Linux core-node 6.8.0-custom-x86_64 #1 SMP PREEMPT_DYNAMIC GNU/Linux</p>
        </div>
      );

    case 'ls':
      return (
        <div className="text-accent my-1 flex flex-wrap gap-4 pl-4 text-xs font-semibold">
          <span>user.txt</span>
          <span>projects.txt</span>
          <span>contact.txt</span>
        </div>
      );

    case 'cat': {
      const fileName = args[0]?.toLowerCase();
      if (!fileName) {
        return (
          <div className="my-1 pl-4 text-xs text-red-400">cat: missing file argument. Usage: cat &lt;filename&gt;</div>
        );
      }

      switch (fileName) {
        case 'user.txt':
          return (
            <div className="text-text-primary my-1 space-y-1 pl-4 text-xs">
              <p className="text-accent">[USER PROFILE]</p>
              <p>Name: Full-Stack Developer</p>
              <p>Specialization: Modern Web Systems, Frontend Engineering & Performance</p>
            </div>
          );

        case 'projects.txt':
          return (
            <div className="text-text-primary my-1 space-y-1 pl-4 text-xs">
              <p className="text-accent">[SYSTEM PROJECTS]</p>
              <p>• Portfolio Architecture (Next.js 15, Tailwind CSS v4)</p>
              <p>• Multi-tenant Core Systems</p>
            </div>
          );

        case 'contact.txt':
          return (
            <div className="text-text-primary my-1 space-y-1 pl-4 text-xs">
              <p className="text-accent">[COMMUNICATION ENDPOINTS]</p>
              <p>Email: available on request</p>
              <p>Status: Open for opportunities</p>
            </div>
          );

        default:
          return (
            <div className="my-1 pl-4 text-xs text-red-400">
              cat: {args[0]}: No such file or directory. Try running &apos;ls&apos;.
            </div>
          );
      }
    }

    default:
      return (
        <div className="my-1 pl-4 text-xs text-red-400">
          zsh: command not found: {command}. Type <span className="text-accent">&apos;help&apos;</span> for a list of
          available commands.
        </div>
      );
  }
}
