export type TCapabilityIcon = 'layers' | 'workflow' | 'gitBranch' | 'appWindow' | 'activity';

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
  icon?: TCapabilityIcon;
  problemStatement: string;
  outcomes: readonly string[];
  techStack: readonly ICapabilityTech[];
  learningNote?: string;
}

export const CAPABILITIES: readonly ICapability[] = [
  {
    id: '01',
    title: 'Scalable SaaS & System Architecture',
    icon: 'layers',
    problemStatement:
      'I help businesses turn complex product requirements into scalable platforms. From handling multiple clients within a single application to keeping their data secure and operations independent, I focus on building architectures that grow without becoming difficult to manage.',
    outcomes: [
      'Multi-tenant SaaS architectures with isolated client data and business operations',
      'Tenant-aware routing, middleware, and database management',
      'Integrated subscription billing and multi-party payment workflows',
      'Architecture decisions that balance scalability, security, and infrastructure costs',
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
    title: 'Backend Systems & Business Automation',
    icon: 'workflow',
    problemStatement:
      'I turn business processes into reliable software systems. Whether it involves managing institutional operations, automating administrative workflows, or connecting multiple services, I focus on reducing manual effort and making everyday operations more efficient.',
    outcomes: [
      'Business-driven REST APIs and maintainable backend architectures',
      'Automated institutional workflows, including HRM, clearance processing, and reporting',
      'Third-party integrations, webhooks, and cross-platform communication',
      'Reliable data processing, validation, and transactional database operations',
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
    title: 'DevOps & Delivery Automation',
    icon: 'gitBranch',
    problemStatement:
      'I streamline software delivery through containerization, CI/CD pipelines, and automated release workflows. My focus is on making development environments consistent, deployments repeatable, and software releases more reliable.',
    outcomes: [
      'Reproducible development and deployment environments using containerization',
      'Automated CI/CD pipelines for code quality, validation, and application builds',
      'Branch-based deployment strategies and automated release workflows',
      'Version-controlled infrastructure configuration and deployment automation',
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
    title: 'End-to-End Product Engineering',
    icon: 'appWindow',
    problemStatement:
      'I work across the entire application lifecycle, turning ideas and business requirements into functional, user-friendly software. My focus goes beyond making interfaces look good; I care about how the frontend, backend, and data layers work together as one maintainable product.',
    outcomes: [
      'Full-stack application development from requirements to production',
      'Responsive, accessible interfaces built around real user needs',
      'Efficient application state management and asynchronous data handling',
      'Reusable components and maintainable architectures that support product evolution',
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
    title: 'Cloud Infrastructure & Reliability',
    icon: 'activity',
    problemStatement:
      'I approach deployment and infrastructure with reliability, resource efficiency, and maintainability in mind. My focus is on understanding how applications run in production, managing deployment environments, and building infrastructure that can evolve with application demands.',
    outcomes: [
      'Containerized application environments and service orchestration',
      'Infrastructure as Code for repeatable and consistent environments',
      'Deployment health checks, monitoring, and centralized logging',
      'Resource planning and infrastructure optimization for varying workloads',
    ],
    techStack: [
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Helm', icon: 'helm' },
      { name: 'ArgoCD', icon: 'argo' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Grafana', icon: 'grafana' },
    ],
  },
] as const;
