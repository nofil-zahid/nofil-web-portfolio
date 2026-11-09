import { FAQItem } from '@/types/model';

export const faqData: FAQItem[] = [
  {
    question: 'What is your primary tech stack?',
    answer:
      'My core stack is built on TypeScript across the full lifecycle — React and Next.js on the frontend, paired with Node.js, Express, or NestJS and PostgreSQL on the backend. However, I treat tools as means to an end: I select technologies based on business constraints, data complexity, and operational costs rather than personal preference.',
  },
  {
    question: 'Do you handle end-to-end project development?',
    answer:
      'Yes. I take complete ownership of the engineering lifecycle: understanding existing business workflows, designing relational and multi-tenant data models, implementing secure APIs, crafting responsive UIs, and establishing automated CI/CD and containerized deployments.',
  },
  {
    question: 'How do you approach code quality and testing?',
    answer:
      'I enforce automated quality gates early. This includes strict TypeScript type safety, ESLint and Prettier for consistent formatting, pre-commit checks with Husky, and automated CI pipelines (GitHub Actions) that catch regressions, lint errors, and build issues before code reaches staging or production.',
  },
  {
    question: 'How do you write scalable and maintainable code?',
    answer:
      'By avoiding premature complexity and designing with clear separation of concerns. I keep architectures as simple as possible to solve the immediate business problem while enforcing modular boundaries (such as PostgreSQL multi-schema tenant isolation), decoupled service layers, and observable systems that are easy to debug and maintain.',
  },
  {
    question: 'How do you choose the right architecture for a project?',
    answer:
      'I evaluate architectures against actual business requirements, team capacity, and infrastructure budget rather than following industry trends. I prefer straightforward, maintainable architectures that reliably solve the operational challenge over unnecessary microservices or over-engineered infrastructure.',
  },
  {
    question: 'Are you available for freelance or full-time roles?',
    answer: 'I am currently open to high-impact software engineering roles and consulting contracts.',
  },
  {
    question: 'How long does it take for you to respond?',
    answer:
      'I usually respond within 1 to 2 business days. For urgent inquiries, reaching out via LinkedIn or WhatsApp is fastest.',
  },
];
