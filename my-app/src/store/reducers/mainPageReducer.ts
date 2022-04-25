import { Reducer } from 'react';
import { actionTypes } from '../../types/store/actionTypes';
import appAction from '../../types/store/appAction';
import { storeMainPage } from '../../types/store/storeMainPage';

type State = storeMainPage;
type Action = appAction;

const mainPageReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT: {
      const searchValue = action.payload;
      return {
        ...state,
        searchValue,
      };
    }
    case actionTypes.SORT: {
      const sort = action.payload;
      return {
        ...state,
        sort,
      };
    }
    case actionTypes.PER_PAGE: {
      const perPage = action.payload;
      return {
        ...state,
        perPage,
      };
    }
    default:
      return state;
  }
};

export default mainPageReducer;
