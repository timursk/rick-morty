import { Character } from '../apiTypes/character';
import sortTypes from './sortTypes';

export interface storeMainPage {
  isLoading: boolean;
  searchValue: string;
  sort: sortTypes;
  isFetching: boolean;
  currentPage: number;
  perPage: number;
  totalCardsCount: number;
  totalPagesCount: number;
  totalApiPagesCount: number;
  cards: Character[];
  pickedCard: Character;
}
