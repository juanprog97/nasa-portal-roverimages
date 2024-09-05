import { FilterProps } from '.';

export const formatparameter = (filters?: Partial<FilterProps>) => {
  const letterUrlRequest = `&api_key=${process.env.NEXT_PUBLIC_KEY_NASA}&`;
  if (filters != undefined) {
    Object.keys(filters).map((filter: string) => {
      letterUrlRequest.concat(
        `${filter}=${filters[filter as keyof FilterProps]}&`
      );
    });
    return letterUrlRequest.slice(0, letterUrlRequest.length - 1);
  }
  return letterUrlRequest;
};
