import Lottie from 'lottie-react';
import animation from '@/assets/lottie/AnimationSwipe.json';
import styles from './AnimatioSwipe.module.scss';

import { FC } from 'react';

type AnimationMoveSwipeProps = {
  learned: boolean;
};

const AnimationMoveSwipe: FC<AnimationMoveSwipeProps> = ({
  learned,
}: AnimationMoveSwipeProps) => {
  if (learned) {
    return null;
  } else {
    return (
      <div className={styles.ContainerAnimation}>
        <Lottie loop={true} autoplay={true} animationData={animation} />
      </div>
    );
  }
};

export default AnimationMoveSwipe;
