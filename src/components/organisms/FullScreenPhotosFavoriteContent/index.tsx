'use client';
import styles from './FullScreenFavorite.module.scss';
import {
  useFullScreen,
  useFullScreenFavorite,
  useKeyEventDetect,
  useLoadFavoriteImages,
  usePhotosScrollInfinite,
} from '@/hooks';
import {
  ButtonArrow,
  ButtonCircle,
  Dialog,
  Icon,
  Spinners,
} from '@/components/atoms';
import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { PopoverButton, CardPresentation } from '@/components/molecules';
import { CardDataPresentation as PhotosDetail } from '@/models';

const FullScreenPhotosFavoriteContent = () => {
  const { isOpen, index, nextImage, backImage, toogleFullScreen } =
    useFullScreenFavorite();

  const { keyPressed } = useKeyEventDetect();
  const { listImagesFavorite, addFavorite, deleteManyFavorite } =
    useLoadFavoriteImages();

  const [listDataChange, setListDataChange] = useState<{
    [key: string | number]: PhotosDetail;
  }>({});

  useEffect(() => {
    if (keyPressed == 'ArrowLeft') {
      if (index > 0) {
        backImage();
      }
    } else if (keyPressed == 'ArrowRight') {
      if (index < listImagesFavorite.length - 1) {
        nextImage();
      }
    }
  }, [keyPressed]);

  const handleChangeStateFavorite = () => {
    if (listImagesFavorite[index].id in listDataChange) {
      const { [listImagesFavorite[index].id]: _, ...rest } = listDataChange;
      setListDataChange(rest);
    } else {
      const added: { [key: string | number]: PhotosDetail } = {};
      added[listImagesFavorite[index].id] = listImagesFavorite[index];
      setListDataChange({ ...listDataChange, ...added });
    }
  };
  const handleCloseFullscreen = () => {
    deleteManyFavorite(Object.keys(listDataChange).map((id) => parseInt(id)));
    setListDataChange({});
    toogleFullScreen();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      index < listImagesFavorite.length - 1 ? nextImage() : () => {},
    onSwipedRight: () => backImage(),
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
        {listImagesFavorite.length > 0 ? (
          <>
            <ButtonArrow
              disableState={index == 0}
              disableHidden={index == 0}
              onClick={index == 0 ? () => {} : backImage}
              direction='left'
            />

            <ButtonArrow
              disableState={index == listImagesFavorite.length - 1}
              disableHidden={index == listImagesFavorite.length - 1}
              onClick={
                index < listImagesFavorite.length - 1 ? nextImage : () => {}
              }
              direction='right'
            />
          </>
        ) : null}
      </div>

      <div className={styles.ContainerImage}>
        {listImagesFavorite.length > 0 ? (
          <>
            <AnimatePresence>
              <motion.img
                key={listImagesFavorite[index].imgsrc}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                src={listImagesFavorite[index].imgsrc}
              />
            </AnimatePresence>
          </>
        ) : (
          <h1 className='text-3xl'>
            You don't have any favorite images yet. Browse through the gallery
            and save the ones you like!
          </h1>
        )}
      </div>

      <ButtonCircle
        onClick={handleCloseFullscreen}
        className={styles.ButtonCircleStyleClose}
      >
        <Icon icon='close' className={styles.Iconclose} />
      </ButtonCircle>
      {listImagesFavorite && listImagesFavorite.length > 0 ? (
        <ButtonCircle
          onClick={handleChangeStateFavorite}
          className={styles.ButtonCircleStyleDelete}
        >
          <Icon
            icon={
              listImagesFavorite[index].id in listDataChange
                ? 'favorite'
                : 'delete'
            }
          />
        </ButtonCircle>
      ) : null}

      {listImagesFavorite && listImagesFavorite.length > 0 ? (
        <>
          <PopoverButton
            className={styles.ButtonCircleStyleInfo}
            adapterStructure={AdapterFormatPhotoDetails(
              listImagesFavorite[index]
            )}
          >
            <Icon icon='info' />
          </PopoverButton>
        </>
      ) : null}
    </>
  );

  return (
    <Dialog actions={handlers} open={isOpen}>
      {listImagesFavorite == null ? (
        <Spinners type='loading' />
      ) : (
        <SliderImages />
      )}
    </Dialog>
  );
};

export default FullScreenPhotosFavoriteContent;
