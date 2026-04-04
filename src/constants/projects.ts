import { ProjectCardProps } from '@/types/components';

export const projects: ProjectCardProps[] = [
  {
    title: 'Crontab Text Explainer',
    description:
      'An open-source tool that helps developers and system administrators understand and generate cron expressions. It provides interactive explanations, visualizations, and random cron expression generation.',
    technologies: ['React', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/nofil-zahid/crontab-text-explainer',
    liveUrl: 'https://nofil-zahid.github.io/crontab-text-explainer/',
    screenshotUrl: '/projects/crontab.png',
  },
  {
    title: 'DineDynaty',
    description:
      'A comprehensive Restaurant Management System built using Flutter and Firebase, designed to streamline the operations of a restaurant, including managing orders, reservations, inventory, and customer interactions.',
    repoUrl: 'https://github.com/nofil-zahid/restaurant_management_system',
    technologies: ['Semester Project', 'Flutter', 'Firebase', 'Auth', 'Firebase Firestore', 'Firebase Storage'],
  },
  {
    title: 'Crontab Descriptor',
    description:
      'A tool built with Java that interprets crontab expressions and translates them into clear, human-readable explanations. Built entirely from scratch without any external libraries, this tool is perfect for anyone looking to demystify crontab strings.',
    technologies: ['Java', 'Linux', 'CronJobs'],
    repoUrl: 'https://github.com/nofil-zahid/Crontab-Descriptor',
  },
  {
    title: 'ClassHub',
    description:
      'A role-based learning management platform that supports assignments, quizzes, project tracking, and feedback. It includes real-time chat, notifications, email alerts, file sharing, and activity logs to streamline collaboration between students and instructors.',
    technologies: ['F.Y.P.', 'React', 'Express.js', 'MySQL', 'Firebase', 'Gemini API', 'CopyLeaks API'],
  },
  {
    title: 'Docly',
    description:
      'A modern web-based document editor built using Slate.js that supports rich text formatting, custom blocks, and dynamic content editing. The editor was designed to provide a flexible and extensible editing experience with features like structured document elements, keyboard shortcuts, and real-time content manipulation.',
    technologies: ['Next.js', 'TypeScript', 'Slate.js', 'Tailwind CSS'],
  },
];
