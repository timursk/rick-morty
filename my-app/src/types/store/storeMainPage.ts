import sortTypes from './sortTypes';

export interface storeMainPage {
  searchValue: string;
  sort: sortTypes;
  isFetching: boolean;
  currentPage: number;
  perPage: number;
  totalCount: number;
}
