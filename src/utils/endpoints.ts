import { URLBASE } from '.';

export const urlListRovers = () => {
  return `${URLBASE}rovers?`;
};

export const urlListPhotosRover = (roverName: String) => {
  return `${URLBASE}rovers/${roverName}/photos?`;
};
