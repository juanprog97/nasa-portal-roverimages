import { DateTime } from 'luxon';

export const currentDate = () => {
  return DateTime.now().toFormat('yyyy-MM-dd');
};
