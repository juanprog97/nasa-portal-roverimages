'use client';
import { FC } from 'react';
import {
  FormControlLabel,
  Radio,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import styles from './ButtonOptionsChip.module.scss';

type ButtonOptionsProps = {
  value: string;
  label: string;
  onChange?: (value: any) => void;
  sx?: SxProps<Theme>;
  selectedValue: string;
};

const ButtonOptions: FC<ButtonOptionsProps> = ({
  value = '',
  label = '',
  selectedValue = '',
  onChange = (val) => {},
}: ButtonOptionsProps) => {
  const selected = selectedValue === value;

  return (
    <FormControlLabel
      value={value}
      data-selected={selected}
      control={<Radio sx={{ display: 'none' }} />}
      label={
        <Typography className={styles.TypographyStyle}>{label}</Typography>
      }
      onClick={() => onChange(value)}
      className={styles.ButtonOptionStyle}
    />
  );
};

export default ButtonOptions;
