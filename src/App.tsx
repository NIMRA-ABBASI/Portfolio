import { useState, useEffect } from 'react';
import type { Theme, TweakValues } from './types';
import { useTweaks } from './hooks/useTweaks';
import { Nav } from './components/Nav';
import { SideLeft, SideRight } from './components/SideRails';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakSlider,
  TweakColor,
  TweakToggle,
} from './components/TweaksPanel';

const TWEAK_DEFAULTS: TweakValues = {
  accent: '#64ffda',
  animColor: '#64ffda',
  density: 1,
  showSideBars: true,
  fontScale: 1,
  heroBg: 'galaxy',
};

function hexA(hex: string, a: number): string {
  const m = hex.replace('#', '').match(/.{1,2}/g) ?? ['64', 'ff', 'da'];
  const [r, g, b] = m.map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${a})`;
}

export default function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('portfolio-theme') as Theme) ?? 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    document.documentElement.style.setProperty('--accent-soft', hexA(tweaks.accent, 0.10));
    document.documentElement.style.setProperty('--accent-tint', hexA(tweaks.accent, 0.07));
    document.documentElement.style.setProperty('--font-scale', String(tweaks.fontScale));
  }, [tweaks.accent, tweaks.fontScale]);

  const cycleTheme = () => {
    const order: Theme[] = ['dark', 'phantom', 'light'];
    setTheme(order[(order.indexOf(theme) + 1) % order.length]);
  };

  return (
    <>
      <Nav theme={theme} onThemeChange={cycleTheme} />
      {tweaks.showSideBars && <SideLeft />}
      {tweaks.showSideBars && <SideRight email="nimraabbasi4074@gmail.com" />}
      <main className="main">
        <Hero density={tweaks.density} bg={tweaks.heroBg} animColor={tweaks.animColor} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={theme}
            options={['dark', 'phantom', 'light']}
            onChange={(v) => setTheme(v as Theme)}
          />
        </TweakSection>
        <TweakSection label="Hero background">
          <TweakRadio
            label="Style"
            value={tweaks.heroBg}
            options={['galaxy', 'network']}
            onChange={(v) => setTweak('heroBg', v as 'galaxy' | 'network')}
          />
          <TweakSlider
            label="Density"
            value={tweaks.density}
            min={0.3} max={2} step={0.1}
            onChange={(v) => setTweak('density', v)}
          />
        </TweakSection>
        <TweakSection label="Color">
          <TweakColor
            label="Accent"
            value={tweaks.accent}
            onChange={(v) => setTweak('accent', v as string)}
            options={['#64ffda', '#9b6dff', '#ff7a59', '#ffd166', '#7dd3fc', '#f472b6', '#c9a86a']}
          />
        </TweakSection>
        <TweakSection label="Animation">
          <TweakColor
            label="Canvas color"
            value={tweaks.animColor}
            onChange={(v) => setTweak('animColor', v as string)}
            options={['#64ffda', '#9b6dff', '#ff7a59', '#ffd166', '#7dd3fc', '#f472b6', '#c9a86a', '#ff4d4d']}
          />
        </TweakSection>
        <TweakSection label="Layout">
          <TweakToggle
            label="Show side rails"
            value={tweaks.showSideBars}
            onChange={(v) => setTweak('showSideBars', v)}
          />
          <TweakSlider
            label="Type scale"
            value={tweaks.fontScale}
            min={0.85} max={1.2} step={0.05}
            onChange={(v) => setTweak('fontScale', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
