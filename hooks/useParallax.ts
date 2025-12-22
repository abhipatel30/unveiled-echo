'use client';

import { useEffect, useRef } from 'react';

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const scrollPosition = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollPosition;
      const distance = scrollPosition - elementTop;

      // Apply parallax transform
      element.style.transform = `translateY(${distance * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
