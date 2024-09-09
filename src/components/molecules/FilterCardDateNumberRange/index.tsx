'use client';
import {
  ButtonRadio,
  CardFilter,
  RangeInput,
  DatePicker,
} from '@/components/atoms';
import { RangeDate, toDateString, uuidv4 } from '@/utils';
import React, { FC, useState } from 'react';
import { GroupButtonOptions } from '..';
import { AnimatePresence, motion } from 'framer-motion';
import { relative } from 'path';
import { DateTime } from 'luxon';

type FilterCardDateNumberRangeProps = {
  labelFilter?: string;
  solDateRange: RangeDate;
  earthDateRange: RangeDate;
  onChange?: (value: string) => void;
};

const FilterCardDateNumberRange: FC<FilterCardDateNumberRangeProps> = ({
  labelFilter,
  solDateRange,
  earthDateRange,
  onChange,
}: FilterCardDateNumberRangeProps) => {
  const [filterState, setFilterState] = useState<string>('');
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
    <CardFilter label={labelFilter}>
      <GroupButtonOptions className='flex-row' onChange={handleChangeOption}>
        <ButtonRadio value='sol' label='☀️Sol Date' />
        <ButtonRadio value='earth_date' label='🌎Earth Date' />
      </GroupButtonOptions>
      <div className='mt-6'>
        {filterState == 'sol' ? (
          <RangeInput
            min={solDateRange.min}
            onChange={handleOnChangeDateSol}
            max={solDateRange.max}
          />
        ) : filterState == 'earth_date' ? (
          <DatePicker
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
