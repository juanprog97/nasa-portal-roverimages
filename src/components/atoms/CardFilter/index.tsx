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
};

const variants = {
  initial: { scale: 0, opacity: 100 },
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100 },
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
}: CardFilterProps) => {
  return (
    <motion.div
      variants={variants}
      initial='closed'
      animate={isOpen ? 'open' : 'closed'}
    >
      <Accordion className={styles.Accordion}>
        <AccordionSummary
          expandIcon={
            <Icon
              sx={{
                fontSize: 20,
                color: colors.blue[400],
              }}
              icon='keyboard_arrow_down'
            />
          }
        >
          <Typography sx={{ fontWeight: 'bold' }}>erdaaads</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </motion.div>
  );
};

export default CardFilter;
