// ─────────────────────────────────────────────
// Central Profile Constants
// Single source of truth for personal data used
// across components and the terminal file system.
// ─────────────────────────────────────────────

// ── Identity ──────────────────────────────────
export const PROFILE = {
  name: 'Nofil Zahid',
  title: 'Full Stack Engineer',
  specialization: 'Scalable Systems, API Design & Frontend Engineering',
  location: 'Lahore, Pakistan',
  availability: 'Open to Opportunities',
  focusArea: 'Enterprise & SaaS Applications',
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
    'I am a backend-focused Full Stack Engineer, delivers practical and efficient solutions for real-world applications. I take ownership of the systems I work on from development to deployment, approaching challenges with research, analysis, and hands-on implementation to build scalable and maintainable architectures.',
    'When a solution does not exist, I design it from the ground up by evaluating options, experimenting, and implementing the most effective approach. I focus on creating systems that are not only functional but also performant, reliable, and easy to extend.',
    'Additionally, I have developed strong design skills to ensure that the user experience complements the backend logic, resulting in applications that are both powerful and intuitive.',
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
  ],
  quotes: [
    'The best systems solve real problems, not just technical ones.',
    "Clean architecture scales. Messy code doesn't.",
    "Performance is not optional — it's a feature.",
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
