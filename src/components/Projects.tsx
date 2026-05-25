import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { FolderIcon, GithubIcon, ExternalIcon, ArrowIcon } from './icons/Icons';
import { techBadges } from './icons/Icons';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading num="04" title="Things I've built" />
      <div className="proj-grid">
        {projects.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 60}
            className="proj-card"
            style={{ '--proj-accent': p.accent } as React.CSSProperties}
          >
            <div className="proj-card-top">
              <span className="proj-folder" style={{ color: p.accent }}>
                <FolderIcon />
              </span>
              <div className="proj-card-actions">
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GithubIcon width={18} height={18} />
                </a>
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
                  <ExternalIcon width={16} height={16} />
                </a>
              </div>
            </div>
            <h3 className="proj-name">{p.name}</h3>
            <p className="proj-blurb">{p.blurb}</p>
            <ul className="proj-tags">
              {p.tags.map(t => <li key={t}>{techBadges[t]?.label ?? t}</li>)}
            </ul>
            <div className="proj-card-foot">
              <a className="proj-demo-link" href={p.demo} target="_blank" rel="noreferrer">
                Live demo <ArrowIcon style={{ marginLeft: 6 }} />
              </a>
              <a className="proj-code-link mono" href={p.github} target="_blank" rel="noreferrer">
                view code
              </a>
            </div>
            <span className="proj-glow" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
