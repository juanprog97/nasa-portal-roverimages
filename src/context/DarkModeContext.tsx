import { useLocalStorage } from '@/hooks';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

/**
 * UseDarkMode
 * @property {AllowedState} isDarkMode - state darkmode.
 * @property {Function} toggleDarkMode - toogleDarkMode
 */
interface DarkModeContextProps {
  isDarkMode: boolean;
  stateTheme: AllowedState;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

type AllowedState = 'dark' | 'light';

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stateTheme, setThemeMode] = useState<AllowedState>(
    useLocalStorage('theme', () => {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      } else return 'light';
    }) as unknown as AllowedState
  );

  const [isDarkMode, setIsDarkMode] = useState<boolean>(stateTheme == 'dark');
  useEffect(() => {
    if (stateTheme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode == 'dark' ? 'light' : 'dark';
      setIsDarkMode(newMode === 'dark');
      if (newMode == 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider
      value={{ isDarkMode, stateTheme, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
