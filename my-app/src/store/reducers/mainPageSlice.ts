import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types/apiTypes/character';
import sortTypes from '../../types/store/sortTypes';
import { sortByType } from '../../utils/utils';
import fetchCharacterByLink from '../features/fetchCharacterByLink';
import initialAppState from '../initialAppState';
import { RootState } from '../store';

const initialState = { ...initialAppState.mainPage };

export const mainPageReducer = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    input: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    sort: (state, action: PayloadAction<sortTypes>) => {
      const sort = action.payload;
      const sortedCards = sortByType(sort, state.cards);

      state.cards = sortedCards;
      state.sort = sort;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      const perPage = action.payload;

      state.totalPagesCount = Math.ceil(state.totalCardsCount / perPage);
      state.perPage = perPage;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    pickCard: (state, action: PayloadAction<Character>) => {
      state.pickedCard = action.payload;
    },
    unpickCard: (state) => {
      state.pickedCard = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacterByLink.fulfilled, (state, action) => {
      if (!action.payload.results || !action.payload.info) {
        state.cards = [];
        state.totalApiPagesCount = 1;
      } else {
        const sortedCards = sortByType(state.sort, action.payload.results);

        state.cards = sortedCards;
        state.totalCardsCount = action.payload.info.count;
        state.totalApiPagesCount = action.payload.info.pages;
      }
    });
  },
});

export const {
  startLoading,
  stopLoading,
  input,
  sort,
  setPerPage,
  changePage,
  pickCard,
  unpickCard,
} = mainPageReducer.actions;

export const selectMainPage = (state: RootState) => state;

export default mainPageReducer.reducer;
