'use client';
import { DropdowmItemProps, uuidv4 } from '@/utils';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select/SelectInput';
import { style } from 'framer-motion/client';
import React, { FC, useState } from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  data?: DropdowmItemProps[];
  label: string;
  onChange?: (value: string) => void;
};

const Dropdown: FC<DropdownProps> = ({
  data = [],
  label,
  onChange,
}: DropdownProps) => {
  const [value, setValue] = useState<string>('All');
  const handleOnChange = (event: SelectChangeEvent) => {
    if (!!onChange) {
      onChange(event.target.value);
    }
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth className={styles.StyleForm}>
      <InputLabel id='select-options'>{label}</InputLabel>
      <Select
        labelId='select-options'
        id='demo-simple-select'
        value={value}
        label='All'
        onChange={handleOnChange}
        MenuProps={{ classes: { paper: styles.StylePopover } }}
      >
        <MenuItem value={'All'}>All</MenuItem>
        {data
          ? data.map((item: DropdowmItemProps) => (
              <MenuItem key={uuidv4()} value={item.value}>
                {item.label}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
