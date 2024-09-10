'use client';
import { CardFilter, Dropdown } from '@/components/atoms';
import { OptionsItemProps } from '@/utils';
import React, { FC, useState } from 'react';

type FilterCardDropdownProps = {
  data?: OptionsItemProps[];
  labelFilter?: string;
  labelDropdown?: string;
  onChange: (value: string) => void;
  isOpen?: boolean;
  value?: string;
};

const FilterCardDropdown: FC<FilterCardDropdownProps> = ({
  data = [],
  labelFilter = '',
  labelDropdown = '',
  isOpen,
  value = '',
  onChange = () => {},
}: FilterCardDropdownProps) => {
  const [camera, setCamera] = useState<string>(value);
  const handleOnChange = (value: string) => {
    if (!!onChange) {
      onChange(value);
    }
    setCamera(value);
  };
  return (
    <CardFilter label={labelFilter} isOpen={isOpen}>
      <Dropdown
        value={camera}
        label={labelDropdown}
        onChange={handleOnChange}
        data={data}
      />
    </CardFilter>
  );
};

export default FilterCardDropdown;
