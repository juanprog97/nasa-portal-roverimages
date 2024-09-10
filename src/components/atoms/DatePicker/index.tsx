import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { FC, useState } from 'react';
import { DatePicker as DateBaseElement } from '@mui/x-date-pickers/DatePicker';
import { DateTime } from 'luxon';
import { currentDate, parseDate, toDateTime } from '@/utils';
import styles from './DatePicker.module.scss';

type DatePickerProps = {
  startDate?: string;
  endDate?: string;
  label?: string;
  onChange?: (value: DateTime<boolean> | null) => void;
  value?: string;
};

const DatePicker: FC<DatePickerProps> = ({
  startDate,
  value,
  endDate,
  onChange,
}) => {
  const [dateTime, setDateTime] = useState<DateTime<boolean> | null>(
    (value != undefined
      ? toDateTime(value)
      : currentDate()) as DateTime<boolean> | null
  );
  const handleOnChange = (value: DateTime<boolean> | null) => {
    if (!!onChange) {
      onChange(value);
    }
    setDateTime(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateBaseElement
        value={dateTime}
        className={styles.DateStyle}
        {...(startDate && { minDate: parseDate(startDate) })}
        {...(endDate && { maxDate: parseDate(endDate) })}
        onChange={handleOnChange}
        slotProps={{
          popper: {
            className: styles.dialogCustomStyle,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
