'use client';
import Button, {
  ButtonPropsColorOverrides,
  ButtonPropsVariantOverrides,
} from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';
import { FC } from 'react';
import styles from './ButtonCircle.module.scss';

type ButtonCircleProps = {
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >;
  children?: any;
  className?: string;
  onClick?: () => void;
  color?: OverridableStringUnion<
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning',
    ButtonPropsColorOverrides
  >;
};

const ButtonCircle: FC<ButtonCircleProps> = ({
  children,
  onClick = () => {},
  variant = 'outlined',
  color = 'inherit',
  className = '',
}: ButtonCircleProps) => {
  return (
    <button className={`${styles.ButtonStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonCircle;
