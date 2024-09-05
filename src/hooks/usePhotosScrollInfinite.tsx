import useSWRInfinite from 'swr/infinite';
import { fetchPhotos } from '@/services';
import { FilterProps, formatparameter } from '@/utils';
import { photosDetailsAdapter } from '@/adapters';

const useScrollInfinite = (filter?: Partial<FilterProps>) => {
  const fetcher = (url: string) =>
    fetchPhotos(filter)
      .get(url)
      .then((res) => res.data);

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/photos?page=${pageIndex + 1}${formatparameter(filter)}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher
  );
  console.log(data, 'sda');
  const dataQ = data ? [].concat(...data) : [];
  const photos = photosDetailsAdapter(dataQ);
  return {
    photos,
    error,
    isLoading: !data && !error,
    isValidating,
  };
};

export default useScrollInfinite;
