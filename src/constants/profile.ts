import { experiences } from '@/constants/experiences-data';
import { formatDate } from '@/utils/date';
import { ExperienceItem } from '@/types/model';

// ─────────────────────────────────────────────
// Central Profile Constants
// Single source of truth for personal data used
// across components and the terminal file system.
// ─────────────────────────────────────────────

// ── Identity ──────────────────────────────────
export const PROFILE = {
  name: 'Nofil Zahid',
  title: 'Full Stack & DevOps Engineer',
  specialization: 'Cloud Infrastructure, Distributed Backend Systems & CI/CD Pipelines',
  location: 'Lahore, Pakistan',
  city: 'Lahore',
  country: 'Pakistan',
  availability: 'Open to Opportunities',
  focusArea: 'DevOps, Cloud Platform & Enterprise SaaS',
} as const;

// ── Contact ───────────────────────────────────
export const CONTACT = {
  email: 'nofilzahid.se@gmail.com',
  whatsapp: '+923092051143',
  social: {
    github: 'https://github.com/nofil-zahid',
    npm: 'https://www.npmjs.com/~nofil.dev',
    linkedin: 'https://www.linkedin.com/in/nofil-zahid/',
    twitter: 'https://x.com/nofil_zahid',
    whatsapp: 'https://wa.me/923092051143',
  },
} as const;

// ── About / Overview ──────────────────────────
export const ABOUT = {
  summary: [
    'I build end-to-end software products, from backend architecture and database design to user interfaces, integrations, and production deployments. My work focuses on turning business requirements into maintainable, scalable applications.',
    'I work across application architecture, business process automation, and delivery infrastructure, with particular attention to data integrity, system reliability, and efficient resource utilization.',
    'My engineering approach combines backend-focused problem solving with product thinking, ensuring that systems are not only technically sound but also practical for the people and businesses using them.',
  ],
  philosophy: [
    {
      title: 'Business-First Engineering',
      description:
        'Understand the business workflow first, then choose the simplest architecture that solves the actual problem.',
    },
    {
      title: 'Reliability Over Shortcuts',
      description:
        'Prioritize data integrity, predictable behavior, and proper validation over quick implementations that create long-term problems.',
    },
    {
      title: 'Automate Repetitive Work',
      description:
        'Replace error-prone manual processes with scripts, pipelines, and repeatable workflows wherever automation adds value.',
    },
    {
      title: 'Visibility Before Guesswork',
      description:
        'Use meaningful logs, metrics, and monitoring to understand system behavior and diagnose problems with evidence.',
    },
  ],
  quotes: [
    'The best systems solve real problems, not just technical ones.',
    'Choose the simplest architecture that reliably solves the problem, leaving room to scale.',
    "Clean architecture scales. Messy code doesn't.",
    "Performance is not optional — it's a feature.",
    'Good infrastructure is invisible when it works.',
    'Automation saves time and keeps environments predictable.',
    'Keep your setup simple until complexity is actually required.',
    'A good fix in staging is better than a quick patch in production.',
    'Clean code and clear logs make debugging effortless.',
    'Good developers write code. Great developers design systems.',
    'Simplicity is what makes systems truly powerful.',
  ],
} as const;

// ── Stack ─────────────────────────────────────
export const STACK = {
  current: 'Next.js 15 / TypeScript / Tailwind CSS v4',
} as const;

// ── Terminal File Content Generators ──────────
// These produce the text content used for the
// terminal filesystem's read-only files.

export const generateUserTxt = (): string =>
  [
    '[USER PROFILE]',
    `Name: ${PROFILE.name}`,
    `Title: ${PROFILE.title}`,
    `Specialization: ${PROFILE.specialization}`,
    `Location: ${PROFILE.location}`,
    `Availability: ${PROFILE.availability}`,
    '',
    '[OVERVIEW]',
    ...ABOUT.summary.map((p) => `  ${p}`),
  ].join('\n');

export const generateContactTxt = (): string =>
  [
    '[COMMUNICATION ENDPOINTS]',
    `Email: ${CONTACT.email}`,
    `WhatsApp: ${CONTACT.whatsapp}`,
    `Status: ${PROFILE.availability}`,
    '',
    '[SOCIAL LINKS]',
    `GitHub: ${CONTACT.social.github}`,
    `LinkedIn: ${CONTACT.social.linkedin}`,
    `Twitter: ${CONTACT.social.twitter}`,
  ].join('\n');

export const generateProjectsTxt = (
  projects: { title: string; description: string; technologies: string[] }[],
): string =>
  [
    '[SYSTEM PROJECTS]',
    ...projects.map((p) => `• ${p.title}\n  ${p.description}\n  Tech: ${p.technologies.join(', ')}`),
  ].join('\n\n');

export const generateExperienceTxt = (items: ExperienceItem[] = experiences): string => {
  const formattedItems = items.map((exp) => {
    const companyHeader = exp.website ? `COMPANY: ${exp.company} (${exp.website})` : `COMPANY: ${exp.company}`;
    const period = `${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`;
    const highlights = exp.responsibilities.map((r) => `  • ${r}`).join('\n');

    return [companyHeader, `ROLE:    ${exp.role}`, `PERIOD:  ${period}`, 'HIGHLIGHTS:', highlights].join('\n');
  });

  return [
    '[WORK EXPERIENCE & JOB HISTORY]',
    '==================================================',
    formattedItems.join('\n--------------------------------------------------\n'),
    '==================================================',
  ].join('\n');
};
