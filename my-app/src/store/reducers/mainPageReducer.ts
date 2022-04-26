import { Reducer } from 'react';
import { actionTypes } from '../../types/store/actionTypes';
import appAction from '../../types/store/appAction';
import { storeMainPage } from '../../types/store/storeMainPage';
import { sortByType } from '../../utils/utils';

type State = storeMainPage;
type Action = appAction;

const mainPageReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.LOADING_STOP: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actionTypes.INPUT: {
      const searchValue = action.payload;
      return {
        ...state,
        searchValue,
      };
    }
    case actionTypes.SORT: {
      const sort = action.payload;
      const sortedCards = sortByType(sort, state.cards);
      return {
        ...state,
        cards: sortedCards,
        sort,
      };
    }
    case actionTypes.PER_PAGE: {
      const perPage = action.payload;
      const totalPagesCount = Math.ceil(state.totalCardsCount / perPage);
      return {
        ...state,
        totalPagesCount,
        perPage,
      };
    }
    case actionTypes.FETCH_CARDS: {
      const data = action.payload;
      const sortedCards = sortByType(state.sort, data.results);
      return {
        ...state,
        cards: sortedCards,
        totalCardsCount: data.info.count,
        totalApiPagesCount: data.info.pages,
      };
    }
    case actionTypes.FETCH_EMPTY: {
      return {
        ...state,
        cards: [],
      };
    }
    case actionTypes.CHANGE_PAGE: {
      const currentPage = action.payload;
      return {
        ...state,
        currentPage,
      };
    }
    default:
      return state;
  }
};

export default mainPageReducer;
