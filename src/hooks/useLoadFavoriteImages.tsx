import { FavoritesImagesContext } from '@/context';
import { useContext } from 'react';

const useLoadFavoriteImages = () => {
  const context = useContext(FavoritesImagesContext);
  if (!context) {
    throw new Error(
      'useLoadFavoriteImage must be inside FavoritesImagesProvider'
    );
  }
  return context;
};

export default useLoadFavoriteImages;
