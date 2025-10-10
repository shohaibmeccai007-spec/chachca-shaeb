import React, { useEffect, useRef } from 'react';

const Particles: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    const onResize = () => { width = canvas.width = canvas.offsetWidth; height = canvas.height = canvas.offsetHeight; };
    window.addEventListener('resize', onResize);

    type P = { x: number; y: number; vx: number; vy: number; r: number; };
    const particles: P[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // gradient backdrop
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, 'rgba(167,139,250,0.12)');
      grad.addColorStop(1, 'rgba(99,102,241,0.08)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fill();
      });

      // connective lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y; const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `rgba(199, 210, 254, ${1 - d / 120})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />;
};

export default Particles;


