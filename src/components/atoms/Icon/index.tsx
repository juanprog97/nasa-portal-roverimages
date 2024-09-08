'use client';
import { CSSProperties, FC } from 'react';
import {
  Icon as IconWrapper,
  IconPropsSizeOverrides,
  SxProps,
  Theme,
} from '@mui/material';

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

const IconA: FC<IconProps> = ({
  icon = 'add_circle',
  fontSize = 'large',
  sx = {},
  ariaHidden = false,
  className,
}: IconProps) => {
  return (
    <IconWrapper
      className={className}
      aria-hidden={ariaHidden}
      fontSize={fontSize}
      sx={sx}
    >
      {icon}
    </IconWrapper>
  );
};

export default IconA;
