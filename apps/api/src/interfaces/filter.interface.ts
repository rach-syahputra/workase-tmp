export type OrderType = 'asc' | 'desc';

export interface IFilter {
  q?: string;
  order?: OrderType;
  page?: number;
  limit?: number;
  cursor?: string; // typically the last retrieved item's ID
}
