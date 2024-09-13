'use client';
'use client';
import {
  FullScreenPhotosContent,
  FullScreenPhotosFavoriteContent,
  ListCardPhotosInfinite,
} from '@/components/organisms';

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
