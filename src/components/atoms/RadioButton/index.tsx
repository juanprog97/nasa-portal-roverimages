import { FC, useRef, useState } from 'react';
import { Radio } from '@mui/material';

type RadioButtonProps = {
  value?: string;
};

const RadioButton: FC<RadioButtonProps> = ({
  value = '',
}: RadioButtonProps) => {
  return <Radio value={value} />;
};

export default RadioButton;
