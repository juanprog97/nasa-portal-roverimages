import React from 'react';
import { useRadioGroup } from '@mui/material/RadioGroup';
import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  styled,
} from '@mui/material';
import { colors } from '@/utils/';
import style from './ButtonRadio.module.scss';

const ButtonRadio = (props: Omit<FormControlLabelProps, 'control'>) => {
  const radioGroup = useRadioGroup();
  let checked = false;
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return (
    <FormControlLabel
      data-checked={checked}
      className={style.ButtonRadioStyle}
      checked={checked}
      {...props}
      control={<Radio className={style.RadioButton} />}
    />
  );
};

export default ButtonRadio;
