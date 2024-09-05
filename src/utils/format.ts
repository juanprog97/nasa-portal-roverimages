import { FilterProps } from '.';

export const formatparameter = (
  page: number,
  filters?: Partial<FilterProps>
) => {
  const letterUrlRequest = `&page=${page}&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}&sol=1000&`;

  if (filters != undefined) {
    Object.keys(filters).map((filter: string) => {
      letterUrlRequest.concat(
        `${filter}=${filters[filter as keyof FilterProps]}&`
      );
    });
  }
  return letterUrlRequest.slice(0, letterUrlRequest.length - 1);
};
