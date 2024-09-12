'use client';
import styles from './FullScreen.module.scss';
import {
  useFullScreen,
  useKeyEventDetect,
  usePhotosScrollInfinite,
} from '@/hooks';
import {
  ButtonArrow,
  ButtonCircle,
  Dialog,
  Icon,
  Spinners,
} from '@/components/atoms';
import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { PopoverButton } from '@/components/molecules';
import { CardDataPresentation } from '@/models';

const FullScreen = () => {
  const { isOpen, index, nextImage, backImage, toogleFullScreen } =
    useFullScreen();

  const { keyPressed } = useKeyEventDetect();

  const { photos, isLoading, error, loadMore, isValidating, isReachingEnd } =
    usePhotosScrollInfinite();
  useEffect(() => {
    if (keyPressed == 'ArrowLeft' && !isLoading && !isValidating) {
      if (index !== 0) {
        backImage();
      }
    } else if (
      keyPressed == 'ArrowRight' &&
      !isLoading &&
      !isValidating &&
      !isReachingEnd
    ) {
      if (index == photos.length - 1) {
        loadMore();
      } else {
        nextImage();
      }
    }
  }, [keyPressed]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      !isLoading && !isValidating && !isReachingEnd
        ? index == photos.length - 1
          ? loadMore()
          : nextImage()
        : () => {},
    onSwipedRight: () => (!isLoading && !isValidating ? backImage() : () => {}),
    trackMouse: true,
  });

  const AdapterFormatPhotoDetails = (
    photo: CardDataPresentation
  ): JSX.Element => {
    const { id, imgsrc, ...details } = photo;

    return (
      <div className='p-4'>
        <h1 className='text-xl font-bold'>
          Photo taken by the {details.roverName} rover
        </h1>
        <ul className='mb-5 mt-2'>
          <li className='my-2'>
            <strong>Camera: </strong>
            {details.camera}
          </li>
          <li className='my-2'>
            <strong>🌎 Earth Date: </strong>
            {details.earthDate}
          </li>
          <li className='my-2'>
            <strong>☀️ Sol Date: </strong>
            {details.solDate}
          </li>
        </ul>
      </div>
    );
  };

  const SliderImages = (): JSX.Element => (
    <>
      <div className={styles.ButtonArrowContainer}>
        <ButtonArrow
          disableState={isValidating}
          onClick={index == 0 ? () => {} : backImage}
          direction='left'
        />

        <ButtonArrow
          disableHidden={isReachingEnd}
          disableState={isValidating}
          onClick={index == photos.length - 1 ? loadMore : nextImage}
          direction='right'
        />
      </div>
      {isValidating ? (
        <Spinners type='loading' />
      ) : (
        <div className={styles.ContainerImage}>
          <AnimatePresence>
            <motion.img
              key={photos[index].imgsrc}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              src={photos[index].imgsrc}
            />
          </AnimatePresence>
        </div>
      )}

      <ButtonCircle
        onClick={toogleFullScreen}
        className={styles.ButtonCircleStyleClose}
      >
        <Icon icon='close' className={styles.Iconclose} />
      </ButtonCircle>

      <PopoverButton
        className={styles.ButtonCircleStyleInfo}
        adapterStructure={AdapterFormatPhotoDetails(photos[index])}
      >
        <Icon icon='info' />
      </PopoverButton>
    </>
  );

  return (
    <Dialog actions={handlers} open={isOpen}>
      {isLoading ? (
        <Spinners type='loading' />
      ) : error ? (
        <Spinners type='error' />
      ) : (
        <SliderImages />
      )}
    </Dialog>
  );
};

export default FullScreen;
