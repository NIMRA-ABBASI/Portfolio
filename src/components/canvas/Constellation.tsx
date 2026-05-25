import { useRef, useEffect } from 'react';

interface Props {
  density?: number;
  accent?: string;
  dim?: number;
}

interface Point {
  x: number; y: number; vx: number; vy: number; r: number;
}

export function Constellation({ density = 1, accent = '#64ffda', dim = 0.55 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, points: Point[] = [], mouse = { x: -9999, y: -9999 };

    function hexToRgb(hex: string): [number, number, number] {
      const m = hex.replace('#', '').match(/.{1,2}/g);
      return m ? (m.map(x => parseInt(x, 16)) as [number, number, number]) : [100, 255, 218];
    }
    const [ar, ag, ab] = hexToRgb(accent);

    function resize() {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const area = w * h;
      const count = Math.max(30, Math.min(120, Math.round(area / 12000 * density)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    }
    function onLeave() { mouse.x = -9999; mouse.y = -9999; }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      const maxDist = 140;
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) {
          const f = (1 - Math.sqrt(d2) / 160) * 0.04;
          p.vx += dx * f * 0.01; p.vy += dy * f * 0.01;
        }
        p.vx *= 0.995; p.vy *= 0.995;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp < 0.05) { p.vx += (Math.random() - 0.5) * 0.04; p.vy += (Math.random() - 0.5) * 0.04; }
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.45 * dim;
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const p of points) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const near = Math.hypot(dx, dy) < 160;
        ctx.fillStyle = near ? `rgba(${ar},${ag},${ab},0.95)` : `rgba(${ar},${ag},${ab},${0.6 * dim})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, [density, accent, dim]);

  return (
    <canvas
      ref={ref}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'auto' }}
    />
  );
}
