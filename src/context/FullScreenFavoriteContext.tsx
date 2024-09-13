'use client';

import { FC, ReactNode, createContext, useState } from 'react';

/**
 * UseFullScreenFavorite
 * @property {AllowedState} openState- state openState.
 */
interface FullScreenFavoriteContextProps {
  isOpen: boolean;
  index: number;
  nextImage: () => void;
  backImage: () => void;
  toogleFullScreen: () => void;
}
export const FullScreenFavoriteContext = createContext<
  FullScreenFavoriteContextProps | undefined
>(undefined);

export const FullScreenFavoriteProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counterImage, setCounterImage] = useState<number>(0);

  const [isOpenFullscreen, setIsOpenFullscreen] = useState<boolean>(false);
  const handleNextImage = () => {
    setCounterImage((counterImage) => counterImage + 1);
  };
  const handleBackImage = () => {
    setCounterImage((counterImage) =>
      counterImage == 0 ? counterImage : counterImage - 1
    );
  };
  const handleIsOpenFullscreen = () => {
    setIsOpenFullscreen((val) => !val);
    setCounterImage(0);
  };

  return (
    <FullScreenFavoriteContext.Provider
      value={{
        isOpen: isOpenFullscreen,
        index: counterImage,
        nextImage: handleNextImage,
        backImage: handleBackImage,

        toogleFullScreen: handleIsOpenFullscreen,
      }}
    >
      {children}
    </FullScreenFavoriteContext.Provider>
  );
};
