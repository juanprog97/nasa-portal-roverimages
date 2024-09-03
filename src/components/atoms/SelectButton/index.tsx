import { FC, useRef, useState } from 'react';
import { Radio } from '@mui/material';

type SelectButtonProps = {
  value?: string;
};

const SelectButton: FC<SelectButtonProps> = ({
  value = '',
}: SelectButtonProps) => {
  return <Radio value={value} />;
};

export default SelectButton;
