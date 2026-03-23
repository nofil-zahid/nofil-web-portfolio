import { ProjectCardProps } from "@/types/components";

export const projects: ProjectCardProps[] = [
  {
    title: "Document Editor",
    description: "A modern web-based document editor built with Slate.js that supports rich text formatting, custom blocks, and dynamic content editing. The editor was designed to provide a flexible and extensible editing experience with features like structured document elements, keyboard shortcuts, and real-time content manipulation.",
    technologies: ["Next.js", "TypeScript", "Slate.js", "Tailwind CSS"],
  },
  {
    title: "ClassHub",
    description: "A role-based learning management platform that supports assignments, quizzes, project tracking, and feedback. It includes real-time chat, notifications, email alerts, file sharing, and activity logs to streamline collaboration between students and instructors.",
    technologies: ["React", "Express.js", "MySQL", "Firebase", "Gemini API", "CopyLeaks API"],
  },
  {
    title: "QCMS (Quranic Content Management & Search System)",
    description: "A specialized search engine for analyzing Arabic words from user input. The system displays root forms, related lemmas, derivative words, and corresponding Quranic verses with advanced filtering by word type, tags, and references.",
    technologies: ["React", "TypeScript", "Node.js", "Material UI", "PostgreSQL", "Sphinx", "Docker", "Nginx"],
  },
  {
    title: "Fit-Nation",
    description: "A fitness management web application that handles authentication, workout plans, subscription management, and real-time updates. The system uses REST APIs and WebSockets for interactive and responsive user experiences.",
    technologies: ["React (TypeScript)", "Node.js", "MongoDB", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Crontab Text Explainer",
    description: "An open-source tool that helps developers and system administrators understand and generate cron expressions. It provides interactive explanations, visualizations, and random cron expression generation.",
    technologies: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/nofil-zahid/crontab-text-explainer",
    liveUrl: "https://nofil-zahid.github.io/crontab-text-explainer/",
    screenshotUrl: "/projects/crontab.png",
  },
  {
    title: "Crontab Descriptor",
    description: "A tool built with Java that interprets crontab expressions and translates them into clear, human-readable explanations. Built entirely from scratch without any external libraries, this tool is perfect for anyone looking to demystify crontab strings.",
    technologies: ["Java", "Linux", "CronJobs"],
    repoUrl: "https://github.com/nofil-zahid/Crontab-Descriptor",
  },
];
