import { CardDataPresentation } from '@/models';

export const photosDetailsAdapter: any = (data: any) => {
  const photos = data.length > 0 ? data : [];

  let listPhotos: CardDataPresentation[] = [];
  listPhotos = photos.map((photo: any) => {
    return {
      id: photo.id.toString(),
      imgsrc: photo.img_src,
      earthDate: photo.earth_date,
      roverName: photo.rover.name,
      solDate: photo.sol.toString(),
      camera: photo.camera.full_name,
    };
  });
  return listPhotos;
};
