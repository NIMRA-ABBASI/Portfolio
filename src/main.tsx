import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/layout.css';
import './styles/nav.css';
import './styles/buttons.css';
import './styles/side-rails.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/experience.css';
import './styles/projects.css';
import './styles/certifications.css';
import './styles/contact.css';
import './styles/tweaks-panel.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
