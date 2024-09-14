'use client';

import { useLocalStorage } from '@/hooks';
import { CardDataPresentation as photoDetails } from '@/models';
import { FilterProperties } from '@/utils';
import { FC, ReactNode, createContext, useCallback, useState } from 'react';

/**
 * UseFavoriteImages
 * @property {AllowedState} favoriteImages- state favoriteImages.
 */
interface FavoritesImagesContextProps {
  listImagesFavorite: photoDetails[];
  addFavorite: (photos: photoDetails) => void;
  deleteFavorite: (id: number) => void;
  deleteManyFavorite: (id: number[]) => void;
  isPhotoLike: (id: number | string) => boolean;
}
export const FavoritesImagesContext = createContext<
  FavoritesImagesContextProps | undefined
>(undefined);

export const FavoritesImagesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dataImagesFavorite, setDataImagesFavorite] = useLocalStorage<{
    [key: string | number]: photoDetails;
  }>('photos-favorite', {});

  const [dataFavorite, setDataFavorite] = useState<{
    [key: string | number]: photoDetails;
  }>(dataImagesFavorite);

  const objectToArray = (data: {
    [key: string | number]: photoDetails;
  }): photoDetails[] => {
    const arrayData = Object.keys(data).map((value: string) => {
      return data[value];
    });
    return arrayData;
  };

  const handleIslikeImage = useCallback(
    (id: number | string) => {
      return id in dataFavorite;
    },
    [dataFavorite]
  );

  const addImageFavoriteHandle = (value: photoDetails) => {
    let objectAdd: { [key: string | number]: photoDetails } = {};
    objectAdd[value.id] = value;

    const dataObject = { ...dataFavorite, ...objectAdd };
    setDataFavorite(dataObject);
    setDataImagesFavorite(dataObject);
  };

  const deleteImageFavoriteHandle = (id: number) => {
    const { [id]: _, ...deleteItem } = dataFavorite;
    setDataFavorite(deleteItem);
    setDataImagesFavorite(deleteItem);
  };

  const deleteImagesFavoriteHandle = (id: number[]) => {
    let newData = { ...dataFavorite };

    id.forEach((id) => {
      const { [id]: _, ...rest } = newData;
      newData = rest;
    });
    setDataFavorite(newData);
    setDataImagesFavorite(newData);
  };

  return (
    <FavoritesImagesContext.Provider
      value={{
        listImagesFavorite: objectToArray(dataFavorite),
        addFavorite: addImageFavoriteHandle,
        deleteFavorite: deleteImageFavoriteHandle,
        deleteManyFavorite: deleteImagesFavoriteHandle,
        isPhotoLike: handleIslikeImage,
      }}
    >
      {children}
    </FavoritesImagesContext.Provider>
  );
};
