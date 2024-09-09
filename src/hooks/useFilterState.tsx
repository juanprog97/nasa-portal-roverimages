import { FiltersContext } from '@/context';
import { useContext } from 'react';

const useFilterState = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilterState must be inside useFilterProvider');
  }
  return context;
};

export default useFilterState;
