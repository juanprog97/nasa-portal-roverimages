import { useEffect, useState } from 'react';
import { useLocalStorage } from '.';

const useDarkMode = () => {
  const [state, setLocalStorage] = useLocalStorage('theme', () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } else return 'light';
  });
  const [darkMode, setDarkMode] = useState<string>(state);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode == 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      setLocalStorage(darkMode);
    }
  }, [darkMode]);

  const toogleDarkMode = () => {
    const newState = darkMode === 'dark' ? 'light' : 'dark';
    setDarkMode(newState);
  };

  return [darkMode, toogleDarkMode] as const;
};

export default useDarkMode;
