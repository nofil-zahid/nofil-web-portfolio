export const TERMINAL_PROMPT = 'nofil@portfolio:~$';

export interface TerminalCommandHelp {
  command: string;
  description: string;
}

export const TERMINAL_HELP_COMMANDS: TerminalCommandHelp[] = [
  { command: 'help', description: 'Display list of available shell commands' },
  { command: 'cat experience.txt', description: 'Outputs structured professional job history' },
  { command: 'sudo hire-nofil', description: 'Superuser redirect to transmission channel (/contact-me)' },
  { command: 'whoami', description: 'Display current active session user' },
  { command: 'ip', description: 'Fetch client public IP address' },
  { command: 'ls', description: 'List directory contents' },
  { command: 'cat [file]', description: 'Read file contents (e.g. user.txt, contact.txt)' },
  { command: 'touch [f] [t]', description: 'Create or edit file contents' },
  { command: 'mkdir [dir]', description: 'Create a new directory' },
  { command: 'cd [dir]', description: 'Change directory' },
  { command: 'pwd', description: 'Print current directory path' },
  { command: 'rm [target]', description: 'Remove file or empty directory' },
  { command: 'clear / ^L', description: 'Clear screen terminal history' },
];
