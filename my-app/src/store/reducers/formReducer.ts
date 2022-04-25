import { Reducer } from 'react';
import { actionTypes } from '../../types/store/actionTypes';
import appAction from '../../types/store/appAction';
import appContent from '../../types/store/appContent';
import { storeForm } from '../../types/store/storeForm';

// type State = Pick<appContent, 'form'>;
type State = storeForm;
type Action = appAction;

const formReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case actionTypes.FORM: {
      // const formValues = action.payload as Partial<appContent>;
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
