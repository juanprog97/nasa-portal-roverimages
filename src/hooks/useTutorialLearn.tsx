import { useRef, useState, useEffect } from 'react';
import { useLocalStorage } from '.';

const useTutorialLearn = () => {
  const [stateTutorialCache, setLearnTutorialCache] = useLocalStorage<boolean>(
    'tutorial',
    false
  );

  const [stateTutorial, setStateTutorial] =
    useState<boolean>(stateTutorialCache);

  const setLearnedTutorial = (state: boolean) => {
    setStateTutorial(state);
    setLearnTutorialCache(state);
  };

  return { stateTutorial, setLearnedTutorial };
};

export default useTutorialLearn;
