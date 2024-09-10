'use client';
import { FC } from 'react';
import {
  Icon as IconWrapper,
  IconPropsSizeOverrides,
  SxProps,
  Theme,
} from '@mui/material';
import styles from './IconButton.module.scss';

import { OverridableStringUnion } from '@mui/types';

type IconProps = {
  icon?: string;
  fontSize?: OverridableStringUnion<
    'inherit' | 'large' | 'medium' | 'small',
    IconPropsSizeOverrides
  >;
  sx?: SxProps<Theme>;
  ariaHidden?: boolean;
  className?: string;
};

const Icon: FC<IconProps> = ({
  icon = 'add_circle',
  fontSize = 'large',

  ariaHidden = false,
  className = '',
}: IconProps) => {
  return (
    <IconWrapper
      className={`${className} ${styles.StyleIcon}`}
      aria-hidden={ariaHidden}
      fontSize={fontSize}
    >
      {icon}
    </IconWrapper>
  );
};

export default Icon;
