import { useEffect } from 'react';

export function useScrollReveal(dependency) {
  useEffect(() => {
    const targets = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    targets.forEach((target) => {
      target.classList.remove('is-visible');
      target.classList.add('reveal-ready');
      observer.observe(target);
    });

    window.requestAnimationFrame(() => {
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          target.classList.add('is-visible');
          observer.unobserve(target);
        }
      });
    });

    return () => observer.disconnect();
  }, [dependency]);
}
