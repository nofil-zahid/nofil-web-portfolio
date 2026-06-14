export const expertise = {
  frontend: [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Redux Toolkit', icon: 'redux' },
    { name: 'Slate.js' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'MUI', icon: 'mui' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Nest.js', icon: 'nestjs' },
    { name: 'REST APIs' },
    { name: 'WebSockets' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Firebase', icon: 'firebase' },
  ],
  architecture: [
    { name: 'Multi-Tenant SaaS Systems' },
    { name: 'Monolith' },
    { name: 'Micro-Services' },
    { name: 'Scalable Web Architecture' },
  ],
  containerization: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Docker Compose', icon: 'docker' },
  ],
  payment_integrations: [
    { name: 'Stripe', icon: 'stripe' },
    { name: 'PayPal API', icon: 'paypal' },
  ],
  third_party_tools: [
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Github Actions', icon: 'githubactions' },
  ],
} as const;

export type TExpertiseCategory = keyof typeof expertise;
export type TExpertiseName = (typeof expertise)[TExpertiseCategory][number]['name'];
export type TExpertiseIcon = Extract<(typeof expertise)[TExpertiseCategory][number], { icon: string }>['icon'];
