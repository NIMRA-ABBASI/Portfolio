import { useRef, useState, useEffect } from 'react';
import type { ElementType, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export function Reveal({ children, delay = 0, as: As = 'div', className = '', style, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    let safety = setTimeout(() => setVisible(true), 1200);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); clearTimeout(safety); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(safety); };
  }, []);

  return (
    <As
      ref={ref}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </As>
  );
}
