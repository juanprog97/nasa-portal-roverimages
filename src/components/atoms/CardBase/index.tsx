'use client';
import { MutableRefObject } from 'react';
import CardStyle from './CardBase.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { NUMBER_MAX_ELEMENT } from '@/utils';

type CardProps = {
  className?: string;
  children?: any;
  custom?: number;
};

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: (i % NUMBER_MAX_ELEMENT) * 0.3,
      duration: 2,
      ease: 'easeOut',
    },
  }),
};

const CardBase: React.FC<CardProps> = ({
  className = '',
  children,
  custom = 0,
}: CardProps) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      initial='hidden'
      animate='visible'
      className={`${CardStyle.CardNasa} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default CardBase;
