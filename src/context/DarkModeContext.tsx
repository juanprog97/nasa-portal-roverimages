import { useLocalStorage } from '@/hooks';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface DarkModeContextProps {
  isDarkMode: AllowedState;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

type AllowedState = 'dark' | 'light';

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setDarkMode] = useLocalStorage('theme', () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } else return 'light';
  });

  const [isDarkMode, setIsDarkMode] = useState<AllowedState>(
    state as AllowedState
  );

  useEffect(() => {
    if (isDarkMode == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = prevMode == 'dark' ? 'light' : 'dark';
      setDarkMode(newMode === 'dark' ? 'light' : 'dark');
      if (newMode == 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
