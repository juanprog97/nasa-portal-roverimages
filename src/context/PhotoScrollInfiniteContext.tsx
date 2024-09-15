'use client';

import { FC, ReactNode, createContext, useEffect, useState } from 'react';
import { CardDataPresentation as PhotosDetails } from '@/models';
import { useFilterState } from '@/hooks';
import { FilterProperties } from '@/utils';
import { fetchPhotos } from '@/services';
import useSWRInfinite from 'swr/infinite';
import { photosDetailsAdapter } from '@/adapters';

/**
 * usePhotosScrollInfinite
 * @property {AllowedState} openState- state openState.
 *  @property {AllowedState} error- state error.
 *   @property {AllowedState} isLoading- state isLoading.
 *   @property {AllowedState} isReachingEnd- state reachingEnd.
 *   @property {AllowedState} loadMore- function to loadMore.
 *    @property {AllowedState} isValidating- state validating.
 */
interface PhotoScrollInfiniteContextProps {
  photos: PhotosDetails[];
  error: any;
  isLoading: boolean;
  isReachingEnd: boolean | undefined;
  loadMore: () => void;
  isValidating: boolean;
}
export const PhotoScrollInfiniteContext = createContext<
  PhotoScrollInfiniteContextProps | undefined
>(undefined);

export const PhotoScrollInfiniteProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
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
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (previousPageData && !previousPageData.length) return null;
    return { page: pageIndex + 1, filter: filterState };
  };
  const { data, error, size, setSize, isValidating, mutate } = useSWRInfinite(
    getKey,
    fetcher
  );
  useEffect(() => {
    mutate();
  }, [filterState, mutate]);
  const dataQ = data ? [].concat(...data) : [];
  const photos = photosDetailsAdapter(dataQ);

  return (
    <PhotoScrollInfiniteContext.Provider
      value={{
        photos: photos,
        error: error,
        isLoading: !data && !error,
        isReachingEnd: data && data[data.length - 1]?.length === 0,
        loadMore: () => setSize(size + 1),
        isValidating,
      }}
    >
      {children}
    </PhotoScrollInfiniteContext.Provider>
  );
};
