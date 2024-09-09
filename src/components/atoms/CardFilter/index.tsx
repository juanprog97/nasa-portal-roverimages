import React, { FC } from 'react';
import styles from './CardFilter.module.scss';
import { motion } from 'framer-motion';
import Accordion from '@mui/material/Accordion';
import {
  AccordionDetails,
  AccordionSummary,
  Typography,
  colors,
} from '@mui/material';
import { Icon } from '..';

type CardFilterProps = {
  children?: any;
  isOpen?: boolean;
  label?: string;
};

const variants = {
  initial: { scale: 0, opacity: 100 },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
  closed: {
    scale: 0,
    opacity: 100,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const CardFilter: FC<CardFilterProps> = ({
  children,
  isOpen = true,
  label,
}: CardFilterProps) => {
  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
    >
      <Accordion className={styles.Accordion} defaultExpanded>
        <AccordionSummary
          expandIcon={
            <Icon className={styles.IconArrow} icon='keyboard_arrow_down' />
          }
        >
          <Typography sx={{ fontWeight: 'bold' }}>{label}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default CardFilter;
