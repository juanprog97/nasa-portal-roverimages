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

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}
const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme }) => ({
  variants: [
    {
      props: { checked: true },
      style: {
        '.MuiFormControlLabel-label': {
          color: theme.palette.primary.main,
        },
      },
    },
  ],
}));

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
      control={
        <Radio
          className={style.RadioButton}
          // sx={{
          //   color: colors.black[200],
          //   '&.Mui-checked': {
          //     color: colors.black[200],
          //   },
          // }}
        />
      }
    />
  );
};

export default ButtonRadio;
