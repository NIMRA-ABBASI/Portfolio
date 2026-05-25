export type Theme = 'dark' | 'phantom' | 'light';

export interface TweakValues {
  accent: string;
  animColor: string;
  density: number;
  showSideBars: boolean;
  fontScale: number;
  heroBg: 'galaxy' | 'network';
}

export interface TechBadgeData {
  label: string;
  short: string;
  color: string;
  dark?: boolean;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExpProject {
  name: string;
  role: string;
  contributions: string;
  tags: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  projects: ExpProject[];
}

export interface Project {
  name: string;
  blurb: string;
  tags: string[];
  accent: string;
  github: string;
  demo: string;
}

export interface Cert {
  name: string;
  issuer: string;
  year: string;
  mark: string;
  color: string;
  link:string;
}
