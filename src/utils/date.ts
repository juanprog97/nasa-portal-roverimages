import { DateTime } from 'luxon';

export const currentDate = () => {
  return DateTime.now();
};

export const toDateTime = (date: string): DateTime<boolean> => {
  return DateTime.fromISO(date);
};

export const toDateString = (value: DateTime<boolean> | null): string => {
  if (value != null && value.isValid) {
    return value.toISODate() as string;
  }
  return DateTime.now().toISODate();
};

type AllowPropierties = 'days' | 'months' | 'years';

export const AdjustDate = (
  date: string,
  amount: number,
  unit: AllowPropierties
): string => {
  let dateBase = DateTime.fromISO(date);

  if (dateBase.isValid) {
    return dateBase.plus({ [unit]: amount }).toISODate();
  }
  return DateTime.now().toISODate();
};

export const IsDate = (date: string): boolean => {
  return isNaN(Number(date)) && DateTime.fromISO(date).isValid;
};
