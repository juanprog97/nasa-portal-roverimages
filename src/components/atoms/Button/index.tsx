import { default as ButtonAs } from '@mui/material/ButtonBase';
import stylesButton from './Button.module.scss';

type AllowedColor = 'red' | 'blue';

type ButtonProps = {
  color?: AllowedColor;
  label?: string;
  children?: string;
  styles?: string;
  onClick?: () => void;
};
export const Button = ({
  children,
  styles,
  color = 'red',
  onClick = () => {},
}: ButtonProps) => {
  return (
    <ButtonAs
      data-color={color}
      className={`${stylesButton.ButtonNasa} ${styles}`}
      onClick={() => onClick()}
    >
      {children}
    </ButtonAs>
  );
};
