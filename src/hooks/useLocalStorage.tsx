import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialState: any) => {
  const [state, setState] = useState<string>(initialState);

  useEffect(() => {
    if (localStorage.getItem(key)) {
      let gottenItem: any = localStorage.getItem(key);
      let nextState = gottenItem;
      try {
        nextState = JSON.parse(gottenItem);
      } catch (err) {
        nextState = gottenItem;
      }
      setState(nextState);
    }
  }, []);

  const returnedNewState = (newState: any) => {
    setState(newState);
    localStorage.setItem(key, JSON.stringify(newState));
  };

  return [state, returnedNewState] as const;
};

export default useLocalStorage;
