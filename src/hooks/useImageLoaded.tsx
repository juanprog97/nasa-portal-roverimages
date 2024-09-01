import { useRef, useState, useEffect } from 'react';

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const refImg = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  };

  useEffect(() => {
    if (refImg.current && refImg.current.complete) {
      onLoad();
    }
  });

  return [refImg, loaded, onLoad];
};

export default useImageLoaded;
