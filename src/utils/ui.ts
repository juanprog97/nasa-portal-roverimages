export interface FavoriteSearch {
  label: string;
  value: string;
  id: string;
}
export type FilterProps = {
  sol: string;
  earth_date: string;
  camera: string;
};

export type OptionsItemProps = {
  label: string;
  value: string;
  details?: any;
};

export type RangeDate = {
  min: string;
  max: string;
};

export type FilterProperties = {
  camera?: string;
  earth_date?: string;
  sol?: string;
  rover?: string;
};
