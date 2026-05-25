import { useState, useEffect } from 'react';
import type { Theme } from '../types';
import { SunIcon, MoonIcon, PhantomIcon, DownloadIcon } from './icons/Icons';

interface Props {
  theme: Theme;
  onThemeChange: () => void;
}

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export function Nav({ theme, onThemeChange }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const ids = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => { window.removeEventListener('scroll', onScroll); obs.disconnect(); };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo" aria-label="Home">
        <svg viewBox="0 0 56 56" width="48" height="48">
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <rect x="6" y="6" width="44" height="44" rx="11" fill="none" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.4" />
          <g transform="translate(28,28)">
            <line x1="-9" y1="9" x2="-9" y2="-9" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="9"  y1="9" x2="9"  y2="-9" stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" />
            <line x1="-9" y1="-9" x2="9" y2="9"  stroke="url(#lg1)" strokeWidth="2.6" strokeLinecap="round" />
            <circle cx="9" cy="-9" r="2.2" fill="var(--accent)" />
          </g>
        </svg>
      </a>
      <nav>
        <ol className="nav-list">
          {links.map((l, i) => (
            <li key={l.id} className={active === l.id ? 'active' : ''}>
              <a href={`#${l.id}`}>
                <span className="nav-num">0{i + 1}.</span> {l.label}
              </a>
            </li>
          ))}
        </ol>
        <a
          className="btn btn-ghost btn-sm"
          href="/Nimra-Arshad-Abbasi.pdf"
          //onClick={(e) => { e.preventDefault(); alert('CV download placeholder'); }}
          download="Nimra-Arshad-Abbasi.pdf"
        >
          Resume <DownloadIcon style={{ marginLeft: 6 }} />
        </a>
        <button className="theme-toggle" onClick={onThemeChange} aria-label="Toggle theme">
          {theme === 'dark' && <MoonIcon />}
          {theme === 'phantom' && <PhantomIcon />}
          {theme === 'light' && <SunIcon />}
        </button>
      </nav>
    </header>
  );
}
