import axios from 'axios';

import { FilterProps, URLBASE, URLDEFAULT, formatparameter } from '@/utils';

export const fetchPhotos = (page: number, filters?: FilterProps) => {
  let baseUrl = '';
  if (filters != undefined && 'rover' in filters) {
    const { rover, ...t } = filters;
    baseUrl = `${URLBASE}/${filters?.rover}/photos${formatparameter(page, t)}`;
  } else {
    baseUrl = `${URLDEFAULT}${formatparameter(page, filters)}`;
  }

  return {
    call: axios.get<any>(baseUrl),
  };
};
