export interface IProofPoint {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ICapabilityTech {
  readonly name: string;
  readonly icon?: string;
}

export interface ICapability {
  id: string;
  title: string;
  problemStatement: string;
  outcomes: readonly string[];
  techStack: readonly ICapabilityTech[];
  learningNote?: string;
}

export const CAPABILITIES: readonly ICapability[] = [
  {
    id: '01',
    title: 'SaaS Architecture & Multi-Tenancy',
    problemStatement:
      'Designing web platforms that serve multiple business client tenants safely while maintaining strict data boundaries and clean routing logic.',
    outcomes: [
      'PostgreSQL multi-schema tenant data isolation models',
      'Tenant-aware application middleware and route shielding',
      'Multi-party PayPal payment subscription billing workflows',
      'Scalable multi-client database connection strategies',
    ],
    techStack: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'PayPal API', icon: 'paypal' },
    ],
  },
  {
    id: '02',
    title: 'Backend Engineering & Workflow Systems',
    problemStatement:
      'Building robust REST APIs, server-side data operations, and business rules to handle administrative and institutional processes reliably.',
    outcomes: [
      'REST API design, routing, and controller architectures',
      'Institutional workflows (clearance processing, HRM, dashboards)',
      'Third-party service integrations including Firebase and webhooks',
      'Transactional database management across relational and document stores',
    ],
    techStack: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    id: '03',
    title: 'Deployment & Infrastructure Automation',
    problemStatement:
      'Standardizing application execution and delivery pipelines to make deployments consistent, reproducible, and easily traceable.',
    outcomes: [
      'Containerized application environments using Docker and Compose',
      'Automated CI/CD pipelines enforcing formatting, linting, and build checks',
      'Secure release workflows with conditional branch automation',
      'OIDC-authenticated package publishing pipelines without static tokens',
    ],
    techStack: [
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Docker Compose', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: '04',
    title: 'Full-Stack Product Engineering',
    problemStatement:
      'Translating product designs and requirements into responsive, type-safe web applications with optimized user interactions.',
    outcomes: [
      'Dynamic metadata systems and structured schema implementations',
      'Accessible, responsive layouts with custom terminal UI elements',
      'Client-side state management and asynchronous data fetching',
      'Component-driven architecture built for long-term maintainability',
    ],
    techStack: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Redux Toolkit', icon: 'redux' },
    ],
  },
  {
    id: '05',
    title: 'Reliability & System Observability Patterns',
    problemStatement:
      'Applying cloud orchestration tooling and observability stacks to monitor system health and evaluate architecture trade-offs.',
    outcomes: [
      'Container orchestration setup using Kubernetes and Helm',
      'Infrastructure-as-Code setups and configuration management',
      'Metrics collection and log aggregation using Prometheus, Grafana, and Loki',
      'Evaluations of microservice vs. monolithic trade-offs for target workloads',
    ],
    techStack: [
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Helm', icon: 'helm' },
      { name: 'ArgoCD', icon: 'argo' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Grafana', icon: 'grafana' },
    ],
    learningNote:
      'Active focus area: Developing deeper operational expertise through hands-on cloud automation projects.',
  },
] as const;
