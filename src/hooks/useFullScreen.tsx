import { FullScreenContext } from '@/context';
import { useContext } from 'react';

const useFullScreen = () => {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error('useFullScreen must be inside FullScreenProvider');
  }
  return context;
};

export default useFullScreen;
