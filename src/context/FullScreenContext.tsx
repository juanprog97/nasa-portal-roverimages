'use client';

import { FilterProperties } from '@/utils';
import { FC, ReactNode, createContext, useState } from 'react';

/**
 * UseFullScreen
 * @property {AllowedState} openState- state openState.
 */
interface FullScreenContextProps {
  isOpen: boolean;
  index: number;
  nextImage: () => void;
  backImage: () => void;
  toogleFullScreen: () => void;
}
export const FullScreenContext = createContext<
  FullScreenContextProps | undefined
>(undefined);

export const FullScreenProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counterImage, setCounterImage] = useState<number>(-1);
  const [isOpenFullscreen, setIsOpenFullscreen] = useState<boolean>(false);
  const handleNextImage = () => {
    setCounterImage((counterImage) => counterImage + 1);
  };
  const handleBackImage = () => {
    setCounterImage((counterImage) => counterImage - 1);
  };
  const handleIsOpenFullscreen = () => {
    setIsOpenFullscreen((val) => !val);
  };

  return (
    <FullScreenContext.Provider
      value={{
        isOpen: isOpenFullscreen,
        index: counterImage,
        nextImage: handleNextImage,
        backImage: handleBackImage,
        toogleFullScreen: handleIsOpenFullscreen,
      }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};
