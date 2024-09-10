import { DateTime } from 'luxon';

export const currentDate = () => {
  return DateTime.now();
};

export const toDateTime = (date: string): DateTime<boolean> | null => {
  if (IsDate(date)) return DateTime.fromFormat(date, 'yyyy-MM-dd');
  else return null;
};

export const parseDate = (dateString?: string): DateTime | undefined => {
  if (!dateString) return undefined;
  const parsedDate = DateTime.fromISO(dateString);
  return parsedDate.isValid ? parsedDate : undefined;
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
    return amount < 0
      ? dateBase.minus({ [unit]: amount }).toISODate()
      : dateBase.plus({ [unit]: amount }).toISODate();
  }
  return DateTime.now().toISODate();
};

export const IsDate = (date: string): boolean => {
  return isNaN(Number(date)) && DateTime.fromISO(date).isValid;
};
