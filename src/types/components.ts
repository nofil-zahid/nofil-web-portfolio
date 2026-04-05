import { ReactNode } from 'react';
import { ExperienceItem } from './model';
import { ToastPosition, TypeOptions } from 'react-toastify';

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface DynamicRoute<T = string> {
  validatedParam: T;
}

export interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export type Alignment = 'left' | 'center' | 'right';

export interface SectionHeaderProps {
  title: string;
  description: string;
  tag?: string;
  align?: Alignment;
  className?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  screenshotUrl?: string;
  maxDescriptionLines?: number;
  maxTechTags?: number;
}

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
  isLoading?: boolean;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  index: string | number;
  multiline?: boolean;
  error?: string;
  showCounter?: boolean;
}

export interface TimelineProps {
  items: ExperienceItem[];
}

export interface LoadingContextType {
  hasLoaded: boolean;
}

export interface InitialLoaderProps {
  onFinished?: () => void;
}

export interface ProgressBarProps {
  progress: number;
}

export interface BiometricAvatarProps {
  src?: string;
  size?: number;
  className?: string;
}

export interface ToastType {
  text: string;
  type: TypeOptions;
  position?: ToastPosition;
}
