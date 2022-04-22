import { Reducer } from 'react';
import Content from '../../types/content';
import { actionTypes } from '../../types/actionTypes';
import appAction from '../../types/appAction';
import sortTypes from '../../types/sortTypes';

type State = Content;
type Action = appAction;

const appReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
      };
    }
    case actionTypes.INPUT: {
      console.log('REDUCER', action.payload);
      const searchValue = action.payload as string;
      return {
        ...state,
        searchValue,
      };
    }
    case actionTypes.FORM: {
      console.log('REDUCER', action.payload);
      const formValues = action.payload as Partial<Content>;
      return {
        ...state,
        ...formValues,
      };
    }
    case actionTypes.SORT: {
      const sort = action.payload as sortTypes;
      return {
        ...state,
        sort,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
