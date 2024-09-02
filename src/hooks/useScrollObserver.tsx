import { useState, useEffect } from 'react';

const useScrollObserver = (threshold: number) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Verificar si está en la parte superior
      setIsAtTop(scrollPosition === 0);

      // Verificar si ha desplazado más allá del umbral
      setHasScrolled(scrollPosition > threshold);
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isAtTop, hasScrolled };
};

export default useScrollObserver;
