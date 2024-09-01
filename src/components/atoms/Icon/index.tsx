'use client';
import { CSSProperties, FC } from 'react';
import {
  Icon as IconWrapper,
  IconPropsSizeOverrides,
  SxProps,
} from '@mui/material';

import { OverridableStringUnion } from '@mui/types';

type IconProps = {
  icon?: string;
  fontSize?: OverridableStringUnion<
    'inherit' | 'large' | 'medium' | 'small',
    IconPropsSizeOverrides
  >;
  sx?: CSSProperties;
  ariaHidden?: boolean;
};

const IconA: FC<IconProps> = ({
  icon = 'add_circle',
  fontSize = 'large',
  sx = {},
  ariaHidden = false,
}: IconProps) => {
  return (
    <IconWrapper aria-hidden={ariaHidden} fontSize={fontSize} style={sx}>
      {icon}
    </IconWrapper>
  );
};

export default IconA;
