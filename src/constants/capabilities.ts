export interface IProofPoint {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ICapability {
  id: string;
  title: string;
  categoryTag: string;
  problemStatement: string;
  outcomes: string[];
  techStack: string[];
  proof: IProofPoint[];
  learningNote?: string;
}

export const CAPABILITIES: readonly ICapability[] = [
  {
    id: 'CAPABILITY_01',
    title: 'SaaS Architecture & Multi-Tenancy',
    categoryTag: 'SYSTEMS_ISOLATION',
    problemStatement:
      'Designing web platforms that serve multiple business client tenants safely while maintaining strict data boundaries and clean routing logic.',
    outcomes: [
      'PostgreSQL multi-schema tenant data isolation models',
      'Tenant-aware application middleware and route shielding',
      'Multi-party PayPal payment subscription billing workflows',
      'Scalable multi-client database connection strategies',
    ],
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'PayPal API'],
    proof: [
      {
        label: 'Commercial SaaS Engineering at STACK360',
        href: '/experience',
      },
    ],
  },
  {
    id: 'CAPABILITY_02',
    title: 'Backend Engineering & Workflow Systems',
    categoryTag: 'API_ARCHITECTURE',
    problemStatement:
      'Building robust REST APIs, server-side data operations, and business rules to handle administrative and institutional processes reliably.',
    outcomes: [
      'REST API design, routing, and controller architectures',
      'Institutional workflows (clearance processing, HRM, dashboards)',
      'Third-party service integrations including Firebase and webhooks',
      'Transactional database management across relational and document stores',
    ],
    techStack: ['Node.js', 'Express.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    proof: [
      {
        label: 'Institutional Systems & REST APIs',
        href: '/experience',
      },
    ],
  },
  {
    id: 'CAPABILITY_03',
    title: 'Deployment & Infrastructure Automation',
    categoryTag: 'DEVOPS_PIPELINES',
    problemStatement:
      'Standardizing application execution and delivery pipelines to make deployments consistent, reproducible, and easily traceable.',
    outcomes: [
      'Containerized application environments using Docker and Compose',
      'Automated CI/CD pipelines enforcing formatting, linting, and build checks',
      'Secure release workflows with conditional branch automation',
      'OIDC-authenticated package publishing pipelines without static tokens',
    ],
    techStack: ['Docker', 'GitHub Actions', 'Docker Compose', 'Linux', 'Vercel'],
    proof: [
      {
        label: 'Automated CI/CD & Build Infrastructure',
        href: '/projects',
      },
    ],
  },
  {
    id: 'CAPABILITY_04',
    title: 'Full-Stack Product Engineering',
    categoryTag: 'PRODUCT_DELIVERY',
    problemStatement:
      'Translating product designs and requirements into responsive, type-safe web applications with optimized user interactions.',
    outcomes: [
      'Dynamic metadata systems and structured schema implementations',
      'Accessible, responsive layouts with custom terminal UI elements',
      'Client-side state management and asynchronous data fetching',
      'Component-driven architecture built for long-term maintainability',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit'],
    proof: [
      {
        label: 'SEO Engineering & Interactive Web Apps',
        href: '/projects',
      },
    ],
  },
  {
    id: 'CAPABILITY_05',
    title: 'Reliability & System Observability Patterns',
    categoryTag: 'SYSTEMS_OBSERVABILITY',
    problemStatement:
      'Applying cloud orchestration tooling and observability stacks to monitor system health and evaluate architecture trade-offs.',
    outcomes: [
      'Container orchestration setup using Kubernetes and Helm',
      'Infrastructure-as-Code setups and configuration management',
      'Metrics collection and log aggregation using Prometheus, Grafana, and Loki',
      'Evaluations of microservice vs. monolithic trade-offs for target workloads',
    ],
    techStack: ['Kubernetes', 'Helm', 'ArgoCD', 'Terraform', 'Prometheus', 'Grafana'],
    proof: [],
    learningNote:
      'Active focus area: Developing deeper operational expertise through hands-on cloud automation projects.',
  },
] as const;
