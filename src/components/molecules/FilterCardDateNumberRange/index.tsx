'use client';
import { ButtonRadio, CardFilter, RangeInput, DatePicker } from '@/atoms';
import { FilterProperties, RangeDate, toDateString, uuidv4 } from '@/utils';
import React, { FC, useState } from 'react';
import { GroupButtonOptions } from '..';
import styles from './GroupButton.module.scss';
import { DateTime } from 'luxon';

type FilterCardDateNumberRangeProps = {
  labelFilter?: string;
  solDateRange: RangeDate;
  earthDateRange: RangeDate;
  onChange?: (value: string) => void;
  isOpen?: boolean;
  value: Partial<FilterProperties>;
};

const FilterCardDateNumberRange: FC<FilterCardDateNumberRangeProps> = ({
  labelFilter,
  solDateRange,
  earthDateRange,
  isOpen,
  value,
  onChange,
}: FilterCardDateNumberRangeProps) => {
  const { sol, earth_date } = value;

  const [filterState, setFilterState] = useState<string | undefined>(
    sol !== undefined
      ? 'sol'
      : earth_date != undefined
        ? 'earth_date'
        : undefined
  );
  const handleChangeOption = (_v: any, value: string) => {
    setFilterState(value);
  };

  const handleOnChangeDate = (value: DateTime<boolean> | null) => {
    if (!!onChange) {
      onChange(toDateString(value));
    }
  };
  const handleOnChangeDateSol = (value: string) => {
    if (!!onChange) {
      onChange(value);
    }
  };
  return (
    <CardFilter
      className={styles.ContainerClass}
      label={labelFilter}
      isOpen={isOpen}
    >
      <GroupButtonOptions
        className={styles.ButtonStyle}
        onChange={handleChangeOption}
        value={filterState}
      >
        <ButtonRadio value='sol' label='☀️Sol Date' />
        <ButtonRadio value='earth_date' label='🌎Earth Date' />
      </GroupButtonOptions>
      <div className='mx-auto'>
        {filterState == 'sol' ? (
          <RangeInput
            value={sol ? parseInt(sol) : undefined}
            min={solDateRange.min}
            onChange={handleOnChangeDateSol}
            max={solDateRange.max}
          />
        ) : filterState == 'earth_date' ? (
          <DatePicker
            value={earth_date}
            onChange={handleOnChangeDate}
            startDate={earthDateRange.min}
            endDate={earthDateRange.max}
          />
        ) : null}
      </div>
    </CardFilter>
  );
};

export default FilterCardDateNumberRange;
