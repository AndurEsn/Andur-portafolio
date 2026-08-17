export type ProjectCategory = 'Website' | 'Product' | 'UX Research';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription: string;
  image: string;
  role: string;
  impact: string;
  duration: string;
  tools: string[];
  company?: string;
}

export type MetricIcon = 'award' | 'briefcase' | 'globe' | 'sparkles' | 'projects' | 'flows' | 'hours';

export interface Metric {
  value: string;
  label: string;
  icon: MetricIcon;
}

export interface RoadmapItem {
  years: string;
  tenure: string;
  company: string;
  role: string;
  description: string;
  highlight: string;
}

export interface HeroContent {
  avatar: string;
  name: string;
  role: string;
  title: string;
  subtitle: string;
}

export interface FAQItem {
  category: 'design' | 'collaboration' | 'profile';
  question: string;
  answer: string;
  link?: {
    label: string;
    href: string;
    download?: string;
    external?: boolean;
  };
}

export type AppState = 'splash' | 'normal' | 'loading' | 'error';
export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';
export type EntranceAnimation = 'move' | 'fade' | 'scale';

export type ToastVariant = 'default' | 'info' | 'success' | 'error';
