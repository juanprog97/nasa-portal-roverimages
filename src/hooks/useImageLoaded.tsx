import { useRef, useState, useEffect } from 'react';

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const refImg = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (refImg.current) {
      const handleImageLoad = () => {
        onLoad();
      };
      refImg.current.addEventListener('load', handleImageLoad);
      return () => {
        refImg?.current?.removeEventListener('load', handleImageLoad);
      };
    }
  });

  return [refImg, loaded];
};

export default useImageLoaded;
