import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialState: any) => {
  const storedValue =
    typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialState;
  const [state, setState] = useState<string>(initial);

  const returnedNewState = (newState: any) => {
    setState(newState);
    localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, returnedNewState] as const;
};

export default useLocalStorage;
