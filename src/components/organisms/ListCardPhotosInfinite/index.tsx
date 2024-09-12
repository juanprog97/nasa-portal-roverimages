'use client';

import { useFullScreen, usePhotosScrollInfinite } from '@/hooks';
import styles from './ListCardPhotosInfinite.module.scss';
import { Suspense, useEffect } from 'react';
import { CardDataPresentation } from '@/models';
import { CardPresentation } from '@/components/molecules';
import { Spinners } from '@/components/atoms';
import { motion } from 'framer-motion';
import { SWRProvider } from '@/context';

const ListCardPhotosInfiniteImp = (): JSX.Element => {
  const { photos, error, loadMore, isReachingEnd, isLoading, isValidating } =
    usePhotosScrollInfinite();
  const { openImage } = useFullScreen();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.scrollHeight &&
        !isReachingEnd &&
        !isValidating
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReachingEnd, isValidating, loadMore]);

  if (isLoading) return <Spinners type='loading' />;
  if (error) return <Spinners type='error' />;
  return (
    <div className={styles.ContainerGeneral}>
      <motion.div
        initial={false}
        animate='open'
        className={styles.ContainerListCard}
      >
        
        {photos.map((photos: CardDataPresentation, index: number) => (
          <CardPresentation
            onClickFullScreen={openImage}
            index={index}
            key={photos.id}
            data={photos}
          />
        ))}
      </motion.div>
      <div className='pointer-events-none fixed bottom-[0] flex h-[120px] w-full justify-center'>
        {isValidating && <Spinners type='loading' />}
      </div>
      {isReachingEnd && <Spinners type='finished' />}
    </div>
  );
};

export const ListCardPhotosInfinite = () => (
  <SWRProvider keyItem='content'>
    <ListCardPhotosInfiniteImp />
  </SWRProvider>
);

export default ListCardPhotosInfinite;
