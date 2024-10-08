'use client';

import { useLocalStorage } from '@/hooks';
import { FilterProperties } from '@/utils';
import { FC, ReactNode, createContext } from 'react';

/**
 * UseFilterState
 * @property {AllowedState} filterState- state filterState.
 */
interface FiltersContextProps {
  filterState: FilterProperties;
  setFilter: (filters: FilterProperties) => void;
}
export const FiltersContext = createContext<FiltersContextProps | undefined>(
  undefined
);

export const FiltersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [filterHistory, setFilterHistory] = useLocalStorage('filter', {});
  const setTFilter = (value: FilterProperties) => {
    setFilterHistory(value);
  };

  return (
    <FiltersContext.Provider
      value={{
        filterState: filterHistory as unknown as FilterProperties,
        setFilter: setTFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
