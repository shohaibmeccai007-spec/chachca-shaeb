import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const core = coreRef.current!;
    const ring = ringRef.current!;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      core.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const raf = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px)`;
      requestAnimationFrame(raf);
    };
    const onEnter = () => document.body.classList.add('cursor-active');
    const onLeave = () => document.body.classList.remove('cursor-active');

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, .cursor-hover').forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={coreRef} className="cursor-core" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;


