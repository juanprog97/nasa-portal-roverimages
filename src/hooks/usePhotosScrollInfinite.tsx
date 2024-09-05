import useSWRInfinite from 'swr/infinite';
import { fetchPhotos } from '@/services';
import { FilterProps, formatparameter } from '@/utils';
import { photosDetailsAdapter } from '@/adapters';

const useScrollInfinite = (filter?: Partial<FilterProps>) => {
  const fetcher = async ({ page }: { page: number }) => {
    const response = await fetchPhotos(page, filter).call;

    return response.data.photos;
  };
  const SWR_OPTIONS = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 500,
  };

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return { page: pageIndex + 1 };
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    getKey,
    fetcher,
    SWR_OPTIONS
  );

  const dataQ = data ? [].concat(...data) : [];
  const photos = photosDetailsAdapter(dataQ);
  return {
    photos: photos,
    error,
    isLoading: !data && !error,
    isReachingEnd: data && data[data.length - 1]?.length === 0,
    loadMore: () => setSize(size + 1),
    isValidating,
  };
};

export default useScrollInfinite;
