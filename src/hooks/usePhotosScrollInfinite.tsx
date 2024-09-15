import { useContext } from 'react';
import { PhotoScrollInfiniteContext } from '@/context';

const useScrollInfinite = () => {
  const context = useContext(PhotoScrollInfiniteContext);
  if (!context) {
    throw new Error(
      'useScrollInfinite must be inside PhotoScrollInfiniteProvider'
    );
  }
  return context;
};

export default useScrollInfinite;
