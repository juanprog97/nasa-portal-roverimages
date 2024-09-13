import { FullScreenFavoriteContext } from '@/context';
import { useContext } from 'react';

const useFullScreenFavorite = () => {
  const context = useContext(FullScreenFavoriteContext);
  if (!context) {
    throw new Error(
      'UseFullScreenFavorite must be inside FavoritesImagesProvider'
    );
  }
  return context;
};

export default useFullScreenFavorite;
