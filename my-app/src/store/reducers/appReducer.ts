import { Reducer } from 'react';
import Content from '../../types/store/appContent';
import { actionTypes } from '../../types/store/actionTypes';
import appAction from '../../types/store/appAction';
import sortTypes from '../../types/store/sortTypes';
import appContent from '../../types/store/appContent';

type State = appContent;
type Action = appAction;

const appReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    // case actionTypes.LOADING: {
    //   return {
    //     ...state,
    //   };
    // }
    // case actionTypes.INPUT: {
    //   console.log('REDUCER', action.payload);
    //   const searchValue = action.payload as string;
    //   return {
    //     ...state,
    //     searchValue,
    //   };
    // }
    // case actionTypes.FORM: {
    //   console.log('REDUCER', action.payload);
    //   const formValues = action.payload as Partial<appContent>;
    //   return {
    //     ...state,
    //     ...formValues,
    //   };
    // }
    // case actionTypes.SORT: {
    //   const sort = action.payload as sortTypes;
    //   return {
    //     ...state,
    //     sort,
    //   };
    // }
    // case actionTypes.PER_PAGE: {
    //   const { perPage } = action.payload as Partial<appContent>;
    //   return {
    //     ...state,
    //     perPage,
    //   };
    // }
    default:
      return state;
  }
};

export default appReducer;
