'use client';
import styles from './FullScreen.module.scss';
import {
  useFullScreen,
  usePhotosScrollInfinite,
  useTutorialLearn,
} from '@/hooks';
import {
  AnimationMoveSwipe,
  ButtonArrow,
  ButtonCircle,
  Dialog,
  Icon,
  Spinners,
} from '@/atoms';

import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { PopoverButton } from '@/molecules';
import { CardDataPresentation } from '@/models';
import { useHotkeys } from 'react-hotkeys-hook';

const FullScreenPhotosContent = () => {
  const { isOpen, index, nextImage, backImage, toogleFullScreen } =
    useFullScreen();

  const { stateTutorial, setLearnedTutorial } = useTutorialLearn();

  const { photos, isLoading, error, loadMore, isValidating, isReachingEnd } =
    usePhotosScrollInfinite();

  useHotkeys('ArrowLeft', () => {
    if (!isLoading && !isValidating) {
      if (index > 0) backImage();
    }
  });
  useHotkeys('ArrowRight', () => {
    if (!isLoading && !isValidating) {
      if (index == photos.length - 1) {
        if (!isReachingEnd) {
          loadMore();
        }
      } else {
        nextImage();
      }
    }
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!stateTutorial) {
        setLearnedTutorial(true);
      }
      if (!isLoading && !isValidating) {
        if (index == photos.length - 1) {
          if (!isReachingEnd) {
            return loadMore();
          }
        } else {
          nextImage();
        }
      }
    },
    onSwipedRight: () => {
      if (!stateTutorial) {
        setLearnedTutorial(true);
      }
      return !isLoading && !isValidating
        ? index > 0
          ? backImage()
          : () => {}
        : () => {};
    },
    trackMouse: true,
  });

  const AdapterFormatPhotoDetails = (
    photo: CardDataPresentation
  ): JSX.Element => {
    if (photo == undefined) {
      return <></>;
    } else {
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
    }
  };

  const SliderImages = (): JSX.Element => (
    <>
      <AnimationMoveSwipe learned={stateTutorial} />
      <div className={styles.ButtonArrowContainer}>
        <ButtonArrow
          disableState={isValidating}
          disableHidden={index == 0}
          onClick={index == 0 ? () => {} : backImage}
          direction='left'
        />

        <ButtonArrow
          disableHidden={isReachingEnd && index == photos.length - 1}
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
              key={photos[index]?.imgsrc}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              src={photos[index]?.imgsrc}
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
      {isLoading || isValidating ? (
        <Spinners type='loading' />
      ) : error ? (
        <Spinners type='error' />
      ) : (
        <>
          <SliderImages />
        </>
      )}
    </Dialog>
  );
};

export default FullScreenPhotosContent;
