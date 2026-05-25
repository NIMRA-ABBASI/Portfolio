import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { TechBadge } from './TechBadge';
import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section id="skills" className="section section-tight">
      <SectionHeading num="02" title="Skills & stack" />
      <div className="skills-wrap">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.label} delay={gi * 80} className="skill-group">
            <div className="skill-group-label">
              <span className="mono">/ {g.label}</span>
              <span className="skill-group-line" />
            </div>
            <div className="skill-grid">
              {g.items.map(id => (
                <TechBadge key={id} id={id} size={84} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
