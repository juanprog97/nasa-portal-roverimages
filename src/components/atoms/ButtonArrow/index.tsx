'use client';
import { FC } from 'react';
import { Icon } from '@/components/atoms';
import styles from './ButtonArrow.module.scss';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type AllowedStringDiretion = 'left' | 'right';

type ButtonArrowProps = {
  direction?: AllowedStringDiretion;
  onClick?: () => void;
};

const ButtonArrow: FC<ButtonArrowProps> = ({
  direction = 'left',
  onClick = () => {},
}: ButtonArrowProps) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <button className={styles.ButtonStyle} onClick={onClick}>
      <div data-direction={direction} className={styles.ArrowStyle}>
        <Icon
          icon={direction == 'right' ? 'arrow_forward_ios' : 'arrow_back_ios'}
          sx={{ fontSize: sm ? 25 : 40 }}
        />
      </div>
    </button>
  );
};

export default ButtonArrow;
