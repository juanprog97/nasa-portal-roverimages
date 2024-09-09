import { Box, Slider, Typography } from '@mui/material';
import styles from './RangeInput.module.scss';
import { FC, useState } from 'react';

type RangeInputProp = {
  min: string;
  max: string;
  labelMin?: string;
  labelMax?: string;
  onChange?: (value: string) => void;
};

const RangeInput: FC<RangeInputProp> = ({
  min,
  max,
  labelMin,
  labelMax,
  onChange,
}) => {
  const [value, setValue] = useState<number>(1);
  const handleOnChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    if (!!onChange) {
      onChange(newValue.toString());
    }
  };
  const marks = [
    {
      value: parseInt(min),
      label: labelMin,
    },
    {
      value: parseInt(max),
      label: labelMax,
    },
  ];
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        className={styles.SliderStyle}
        marks={marks}
        value={value}
        valueLabelDisplay='auto'
        min={parseInt(min)}
        max={parseInt(max)}
        onChange={handleOnChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          onClick={() => setValue(parseInt(min))}
          sx={{ cursor: 'pointer' }}
        >
          {min} min
        </Typography>
        <Typography>{value} </Typography>
        <Typography
          variant='body2'
          onClick={() => setValue(parseInt(max))}
          sx={{ cursor: 'pointer' }}
        >
          {max} max
        </Typography>
      </Box>
    </Box>
  );
};

export default RangeInput;
