import { useRef, useState, useEffect } from 'react';

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const refImg = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const currentRef = refImg.current;
    if (currentRef) {
      const handleImageLoad = () => {
        onLoad();
      };
      currentRef.addEventListener('load', handleImageLoad);
      return () => {
        if (currentRef) {
          currentRef.removeEventListener('load', handleImageLoad);
        }
      };
    }
  }, []);

  return [refImg, loaded];
};

export default useImageLoaded;
