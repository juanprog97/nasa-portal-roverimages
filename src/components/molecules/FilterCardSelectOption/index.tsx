'use client';
import { ButtonRadio, CardFilter } from '@/components/atoms';
import { OptionsItemProps, uuidv4 } from '@/utils';
import { FC } from 'react';
import { GroupButtonOptions } from '..';

type FilterCardSelectOptionProps = {
  labelFilter?: string;
  listOptions?: OptionsItemProps[];
  onChange?: (value: string) => void;
  className?: string;
};

const FilterCardSelectOption: FC<FilterCardSelectOptionProps> = ({
  labelFilter,
  listOptions = [],
  className = '',
  onChange = () => {},
}: FilterCardSelectOptionProps) => {
  const handleOnChangeOption = (_a: any, value: string) => {
    if (!!onChange) {
      onChange(value);
    }
  };
  return (
    <CardFilter label={labelFilter}>
      <GroupButtonOptions onChange={handleOnChangeOption} className={className}>
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
