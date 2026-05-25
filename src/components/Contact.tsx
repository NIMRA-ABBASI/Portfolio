import { Reveal } from './Reveal';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon } from './icons/Icons';

export function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <Reveal>
        <p className="contact-eyebrow mono">06. what's next</p>
        <h2 className="contact-title">Get in touch.</h2>
        <p className="contact-body">
          My inbox is open — whether you have a question, a project to discuss, or just want to say hi.
          I read everything and try to reply within a day or two.
        </p>
        <a className="btn btn-primary btn-lg" href="mailto:nimraabbasi4074@gmail.com">
          Say hello <ArrowIcon style={{ marginLeft: 8 }} />
        </a>
        <div className="contact-links">
          <a href="https://github.com/NIMRA-ABBASI" target="_blank" rel="noreferrer">
            <GithubIcon /> <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/nimra-abbasi/" target="_blank" rel="noreferrer">
            <LinkedinIcon /> <span>LinkedIn</span>
          </a>
          <a href="mailto:nimraabbasi4074@gmail.com">
            <MailIcon /> <span>nimraabbasi4074@gmail.com</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
