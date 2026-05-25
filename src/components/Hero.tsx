import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { Galaxy } from "./canvas/Galaxy";
import { Constellation } from "./canvas/Constellation";
import { ArrowIcon, DownloadIcon } from "./icons/Icons";

interface TypewriterProps {
  words: string[];
  speed?: number;
  pause?: number;
}

function Typewriter({ words, speed = 90, pause = 1600 }: TypewriterProps) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!del && sub === cur) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && sub === "") {
      setDel(false);
      setIdx((idx + 1) % words.length);
    } else {
      t = setTimeout(
        () => {
          setSub(
            del ? cur.slice(0, sub.length - 1) : cur.slice(0, sub.length + 1),
          );
        },
        del ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(t);
  }, [sub, del, idx, words, speed, pause]);

  return (
    <span className="typed">
      <span>{sub}</span>
      <span className="caret" />
    </span>
  );
}

interface Props {
  density: number;
  bg: "galaxy" | "network";
  animColor?: string;
}

export function Hero({ density, bg, animColor = "#64ffda" }: Props) {
  return (
    <section id="home" className={`hero hero-bg-${bg}`}>
      <div className="hero-canvas">
        {bg === "galaxy" ? (
          <Galaxy density={density} accent={animColor} />
        ) : (
          <Constellation density={density} accent={animColor} />
        )}
      </div>
      {bg === "galaxy" && <div className="hero-vignette" />}
      <div className="hero-grid" />
      <div className="hero-inner">
        <Reveal delay={100}>
          <p className="hero-eyebrow">Hi, my name is</p>
        </Reveal>
        <Reveal delay={200} as="h1" className="hero-name">
          Nimra Abbasi.
        </Reveal>
        <Reveal delay={300} as="h2" className="hero-headline">
          I build{" "}
          <Typewriter
            words={[
              "web applications.",
              "clean interfaces.",
              "reliable systems.",
              "thoughtful UIs.",
            ]}
          />
        </Reveal>
        <Reveal delay={450}>
          <p className="hero-tag">
            I'm a <span className="hl">Full-Stack Developer</span> with hands-on
            experience building scalable web applications. What drives me isn't
            just the code — it's the thinking behind it. I turn ideas into
            reliable, well-crafted products with a focus on performance and user
            experience
          </p>
        </Reveal>
        <Reveal delay={600}>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowIcon style={{ marginLeft: 8 }} />
            </a>
            <a
              href="/Nimra-Arshad-Abbasi.pdf"
              className="btn btn-ghost"
              //onClick={(e) => { e.preventDefault(); alert('CV download placeholder'); }}
              download="Nimra-Arshad-Abbasi.pdf"
            >
              Download CV <DownloadIcon style={{ marginLeft: 8 }} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={800}>
          <div className="hero-meta">
            <div>
              <span className="kbd">↓</span> scroll to explore
            </div>
            <div className="hero-meta-dot" />
            <div>
              <span className="mono">Islamabad, Pakistan</span>
            </div>
            <div className="hero-meta-dot" />
            <div className="status">
              <span className="status-dot" /> Open to new opportunities
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
