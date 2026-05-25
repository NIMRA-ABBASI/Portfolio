import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    company: 'Pakistan Air Force',
    role: 'Web Application Developer',
    period: 'Jul 2024 — Present',
    location: 'On-site · Islamabad',
    summary: 'Building internal web systems that improve efficiency and streamline internal processes. Working across the stack — from interactive frontends to APIs, data models, and deployments.',
    projects: [
      {
        name: 'Pilot Electronic Folder',
        role: 'Frontend Developer',
        contributions: 'Built dynamic dashboards with real-time data visualization using React Hooks. Developed reusable components, integrated Spring Boot APIs with complex state management, and optimized performance through refactoring and efficient component structuring.',
        tags: ['react', 'spring boot', 'tailwind','core ui'],
      },
      {
        name: 'Office Automation System',
        role: 'Full Stack Developer',
        contributions:  'Built the Planner UI and core modules including PIN Authentication and Help & Support. Developed .NET RESTful APIs, optimized SQL Server stored procedures through query profiling, and implemented structured error handling to improve system reliability.',
        tags: ['angular', '.net', 'sqlserver', ],
      },
      {
        name: 'Biometric Desktop Application',
        role: 'Software Developer',
        contributions: 'Developed a Windows-based biometric app using C# and Windows Forms. Designed interfaces for fingerprint capture and user management, and integrated a third-party SDK for fingerprint acquisition and authentication workflows.',
        tags: ['c#', 'windows forms', 'biometric sdk'],
      },
    ],
  },
];
