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
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

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
        className={styles.ButtonCircleStyle}
      >
        <Icon icon='close' className={styles.Iconclose} />
      </ButtonCircle>
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
