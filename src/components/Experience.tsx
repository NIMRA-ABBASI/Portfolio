import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { techBadges } from './icons/Icons';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading num="03" title="Where I've worked" />
      <div className="timeline">
        {experience.map((e, i) => (
          <Reveal key={i} className="tl-item">
            <div className="tl-marker">
              <span className="tl-dot" />
              <span className="tl-line" />
            </div>
            <div className="tl-content">
              <div className="tl-head">
                <h3 className="tl-role">
                  {e.role} <span className="tl-at">@</span>{' '}
                  <a className="tl-company" href="#" onClick={ev => ev.preventDefault()}>{e.company}</a>
                </h3>
                <p className="tl-period mono">{e.period} · {e.location}</p>
              </div>
              <p className="tl-summary">{e.summary}</p>
              <div className="tl-projects">
                {e.projects.map((p, j) => (
                  <div key={j} className="tl-proj">
                    <div className="tl-proj-head">
                      <h4>{p.name}</h4>
                      <span className="tl-proj-role mono">{p.role}</span>
                    </div>
                    <p>{p.contributions}</p>
                    <div className="chips">
                      {p.tags.map(t => (
                        <span
                          key={t}
                          className="chip"
                          style={{ '--c': techBadges[t]?.color ?? '#64ffda' } as React.CSSProperties}
                        >
                          {techBadges[t]?.label ?? t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
