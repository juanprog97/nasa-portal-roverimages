'use client';
import { FC, useRef, useState } from 'react';
import {
  FormControlLabel,
  Radio,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { useDarkMode } from '@/hooks';
import { colors } from '@/utils';
import styles from './ButtonOptions.module.scss';

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
