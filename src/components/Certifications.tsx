import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { certs } from '../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading num="05" title="Certifications" />
      <div className="cert-grid">
        {certs.map((c, i) => (
          <Reveal key={c.name} delay={i * 80} className="cert-card">
            <div className="cert-mark" style={{ '--c': c.color } as React.CSSProperties}>
              <span>{c.mark}</span>
            </div>
            <div className="cert-body">
              <h3 onClick={()=>window.open(c.link,'_blank')}
                style={{cursor:'pointer'}}>{c.name}</h3>
              <p className="mono">{c.issuer} · {c.year}</p>
            </div>
            <span className="cert-verify mono">verified ✓</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
