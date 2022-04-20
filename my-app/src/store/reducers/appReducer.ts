import { Reducer } from 'react';
import Content from '../../types/content';
import { actionTypes } from '../../types/actionTypes';
import appAction from '../../types/appAction';

type State = Content;
type Action = appAction;

const appReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
