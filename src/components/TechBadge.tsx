import { techBadges } from './icons/Icons';

interface Props {
  id: string;
  size?: number;
}

export function TechBadge({ id, size = 84 }: Props) {
  const t = techBadges[id] ?? { label: id, short: id.slice(0, 2).toUpperCase(), color: '#64ffda' };
  return (
    <div className="tech-badge" style={{ width: size, height: size }}>
      <div className="tech-badge-circle" style={{ width: size, height: size }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: size * 0.36,
          color: t.color,
          letterSpacing: t.short.length > 1 ? '-0.04em' : 0,
        }}>{t.short}</span>
        <span className="tech-badge-ring" style={{ boxShadow: `inset 0 0 0 1px ${t.color}33` }} />
      </div>
      <div className="tech-badge-label">{t.label}</div>
    </div>
  );
}
