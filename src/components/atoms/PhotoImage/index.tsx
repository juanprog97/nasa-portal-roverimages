'use client';
import { RefObject } from 'react';
import styles from './PhotoImage.module.scss';
import { useImageLoaded } from '@/hooks';

type PhotoNasaProps = {
  src?: string;
  alt?: string;
  cssProps?: string;
};

const PhotoImage: React.FC<PhotoNasaProps> = ({
  src = '',
  alt = '',
  cssProps = '',
}: PhotoNasaProps) => {
  const [refImg, loaded] = useImageLoaded();

  return (
    <div data-loaded={loaded} className={`${styles.ImgContainer}${cssProps}`}>
      <img
        loading='lazy'
        ref={refImg as RefObject<HTMLImageElement>}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default PhotoImage;
