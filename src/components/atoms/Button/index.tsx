'use client';
import { default as ButtonAs } from '@mui/material/ButtonBase';
import stylesButton from './Button.module.scss';
import { useDarkMode } from '@/hooks';

type AllowedColor = 'red' | 'blue';

type ButtonProps = {
  color?: AllowedColor;
  label?: string;
  children?: any;
  onClick?: () => void;
  className?: string;
};
const Button: React.FC<ButtonProps> = ({
  children,
  color = 'red',
  onClick = () => {},
  className = '',
}: ButtonProps) => {
  return (
    <ButtonAs
      data-color={color}
      className={`${stylesButton.ButtonNasa} ${className}`}
      onClick={onClick}
    >
      {children}
    </ButtonAs>
  );
};

export default Button;
