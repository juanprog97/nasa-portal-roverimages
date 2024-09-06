'use client';

import { usePhotosScrollInfinite } from '@/hooks';
import styles from './ListCardPhotosInfinite.module.scss';
import { useEffect } from 'react';
import { CardDataPresentation } from '@/models';
import { CardPresentation } from '@/components/molecules';
import { Spinners } from '@/components/atoms';

const ListCardPhotosInfinite = () => {
  const { photos, error, loadMore, isReachingEnd, isLoading, isValidating } =
    usePhotosScrollInfinite();

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
  }, [isReachingEnd, isValidating]);

  if (isLoading) return <Spinners type='loading' />;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className={styles.ContainerGeneral}>
      <div className={styles.ContainerListCard}>
        {photos.map((photos: CardDataPresentation) => (
          <CardPresentation key={photos.id} data={photos} />
        ))}
      </div>

      <div className='fixed bottom-[0] flex h-[120px] w-full justify-center'>
        {isValidating && <Spinners type='loading' />}
        {isReachingEnd && <Spinners type='finished' />}
      </div>
    </div>
  );
};

export default ListCardPhotosInfinite;
