import axios from 'axios';

import { FilterProps, formatparameter, URLBASEA } from '@/utils';

export const fetchPhotos = (page: number, filters?: Partial<FilterProps>) => {
  const url = `${URLBASEA}${formatparameter(page, filters)}`;
  return {
    call: axios.get<any>(url),
  };
};
