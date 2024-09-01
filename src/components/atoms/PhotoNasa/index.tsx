'use client';
import { RefObject } from 'react';
import styles from './PhotosNasa.module.scss';
import { useImageLoaded } from '@/hooks';

type PhotoNasaProps = {
  src?: string;
  alt?: string;
  cssProps?: string;
};

const PhotoNasa: React.FC<PhotoNasaProps> = ({
  src = '',
  alt = '',
  cssProps = '',
}: PhotoNasaProps) => {
  const [refImg, loaded, onLoad] = useImageLoaded();

  return (
    <div data-loaded={loaded} className={`${styles.ImgContainer}${cssProps}`}>
      <img ref={refImg as RefObject<HTMLImageElement>} alt={alt} src={src} />
    </div>
  );
};

export default PhotoNasa;
