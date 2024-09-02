import { useState, useEffect } from 'react';

const useScrollObserver = (threshold: number) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      setIsAtTop(scrollPosition === 0);

      setHasScrolled(scrollPosition > threshold);
    };
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isAtTop, hasScrolled };
};

export default useScrollObserver;
