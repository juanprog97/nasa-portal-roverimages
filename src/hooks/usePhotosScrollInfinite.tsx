import useSWRInfinite from 'swr/infinite';
import { fetchPhotos } from '@/services';
import { FilterProperties } from '@/utils';
import { photosDetailsAdapter } from '@/adapters';
import { useFilterState } from '.';
import { useEffect } from 'react';

const useScrollInfinite = () => {
  const { filterState } = useFilterState();

  const fetcher = async ({
    page,
    filter,
  }: {
    page: number;
    filter: FilterProperties;
  }) => {
    const response = await fetchPhotos(page, filter).call;
    const data = response.data;
    return data.hasOwnProperty('photos') ? data.photos : data.latest_photos;
  };
  const SWR_OPTIONS = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 200,
  };

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return { page: pageIndex + 1, filter: filterState };
  };

  const { data, error, size, setSize, isValidating, mutate } = useSWRInfinite(
    getKey,
    fetcher,
    SWR_OPTIONS
  );
  useEffect(() => {
    mutate();
  }, [filterState, mutate]);

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
