import { Reducer } from 'react';
import { actionTypes } from '../../types/store/actionTypes';
import appAction from '../../types/store/appAction';
import { storeForm } from '../../types/store/storeForm';

type State = storeForm;
type Action = appAction;

const formReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.FORM: {
      const formValues = action.payload;
      return {
        ...state,
        ...formValues,
      };
    }
    default: {
      return state;
    }
  }
};

export default formReducer;
