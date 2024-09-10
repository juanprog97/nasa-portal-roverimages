'use client';
import { ButtonRadio, CardFilter } from '@/components/atoms';
import { OptionsItemProps, uuidv4 } from '@/utils';
import { FC, useState } from 'react';
import { GroupButtonOptions } from '..';

type FilterCardSelectOptionProps = {
  labelFilter?: string;
  listOptions?: OptionsItemProps[];
  onChange?: (value: string) => void;
  className?: string;
  value?: string;
};

const FilterCardSelectOption: FC<FilterCardSelectOptionProps> = ({
  labelFilter,
  listOptions = [],
  className = '',
  value = '',
  onChange = () => {},
}: FilterCardSelectOptionProps) => {
  const [valueOption, setValue] = useState<string>(value);
  const handleOnChangeOption = (_a: any, value: string) => {
    setValue(value);
    if (!!onChange) {
      onChange(value);
    }
  };
  return (
    <CardFilter label={labelFilter}>
      <GroupButtonOptions
        onChange={handleOnChangeOption}
        value={valueOption}
        className={className}
      >
        {listOptions.map((option: OptionsItemProps) => (
          <ButtonRadio
            value={option.value}
            key={uuidv4()}
            label={option.label}
          />
        ))}
      </GroupButtonOptions>
    </CardFilter>
  );
};

export default FilterCardSelectOption;
