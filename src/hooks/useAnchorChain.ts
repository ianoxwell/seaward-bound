import { useEffect } from 'react';

export const useAnchorChain = () => {
  useEffect(() => {
    const anchor = document.querySelector('[data-name="Anchor"]');
    if (!anchor) return;

    // Create anchor chain element
    const chain = document.createElement('div');
    chain.className = 'fixed top-0 left-7 w-0.5 rope rope-pattern rope-sway z-0 pointer-events-none';
    chain.style.height = '0px';
    chain.style.transition = 'height 0.1s ease-out';
    document.body.appendChild(chain);

    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const maxHeight = window.innerHeight - 90; // Leave space for anchor
      
      // Update chain height
      chain.style.height = `${scrollPercent * maxHeight}px`;
      
      // Update anchor position
      const anchorElement = anchor as HTMLElement;
      const anchorHeight = scrollPercent * (maxHeight - 24);
      anchorElement.style.transform = `translateY(${anchorHeight}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (chain.parentNode) {
        chain.parentNode.removeChild(chain);
      }
    };
  }, []);
};