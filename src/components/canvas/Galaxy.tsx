import { useRef, useEffect } from 'react';

interface Props {
  density?: number;
  accent?: string;
  dim?: number;
}

interface Star {
  x: number; y: number; z: number; r: number; baseA: number;
  twPhase: number; twSpeed: number; vx: number; vy: number;
  color: [number, number, number];
}
interface Shooter {
  x: number; y: number; vx: number; vy: number; life: number;
  trail: { x: number; y: number }[];
}
interface Nebula {
  x: number; y: number; r: number; color: [number, number, number];
}

export function Galaxy({ density = 1, accent = '#64ffda', dim = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let stars: Star[] = [], shooters: Shooter[] = [], nebulae: Nebula[] = [];
    let last = performance.now();
    let mouse = { x: -9999, y: -9999, active: false };

    const starColors: [number, number, number][] = [
      [255, 255, 255], [200, 220, 255], [255, 220, 240], [180, 200, 255], [255, 240, 200],
    ];

    function hexToRgb(hex: string): [number, number, number] {
      const m = hex.replace('#', '').match(/.{1,2}/g);
      return m ? (m.map(x => parseInt(x, 16)) as [number, number, number]) : [100, 255, 218];
    }
    const accentRgb = hexToRgb(accent);

    function makeStar(): Star {
      const depth = Math.random();
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        x: Math.random() * w, y: Math.random() * h,
        z: depth, r: 0.3 + depth * 1.7, baseA: 0.3 + depth * 0.7,
        twPhase: Math.random() * Math.PI * 2, twSpeed: 0.6 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.04 * (0.2 + depth),
        vy: (Math.random() - 0.5) * 0.04 * (0.2 + depth),
        color,
      };
    }

    function resize() {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const area = w * h;
      const count = Math.max(80, Math.min(420, Math.round(area / 4200 * density)));
      stars = Array.from({ length: count }, makeStar);
      nebulae = [
        { x: w * 0.2,  y: h * 0.3,  r: Math.max(w, h) * 0.45, color: [120, 90, 200] },
        { x: w * 0.85, y: h * 0.7,  r: Math.max(w, h) * 0.4,  color: [200, 70, 140] },
        { x: w * 0.55, y: h * 0.15, r: Math.max(w, h) * 0.35, color: accentRgb },
      ];
    }

    function maybeSpawnShooter() {
      if (Math.random() < 0.006 && shooters.length < 2) {
        const fromTop = Math.random() < 0.5;
        const angle = (Math.random() * 0.3) + 0.15;
        const speed = 6 + Math.random() * 4;
        shooters.push({
          x: fromTop ? Math.random() * w * 0.8 : -40,
          y: fromTop ? -20 : Math.random() * h * 0.5,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          life: 1, trail: [],
        });
      }
    }

    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; mouse.active = true;
    }
    function onLeave() { mouse.active = false; mouse.x = -9999; mouse.y = -9999; }

    function tick(now: number) {
      const dt = Math.min(50, now - last) / 16.6;
      last = now;
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      for (const n of nebulae) {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        const [r, gC, b] = n.color;
        g.addColorStop(0, `rgba(${r},${gC},${b},${0.18 * dim})`);
        g.addColorStop(0.5, `rgba(${r},${gC},${b},${0.07 * dim})`);
        g.addColorStop(1, `rgba(${r},${gC},${b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();

      for (const s of stars) {
        s.twPhase += 0.04 * s.twSpeed * dt;
        s.x += s.vx * dt; s.y += s.vy * dt;
        if (s.x < -10) s.x = w + 10; if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10; if (s.y > h + 10) s.y = -10;
        let dx = 0, dy = 0;
        if (mouse.active) { dx = (mouse.x - w / 2) * 0.012 * s.z; dy = (mouse.y - h / 2) * 0.012 * s.z; }
        const tw = 0.6 + 0.4 * Math.sin(s.twPhase);
        const a = s.baseA * tw * dim;
        const [r, g, b] = s.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.beginPath(); ctx.arc(s.x - dx, s.y - dy, s.r, 0, Math.PI * 2); ctx.fill();
        if (s.z > 0.78) {
          ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.18})`;
          ctx.beginPath(); ctx.arc(s.x - dx, s.y - dy, s.r * 3.6, 0, Math.PI * 2); ctx.fill();
        }
      }

      maybeSpawnShooter();
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.trail.unshift({ x: sh.x, y: sh.y });
        if (sh.trail.length > 14) sh.trail.pop();
        sh.x += sh.vx * dt; sh.y += sh.vy * dt;
        for (let t = 0; t < sh.trail.length - 1; t++) {
          const p1 = sh.trail[t], p2 = sh.trail[t + 1];
          const a = (1 - t / sh.trail.length) * 0.9 * dim;
          ctx.strokeStyle = `rgba(${accentRgb[0]},${accentRgb[1]},${accentRgb[2]},${a})`;
          ctx.lineWidth = 1.6 * (1 - t / sh.trail.length);
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
        }
        ctx.fillStyle = `rgba(255,255,255,${0.95 * dim})`;
        ctx.beginPath(); ctx.arc(sh.x, sh.y, 1.6, 0, Math.PI * 2); ctx.fill();
        if (sh.x > w + 40 || sh.y > h + 40) shooters.splice(i, 1);
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    raf = requestAnimationFrame(tick);
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
