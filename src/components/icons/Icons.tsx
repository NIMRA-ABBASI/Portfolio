import type { TechBadgeData } from '../../types';

type SvgProps = React.SVGAttributes<SVGElement>;

export function GithubIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.77 5.07 5.07 0 0 0 19.91 3S18.73 2.65 16 4.55a13.38 13.38 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3A5.07 5.07 0 0 0 5 6.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24" />
    </svg>
  );
}

export function LinkedinIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function MailIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function ExternalIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function DownloadIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function FolderIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function SunIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function MoonIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function PhantomIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ArrowIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export const techBadges: Record<string, TechBadgeData> = {
  react:      { label: 'React',       short: 'R',   color: '#61DAFB' },
  angular:    { label: 'Angular',     short: 'A',   color: '#DD0031' },
  ts:         { label: 'TypeScript',  short: 'TS',  color: '#3178C6' },
  tailwind:   { label: 'Tailwind',    short: 'tw',  color: '#06B6D4' },
  js:         { label: 'JavaScript',  short: 'JS',  color: '#F7DF1E', dark: true },
  html:       { label: 'HTML',        short: 'HT',  color: '#E34F26' },
  css:        { label: 'CSS',         short: 'CS',  color: '#1572B6' },
  spring:     { label: 'Spring Boot', short: 'Sp',  color: '#6DB33F' },
  node:       { label: 'Node.js',     short: 'Nd',  color: '#5FA04E' },
  dotnet:     { label: '.NET',        short: '.N',  color: '#512BD4' },
  sqlserver:  { label: 'SQL Server',  short: 'SQ',  color: '#A91D22' },
  mongo:      { label: 'MongoDB',     short: 'Mg',  color: '#47A248' },
  git:        { label: 'Git',         short: 'Gi',  color: '#F05033' },
  docker:     { label: 'Docker',      short: 'Dk',  color: '#2496ED' },
  sourcetree: { label: 'Sourcetree',  short: 'St',  color: '#0052CC' },
  ar:         { label: 'AR / Unity',  short: 'AR',  color: '#9B6DFF' },
  redux:      { label: 'Redux',       short: 'Rx',  color: '#764ABC' },
  express:    { label: 'Express',     short: 'Ex',  color: '#999999' },
  firebase:   { label: 'Firebase',    short: 'Fb',  color: '#FFA000' },
  socket:     { label: 'Socket.io',   short: 'Sk',  color: '#9B9B9B' },
};
