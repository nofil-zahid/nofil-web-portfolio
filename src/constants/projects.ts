import { ProjectCardProps } from '@/types/components';

export const projects: ProjectCardProps[] = [
  {
    title: 'Crontab Text Explainer',
    type: 'web',
    description:
      'An open-source tool that helps developers and system administrators understand and generate cron expressions. It provides interactive explanations, visualizations, and random cron expression generation.',
    technologies: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/nofil-zahid/crontab-text-explainer',
    liveUrl: 'https://nofil-zahid.github.io/crontab-text-explainer/',
    screenshotUrl: '/projects/crontab.png',
  },
  {
    title: 'SayBack',
    type: 'cli',
    description: 'A CLI tool that animates terminal text with a retro character-cycling typewriter effect.',
    technologies: ['NodeJS', 'TypeScript'],
    repoUrl: 'https://github.com/nofil-zahid/sayback',
    liveUrl: 'https://www.npmjs.com/package/sayback',
  },
  {
    title: 'DineDynaty',
    type: 'mobile',
    description:
      'A comprehensive Restaurant Management System built using Flutter and Firebase, designed to streamline the operations of a restaurant, including managing orders, reservations, inventory, and customer interactions.',
    repoUrl: 'https://github.com/nofil-zahid/restaurant-management-system',
    technologies: ['Semester Project', 'Flutter', 'Firebase', 'Auth', 'Firebase Firestore', 'Firebase Storage'],
  },
  {
    title: 'ClassHub',
    type: 'web',
    description:
      'A role-based learning management platform that supports assignments, quizzes, project tracking, and feedback. It includes real-time chat, notifications, email alerts, file sharing, and activity logs to streamline collaboration between students and instructors.',
    technologies: ['F.Y.P.', 'React', 'Express.js', 'MySQL', 'Firebase', 'Gemini API', 'CopyLeaks API'],
  },
  {
    title: 'Docly',
    type: 'web',
    description:
      'A modern web-based document editor built using Slate.js that supports rich text formatting, custom blocks, and dynamic content editing. The editor was designed to provide a flexible and extensible editing experience with features like structured document elements, keyboard shortcuts, and real-time content manipulation.',
    technologies: ['Next.js', 'TypeScript', 'Slate.js', 'Tailwind CSS'],
  },
];

export const numberOfProjects = projects.length;

export const getProjectSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const findProjectByIdOrSlug = (idOrSlug: string) => {
  const decoded = decodeURIComponent(idOrSlug).toLowerCase();
  return projects.find(
    (p, index) =>
      getProjectSlug(p.title) === decoded ||
      p.title.toLowerCase() === decoded ||
      String(index) === decoded ||
      String(index + 1) === decoded,
  );
};
