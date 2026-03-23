'use client';
import { ExperienceItem } from "@/types/model";
import { Briefcase, Code } from "lucide-react";

export const experiences: ExperienceItem[] = [
  {
    role: "Associate Software Engineer",
    company: "STACK360",
    startDate: new Date(2025, 6),
    endDate: null,
    responsibilities: [
      "Designed and implemented a multi-tenant SaaS architecture using Next.js and Express.js.",
      "Implemented PostgreSQL multi-schema strategy for tenant data isolation and scalable routing.",
      "Integrated multi-party PayPal payment flow for subscription-based SaaS billing.",
      "Contributed to client projects with UI enhancements, Firebase integrations, and improved styling systems.",
    ],
    icon: Code,
  },
  {
    role: "MERN Stack Developer",
    company: "Directorate of Information Technology, GCUL",
    startDate: new Date(2023, 10),
    endDate: new Date(2025, 6),
    responsibilities: [
      "Developed full-stack features and secure APIs across internal systems including HRM, SFC, ORUP, SRMS, and LMS.",
      "Built HR reporting dashboards for academic and administrative staff.",
      "Implemented final-year student Clearance Module with challan and fee verification in the SFC system.",
      "Improved alumni membership management with export and editing tools in ORUP.",
      "Enhanced data handling and workflows in SRMS.",
      "Built and deployed a Dak Management System for tracking departmental file transfers."
    ],
    icon: Briefcase,
  }
];
