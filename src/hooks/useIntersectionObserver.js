import { useEffect, useState } from 'react';

// Custom hook for tracking element visibility
export const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      root: null,
      threshold: 0.1,
      ...options
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isVisible;
}; 