import { useEffect } from 'react';

export const useHeaderPulse = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            const header = entry.target;
            header.classList.add('animate-header-pulse');
            
            // Remove animation class after it completes
            setTimeout(() => {
              header.classList.remove('animate-header-pulse');
            }, 500);
          }
        });
      },
      {
        threshold: 0.8,
        rootMargin: '-80px 0px -80% 0px', // Trigger when header reaches near top
      }
    );

    // Observe all section headers
    const headers = document.querySelectorAll('section h2[id$="-heading"]');
    headers.forEach((header) => observer.observe(header));

    return () => {
      headers.forEach((header) => observer.unobserve(header));
    };
  }, []);
};