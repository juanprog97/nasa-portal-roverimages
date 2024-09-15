'use client';

import { FC, ReactNode, createContext, useState } from 'react';

/**
 * UseFullScreen
 * @property {AllowedState} isOpen- state openState.
 *  @property {AllowedState} index- state number.
 *  @property {AllowedState} nextImage- next Image function.
 *  @property {AllowedState} backImage- back Image Function.
 *   @property {AllowedState} openImage- open Image Function.
 *   @property {AllowedState} toogleFullScreen- change State view Function.
 */
interface FullScreenContextProps {
  isOpen: boolean;
  index: number;
  nextImage: () => void;
  backImage: () => void;
  openImage: (index: number) => void;
  toogleFullScreen: () => void;
}
export const FullScreenContext = createContext<
  FullScreenContextProps | undefined
>(undefined);

export const FullScreenProvider: FC<{ children: ReactNode }> = ({
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
  };
  const handleOpenImage = (index: number) => {
    handleIsOpenFullscreen();
    setCounterImage(index);
  };

  return (
    <FullScreenContext.Provider
      value={{
        isOpen: isOpenFullscreen,
        index: counterImage,
        nextImage: handleNextImage,
        backImage: handleBackImage,
        openImage: handleOpenImage,
        toogleFullScreen: handleIsOpenFullscreen,
      }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};
