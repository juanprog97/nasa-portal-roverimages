import { DateTime } from 'luxon';

export const currentDate = () => {
  return DateTime.now();
};

export const toDateTime = (date: string): DateTime<boolean> => {
  return DateTime.fromISO(date);
};
