import { Reducer } from 'react';
import appAction from '../../types/store/appAction';
import appContent from '../../types/store/appContent';
import { storeMainPage } from '../../types/store/storeMainPage';

type State = storeMainPage;
type Action = appAction;

const mainPageReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainPageReducer;
