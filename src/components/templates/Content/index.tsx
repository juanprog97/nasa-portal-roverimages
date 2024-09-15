'use client';
'use client';
import {
  FullScreenPhotosContent,
  FullScreenPhotosFavoriteContent,
  ListCardPhotosInfinite,
} from '@/organisms';

const Content = () => {
  return (
    <>
      <ListCardPhotosInfinite />;
      <FullScreenPhotosContent />
      <FullScreenPhotosFavoriteContent />
    </>
  );
};

export default Content;
