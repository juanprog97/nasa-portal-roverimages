import axios from 'axios';
import { FilterProps, URLBASE } from '@/utils';

export const fetchPhotos = (filters?: Partial<FilterProps>) => {
  return axios.create({
    baseURL: URLBASE,
    timeout: 10000,
  });
};
