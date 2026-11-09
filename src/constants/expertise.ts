export interface ISkillItem {
  readonly name: string;
  readonly icon?: string;
  readonly category: 'production' | 'project';
}

export const TECHNICAL_TOOLKIT = {
  'Backend & Databases': [
    { name: 'Node.js', icon: 'nodedotjs', category: 'production' },
    { name: 'Express.js', icon: 'express', category: 'production' },
    { name: 'NestJS', icon: 'nestjs', category: 'project' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'production' },
    { name: 'MongoDB', icon: 'mongodb', category: 'production' },
    { name: 'MySQL', icon: 'mysql', category: 'production' },
  ],
  'Frontend Architecture': [
    { name: 'TypeScript', icon: 'typescript', category: 'production' },
    { name: 'React', icon: 'react', category: 'production' },
    { name: 'Next.js', icon: 'nextdotjs', category: 'production' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'production' },
    { name: 'Redux Toolkit', icon: 'redux', category: 'production' },
    { name: 'Framer Motion', icon: 'framer', category: 'production' },
  ],
  'Cloud, DevOps & Automation': [
    { name: 'Docker', icon: 'docker', category: 'production' },
    { name: 'Docker Compose', icon: 'docker', category: 'production' },
    { name: 'GitHub Actions', icon: 'githubactions', category: 'production' },
    { name: 'Kubernetes', icon: 'kubernetes', category: 'project' },
    { name: 'Helm', icon: 'helm', category: 'project' },
    { name: 'ArgoCD', icon: 'argo', category: 'project' },
    { name: 'Terraform', icon: 'terraform', category: 'project' },
  ],
} as const;

export type TExpertiseCategory = keyof typeof TECHNICAL_TOOLKIT;
export type TExpertiseName = (typeof TECHNICAL_TOOLKIT)[TExpertiseCategory][number]['name'];
export type TExpertiseIcon = Extract<(typeof TECHNICAL_TOOLKIT)[TExpertiseCategory][number], { icon: string }>['icon'];
