import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading num="01" title="About me" />
      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            Hello! I'm Nimra — a developer based in Islamabad who enjoys turning
            tangled requirements into clear, usable software. I started with
            curiosity about <em>how websites work</em>, and that small itch grew
            into a career building full-stack web apps.
          </p>
          <p>
            Today I work at the <span className="hl">Pakistan Air Force</span>,
            building internal software systems and full-stack applications that
            support day-to-day operations.
          </p>
          <p>
            I'm always learning — whether it's a new framework, tool, or
            concept. Curiosity is what got me into development, and it's what
            keeps me going.
          </p>
          <p className="mono mono-line">
            A few technologies I've been working with recently:
          </p>
          <ul className="check-list">
            <li>React, Angular & TypeScript</li>
            <li>Spring Boot & Node.js</li>
            <li>SQL Server & MongoDB</li>
            <li>.NET & C#</li>
          </ul>
        </Reveal>
        <Reveal delay={150} className="about-photo">
          <div className="photo-frame">
            <div className="photo-slot" aria-label="Portrait placeholder">
              <img
                src="nimra.png"
                alt="Nimra Abbasi"
                style={
                  {
                    // width: "100%",
                    // height: "100%",
                    // objectFit: "cover",
                    // borderRadius: "4px",
                  }
                }
              />
            </div>
            <span className="photo-border" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
