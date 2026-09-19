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
  availability: 'Open to Opportunities',
  focusArea: 'DevOps, Cloud Platform & Enterprise SaaS',
} as const;

// ── Contact ───────────────────────────────────
export const CONTACT = {
  email: 'nofilzahid.se@gmail.com',
  whatsapp: '+923092051143',
  social: {
    github: 'https://github.com/nofil-zahid',
    linkedin: 'https://www.linkedin.com/in/nofil-zahid/',
    twitter: 'https://x.com/nofil_zahid',
    whatsapp: 'https://wa.me/923092051143',
  },
} as const;

// ── About / Overview ──────────────────────────
export const ABOUT = {
  summary: [
    "I'm a Full Stack & DevOps Engineer who builds end-to-end digital solutions. I take ownership of systems from designing clean backend logic and scalable architectures to automating deployments and managing live infrastructure.",
    'I focus on creating systems that run reliably and efficiently. By automating workflows, setting up proactive monitoring, and maintaining clean release pipelines, I make sure platforms stay stable and performant under real-world load.',
    'While much of my focus is on backend architecture and platform automation, I pay close attention to user experience - ensuring every feature is fast, responsive, and intuitive for the end user.',
  ],
  philosophy: [
    {
      title: 'Scalable by Design',
      description:
        'I build systems with growth in mind, focusing on clean architecture and modular design that can handle real-world complexity.',
    },
    {
      title: 'Problem-Driven Development',
      description:
        'I focus on solving real problems, not just writing code but ensuring performance, usability, and long-term maintainability.',
    },
    {
      title: 'Automate Early',
      description:
        'If a task needs to be done more than twice, it should be automated through version-controlled scripts and pipelines.',
    },
    {
      title: 'Build for Visibility',
      description:
        'A system is much easier to maintain when you have clear logs, metrics, and alerts to show you what is happening under the hood.',
    },
  ],
  quotes: [
    'The best systems solve real problems, not just technical ones.',
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
