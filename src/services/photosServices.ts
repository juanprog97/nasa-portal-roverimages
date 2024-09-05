import axios from 'axios';

import { FilterProps, formatparameter, URLBASE } from '@/utils';

export const fetchPhotos = (page: number, filters?: Partial<FilterProps>) => {
  const url = `${URLBASE}${formatparameter(page, filters)}`;
  return {
    call: axios.get<any>(url),
  };
};
