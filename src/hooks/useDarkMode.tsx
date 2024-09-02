import { DarkModeContext } from '@/context';
import { useContext } from 'react';

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode debe ser usado dentro de DarkModeProvider');
  }
  return context;
};

export default useDarkMode;
