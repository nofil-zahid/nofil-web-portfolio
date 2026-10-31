import { Metadata } from 'next';
import { routes } from '@/constants/routes';
import { ABOUT, PROFILE, CONTACT } from '@/constants/profile';
import { envVars } from '@/config/env';

export const SITE_URL = envVars.NEXT_PUBLIC_SITE_URL;
export const SITE_NAME = `${PROFILE.name} Portfolio`;
export const SITE_TITLE = `${PROFILE.name} | ${PROFILE.title}`;
export const SITE_DESCRIPTION = `Interactive terminal portfolio of ${PROFILE.name}, ${PROFILE.title}.`;

export const CORE_SKILLS = [
  'DevOps',
  'Full Stack Development',
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'CI/CD Pipelines',
  'Distributed Systems',
] as const;

export const SEO_KEYWORDS = [
  PROFILE.name,
  'Full Stack Engineer',
  'DevOps Engineer',
  'Software Engineer',
  'Cloud Architecture',
  'API design',
  'scalable systems',
  `${PROFILE.city} ${PROFILE.country}`,
  ...CORE_SKILLS,
];

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${PROFILE.name}`,
  },
  description: ABOUT.summary[0],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: SITE_TITLE,
    description: ABOUT.summary[0],
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: ABOUT.summary[0],
    creator: CONTACT.social.twitter.replace('https://x.com/', '@'),
  },
};

export const pageMetadata: Record<string, Metadata> = {
  [routes.root]: {
    title: 'Home',
    description:
      'Full Stack & DevOps Engineer portfolio of Nofil Zahid specializing in scalable cloud platforms, distributed backend systems, and modern web architectures.',
    alternates: {
      canonical: routes.root,
    },
  },
  [routes.ui.whoAmI]: {
    title: 'Who Am I',
    description:
      'Learn about Nofil Zahid, Full Stack & DevOps Engineer specializing in scalable cloud platforms, distributed systems, and modern web architectures.',
    alternates: {
      canonical: routes.ui.whoAmI,
    },
  },
  [routes.ui.faqs]: {
    title: 'FAQs',
    description:
      'Frequently asked questions regarding technical stack, platform architecture, dev methodology, and hiring availability.',
    alternates: {
      canonical: routes.ui.faqs,
    },
  },
  [routes.ui.projects]: {
    title: 'Projects',
    description:
      'Featured full-stack applications, CLI utilities, mobile platforms, and open-source systems engineered by Nofil Zahid.',
    alternates: {
      canonical: routes.ui.projects,
    },
  },
  [routes.ui.contact]: {
    title: 'Contact Me',
    description:
      'Initialize secure transmission and get in touch with Nofil Zahid for full-stack engineering roles, DevOps contracts, and consulting.',
    alternates: {
      canonical: routes.ui.contact,
    },
  },
  [routes.ui.expertise]: {
    title: 'Expertise',
    description:
      'Comprehensive technical skill set and tooling: Next.js, Node.js, TypeScript, PostgreSQL, Docker, Kubernetes, and CI/CD automation.',
    alternates: {
      canonical: routes.ui.expertise,
    },
  },
  [routes.ui.experience]: {
    title: 'Experience',
    description:
      'Engineering career history, multi-tenant SaaS architecture at STACK360, and institutional management systems at Directorate of IT, GCUL.',
    alternates: {
      canonical: routes.ui.experience,
    },
  },
};
