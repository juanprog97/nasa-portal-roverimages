'use client';

import { usePhotosScrollInfinite } from '@/hooks';
import styles from './ListCardPhotosInfinite.module.scss';
import { useEffect } from 'react';
import { CardDataPresentation } from '@/models';
import { CardPresentation } from '@/components/molecules';
import { uuidv4 } from '@/utils';

const ListCardPhotosInfinite = () => {
  const { photos, error, loadMore, isReachingEnd, isLoading, isValidating } =
    usePhotosScrollInfinite();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 500 &&
        !isReachingEnd &&
        !isValidating
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReachingEnd, isValidating]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      {photos.map((photos: CardDataPresentation) => (
        <CardPresentation key={photos.id} data={photos} />
      ))}

      {isValidating && <p>Loading more...</p>}
      {isReachingEnd && <p>No more data</p>}
    </div>
  );
};

export default ListCardPhotosInfinite;
