import { Reducer } from 'react';
import appAction from '../../types/store/appAction';
import appContent from '../../types/store/appContent';
import { storeForm } from '../../types/store/storeForm';

// type State = Pick<appContent, 'form'>;
type State = storeForm;
type Action = appAction;

const formReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default formReducer;
