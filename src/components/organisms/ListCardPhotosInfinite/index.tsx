'use client';

import { usePhotosScrollInfinite } from '@/hooks';
import styles from './ListCardPhotosInfinite.module.scss';
import { useEffect } from 'react';

const ListCardPhotosInfinite = () => {
  const { photos } = usePhotosScrollInfinite();

  useEffect(() => {
    console.log(photos);
  }, []);
  return <div>index</div>;
};

export default ListCardPhotosInfinite;
