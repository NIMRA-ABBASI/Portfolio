import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

export function SideLeft() {
  return (
    <div className="side side-left" aria-hidden="false">
      <ul className="side-links">
        <li><a href="https://github.com/NIMRA-ABBASI" aria-label="GitHub"><GithubIcon /></a></li>
        <li><a href="https://www.linkedin.com/in/nimra-abbasi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a></li>
        <li><a href="mailto:nimraabbasi@gmail.com" aria-label="Email"><MailIcon /></a></li>
      </ul>
      <div className="side-line" />
    </div>
  );
}

export function SideRight({ email }: { email: string }) {
  return (
    <div className="side side-right">
      <a className="side-email" href={`mailto:${email}`}>{email}</a>
      <div className="side-line" />
    </div>
  );
}
