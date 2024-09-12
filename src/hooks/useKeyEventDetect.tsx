'use client';
import { FC, useEffect, useState } from 'react';

const useKeyEventDetect = () => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setKeyPressed('ArrowUp');
        break;
      case 'ArrowDown':
        setKeyPressed('ArrowDown');
        break;
      case 'ArrowLeft':
        setKeyPressed('ArrowLeft');
        break;
      case 'ArrowRight':
        setKeyPressed('ArrowRight');
        break;
      default:
        setKeyPressed(null);
    }

    setTimeout(() => {
      setKeyPressed(null);
    }, 100);
  };
  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case 'ArrowLeft':
      case 'ArrowRight':
        setKeyPressed(null);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    }

    return () => {
      if (handleKeyDown) window.removeEventListener('keydown', handleKeyDown);
      if (handleKeyUp) window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return { keyPressed };
};

export default useKeyEventDetect;
