import { LucideIcon } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  responsibilities: string[];
  icon?: LucideIcon;
}
