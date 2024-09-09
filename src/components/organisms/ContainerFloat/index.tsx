'use client';

import { FC, useEffect, useState } from 'react';
import styleContainer from './ContainerFloat.module.scss';
import { motion, useScroll } from 'framer-motion';
type AllowedPositionHorizontal = 'left' | 'center' | 'right';
type AllowedPositionVertical = 'top' | 'center' | 'bottom';

type ButtonContainerFloatProps = {
  vertical?: AllowedPositionVertical;
  horizontal?: AllowedPositionHorizontal;
  children: any;
  styles?: string;
};

const variants = {
  initial: { scale: 0, opacity: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  hidden: {
    scale: 0,
    opacity: 100,
    display: 'none',
    transition: {
      duration: 0.1,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: 'spring',
        damping: 5,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
};

const ContainerFloat: FC<ButtonContainerFloatProps> = ({
  vertical = 'bottom',
  horizontal = 'left',
  children,
  styles = '',
}: ButtonContainerFloatProps) => {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer: any;
    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };
    scrollY.onChange(handleScroll);

    return () => {
      clearTimeout(timer);
      scrollY.stop();
    };
  }, [scrollY]);

  return (
    <motion.div
      initial='initial'
      variants={variants}
      animate={!isScrolling ? 'visible' : 'hidden'}
      data-vertical={vertical}
      data-horizontal={horizontal}
      className={`${styleContainer.ContainerFloat} ${styles}`}
    >
      {children}
    </motion.div>
  );
};

export default ContainerFloat;
