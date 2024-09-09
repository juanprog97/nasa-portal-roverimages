import { FilterProperties, FilterProps } from '.';

export const formatparameter = (
  page: number,
  filters?: Partial<FilterProperties>
) => {
  let letterUrlRequest = `?&page=${page}&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}`;

  if (filters != undefined) {
    Object.keys(filters).forEach((filter: string) => {
      letterUrlRequest += `&${filter}=${filters[filter as keyof FilterProps]}`;
    });
  }

  return letterUrlRequest;
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
