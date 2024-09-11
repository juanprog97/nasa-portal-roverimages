import styles from './FullScreen.module.scss';
import { useFullScreen } from '@/hooks';
import { ButtonArrow, ButtonCircle, Dialog, Icon } from '@/components/atoms';

const FullScreen = () => {
  const { isOpen, index, nextImage, backImage, toogleFullScreen } =
    useFullScreen();

  return (
    <Dialog open={true}>
      <div className={styles.ButtonArrowContainer}>
        <ButtonArrow direction='left' />
        <ButtonArrow direction='right' />
      </div>
      <div className={styles.ContainerImage}>
        <img src='https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00002/ids/edr/browse/edl/EDF_0002_0667110740_696ECV_N0010052EDLC00002_0010LUJ01_1200.jpg' />
      </div>
      <ButtonCircle className={styles.ButtonCircleStyle}>
        <Icon icon='close' />
      </ButtonCircle>
    </Dialog>
  );
};

export default FullScreen;
