'use client';
import { ButtonOptionsChip } from '@/components/atoms';
import { GroupButtonOptions } from '@/components/molecules';
import { FavoriteSearch } from '@/utils';
import { ChangeEvent, FC, useState } from 'react';

type ListFavoritesSearchProps = {
  listOptions: FavoriteSearch[];
  onChange?: (value: string) => void;
  valueDefault: string;
};

const ListFavoritesSearch: FC<ListFavoritesSearchProps> = ({
  valueDefault = '',
  listOptions = [],
  onChange = () => {},
}: ListFavoritesSearchProps) => {
  const [currentValue, setCurrentValue] = useState<string>(valueDefault);

  const handlesetValue = (value: string) => {
    setCurrentValue(value);
    if (onChange != null) {
      onChange(value);
    }
  };

  return (
    <GroupButtonOptions>
      {listOptions && listOptions.length
        ? listOptions.map((options: FavoriteSearch, index: number) => (
            <ButtonOptionsChip
              key={options.id}
              selectedValue={currentValue}
              value={options.value}
              label={options.label}
              onChange={handlesetValue}
            />
          ))
        : null}
    </GroupButtonOptions>
  );
};

export default ListFavoritesSearch;
