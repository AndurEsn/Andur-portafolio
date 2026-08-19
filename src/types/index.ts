export type ProjectCategory = 'Website' | 'Product' | 'UX Research';

export interface ProjectImpactStat {
  value: string;
  label: string;
}

export interface ProjectProcessStep {
  number: string;
  title: string;
  duration?: string;
  body: string;
  items?: string[];
  closing?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  subtitle?: string;
  body?: string;
  items?: string[];
  closing?: string;
  steps?: ProjectProcessStep[];
  stats?: ProjectImpactStat[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  category: ProjectCategory;
  description: string;
  intro: string;
  image: string;
  role: string;
  impact: string;
  impactStats: ProjectImpactStat[];
  duration: string;
  tools: string[];
  company?: string;
  sections: ProjectSection[];
}

export type MetricIcon = 'award' | 'briefcase' | 'globe' | 'sparkles' | 'projects' | 'flows' | 'hours';

export interface Metric {
  value: string;
  label: string;
  icon: MetricIcon;
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
    external?: boolean;
  };
}

export type AppState = 'splash' | 'normal' | 'loading' | 'error';
export type Theme = 'light' | 'dark';
export type Language = 'es' | 'en';
export type EntranceAnimation = 'move' | 'fade' | 'scale';

export type ToastVariant = 'default' | 'info' | 'success' | 'error';

export type ApproachStageIcon = 'discover' | 'define' | 'design' | 'build';
export type ApproachPartnerIcon = 'users' | 'product' | 'delivery';

export interface ApproachStage {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: ApproachStageIcon;
}

export interface ApproachPartner {
  title: string;
  description: string;
  icon: ApproachPartnerIcon;
}
