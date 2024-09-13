'use client';

import { useLocalStorage } from '@/hooks';
import { CardDataPresentation as photoDetails } from '@/models';
import { FilterProperties } from '@/utils';
import { FC, ReactNode, createContext } from 'react';

/**
 * UseFavoriteImages
 * @property {AllowedState} favoriteImages- state favoriteImages.
 */
interface FavoritesImagesContextProps {
  listImagesFavorite: photoDetails[];
  addFavorite: (photos: photoDetails) => void;
  deleteFavorite: (id: number) => void;
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

  const objectToArray = (data: {
    [key: string | number]: photoDetails;
  }): photoDetails[] => {
    const arrayData = Object.keys(data).map((value: string) => {
      return data[value];
    });
    return arrayData;
  };

  const handleIslikeImage = (id: number | string) => {
    return id in dataImagesFavorite;
  };

  const addImageFavoriteHandle = (value: photoDetails) => {
    let objectAdd: { [key: string | number]: photoDetails } = {};
    objectAdd[value.id] = value;

    const dataObject = { ...dataImagesFavorite, ...objectAdd };
    setDataImagesFavorite(dataObject);
  };

  const deleteImageFavoriteHandle = (id: number | string) => {
    const { [id]: _, ...deleteItem } = dataImagesFavorite;
    setDataImagesFavorite(deleteItem);
  };

  return (
    <FavoritesImagesContext.Provider
      value={{
        listImagesFavorite: objectToArray(
          dataImagesFavorite
        ) as unknown as photoDetails[],
        addFavorite: addImageFavoriteHandle,
        deleteFavorite: deleteImageFavoriteHandle,
        isPhotoLike: handleIslikeImage,
      }}
    >
      {children}
    </FavoritesImagesContext.Provider>
  );
};
