export const expertise = {
  devops_and_cloud: [
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'Helm', icon: 'helm' },
    { name: 'ArgoCD', icon: 'argo' },
    { name: 'Terraform', icon: 'terraform' },
    { name: 'Ansible', icon: 'ansible' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Docker Compose', icon: 'docker' },
    { name: 'AWS' },
  ],
  'ci/cd': [
    { name: 'GitHub Actions', icon: 'githubactions' },
    { name: 'GitLab CI/CD', icon: 'gitlab' },
    { name: 'Jenkins', icon: 'jenkins' },
  ],
  observability_and_monitoring: [
    { name: 'Prometheus', icon: 'prometheus' },
    { name: 'Grafana', icon: 'grafana' },
    { name: 'Loki', icon: 'grafana' },
  ],
  backend: [
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express.js', icon: 'express' },
    { name: 'NestJS', icon: 'nestjs' },
    { name: 'REST APIs' },
    { name: 'WebSockets' },
  ],
  architecture: [
    { name: 'Multi-Tenant SaaS Systems' },
    { name: 'Microservices Architecture' },
    { name: 'Scalable Web Architecture' },
    { name: 'Monolithic Architecture' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
  ],
  third_party_and_payments: [
    { name: 'Stripe', icon: 'stripe' },
    { name: 'PayPal API', icon: 'paypal' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'Vercel', icon: 'vercel' },
  ],
  frontend: [
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'Redux Toolkit', icon: 'redux' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Slate.js' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'MUI', icon: 'mui' },
  ],
} as const;

export type TExpertiseCategory = keyof typeof expertise;
export type TExpertiseName = (typeof expertise)[TExpertiseCategory][number]['name'];
export type TExpertiseIcon = Extract<(typeof expertise)[TExpertiseCategory][number], { icon: string }>['icon'];
