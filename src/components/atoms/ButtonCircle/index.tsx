'use client';
import Button, {
  ButtonPropsColorOverrides,
  ButtonPropsVariantOverrides,
} from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';
import { FC } from 'react';

type ButtonCircleProps = {
  variant?: OverridableStringUnion<
    'text' | 'outlined' | 'contained',
    ButtonPropsVariantOverrides
  >;
  children?: any;
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
}: ButtonCircleProps) => {
  return (
    <Button
      onClick={onClick}
      style={{
        justifyContent: 'center',
        borderRadius: '100%',
        display: 'flex',
        width: '80px',
        height: '80px',
      }}
      variant={variant}
      color={color}
    >
      {children}
    </Button>
  );
};

export default ButtonCircle;
