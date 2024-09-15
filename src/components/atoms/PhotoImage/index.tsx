'use client';
import { RefObject, useRef } from 'react';
import styles from './PhotoImage.module.scss';
import { useImageLoad } from '@custom-react-hooks/use-image-load';

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
  const refImgLazyLoad = useRef<HTMLImageElement>(null);
  const lazyLoadState = useImageLoad(
    {
      thumbnailSrc: src,
      fullSrc: src,
    },
    refImgLazyLoad
  );

  return (
    <div
      data-loaded={lazyLoadState.isLoading}
      className={`${styles.ImgContainer}${cssProps}`}
    >
      <img
        loading='lazy'
        ref={refImgLazyLoad}
        alt={alt}
        src={lazyLoadState.src}
      />
    </div>
  );
};

export default PhotoImage;
