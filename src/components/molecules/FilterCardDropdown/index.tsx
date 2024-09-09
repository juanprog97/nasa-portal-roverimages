'use client';
import { CardFilter, Dropdown } from '@/components/atoms';
import { OptionsItemProps } from '@/utils';
import React, { FC } from 'react';

type FilterCardDropdownProps = {
  data?: OptionsItemProps[];
  labelFilter?: string;
  labelDropdown?: string;
  onChange: (value: string) => void;
};

const FilterCardDropdown: FC<FilterCardDropdownProps> = ({
  data = [],
  labelFilter = '',
  labelDropdown = '',
  onChange = () => {},
}: FilterCardDropdownProps) => {
  const handleOnChange = (value: string) => {
    if (!!onChange) {
      onChange(value);
    }
  };
  return (
    <CardFilter label={labelFilter}>
      <Dropdown label={labelDropdown} onChange={handleOnChange} data={data} />
    </CardFilter>
  );
};

export default FilterCardDropdown;
