export interface FavoriteSearch {
  label: string;
  value: string;
  id: string;
}
export type FilterProps = Partial<FilterProperties>;

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
