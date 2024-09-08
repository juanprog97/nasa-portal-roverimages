import { TextField } from '@mui/material';
import styles from './InputNumber.module.scss';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  useState,
} from 'react';

type InputNumberProps = {
  label: string;
  onChange?: (event: string) => void;
  max: string;
  min: string;
};

const InputNumber: FC<InputNumberProps> = ({
  onChange,
  label,
  max,
  min,
}: InputNumberProps) => {
  const [valueInput, setValueInput] = useState<number>(1);
  const handleOnChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let value = event.target.value;
    if (parseInt(event.target.value) < parseInt(min)) {
      value = min;
    } else if (parseInt(event.target.value) > parseInt(max)) {
      value = max;
    }
    setValueInput(parseInt(value));
    if (!!onChange) {
      onChange(value);
    }
  };

  return (
    <TextField
      className={styles.InputStyle}
      onChange={handleOnChange}
      value={valueInput}
      type='number'
      variant='standard'
      label={label}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};

export default InputNumber;
