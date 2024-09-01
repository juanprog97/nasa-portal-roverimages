import { RefObject } from 'react';
import styles from './PhotosNasa.module.scss';
import { useImageLoaded } from '@/hooks';

type PhotosNasaProps = {
  src?: string;
  alt?: string;
  cssProps?: string;
};

const PhotosNasa: React.FC<PhotosNasaProps> = ({
  src = '',
  alt = '',
  cssProps = '',
}: PhotosNasaProps) => {
  const [refImg, loaded, onLoad] = useImageLoaded();

  return (
    <div data-loaded={loaded} className={`${styles.ImgContainer}${cssProps}`}>
      <img ref={refImg as RefObject<HTMLImageElement>} alt={alt} src={src} />
    </div>
  );
};

export default PhotosNasa;
