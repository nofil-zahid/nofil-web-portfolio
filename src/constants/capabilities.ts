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
    title: 'Scalable SaaS & System Architecture',
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
    problemStatement:
      'Getting an application working locally is only part of the job. I focus on making software easier to build, test, deploy, and maintain by automating repetitive engineering tasks and establishing consistent delivery workflows.',
    outcomes: [
      'Reproducible development and production environments using containerization',
      'Automated CI/CD pipelines for code quality, validation, and application builds',
      'Secure deployment and release workflows with branch-based automation',
      'Tokenless package publishing and authentication using OpenID Connect (OIDC)',
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
    title: 'System Reliability & Infrastructure Engineering',
    problemStatement:
      'I approach infrastructure with the bigger picture in mind: how a system behaves under load, where failures can happen, and what it takes to keep applications dependable. I explore infrastructure strategies and architectural trade-offs to build systems that are easier to operate and scale.',
    outcomes: [
      'Evaluating monolithic and microservice architectures against real application requirements',
      'Infrastructure automation and environment configuration practices',
      'Monitoring and observability strategies for application health and performance',
      'Exploring container orchestration, deployment automation, and distributed system operations',
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
      'Continuously building hands-on expertise in cloud infrastructure, orchestration, and production observability.',
  },
] as const;
