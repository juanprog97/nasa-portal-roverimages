import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { FC } from 'react';
import { DatePicker as DateBaseElement } from '@mui/x-date-pickers/DatePicker';
import { DateTime } from 'luxon';
import { toDateTime } from '@/utils';
import styles from './DatePicker.module.scss';

type DatePickerProps = {
  startDate?: string;
  endDate?: string;
  label?: string;
  onChange?: (value: DateTime<boolean> | null) => void;
};

const DatePicker: FC<DatePickerProps> = ({ startDate, endDate, onChange }) => {
  const handleOnChange = (value: DateTime<boolean> | null) => {
    if (!!onChange) {
      onChange(value);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <DateBaseElement
        className={styles.DateStyle}
        {...(startDate && { minDate: toDateTime(startDate) })}
        {...(endDate && { maxDate: toDateTime(endDate) })}
        onChange={handleOnChange}
     
        slotProps={{
          popper: {
            className: styles.dialogCustomStyle, // Aplica la clase SCSS al papel del diálogo del DatePicker
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
