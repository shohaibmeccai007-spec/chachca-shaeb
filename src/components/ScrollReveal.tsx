import React, { useEffect, useRef } from 'react';

type Props = React.PropsWithChildren<{ className?: string; variant?: 'default' | 'slow' | 'zoom' }>; 

const ScrollReveal: React.FC<Props> = ({ children, className = '', variant = 'default' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(onIntersect, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === 'zoom' ? 'reveal-zoom' : variant === 'slow' ? 'reveal reveal-slow' : 'reveal';

  return (
    <div ref={ref} className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;


