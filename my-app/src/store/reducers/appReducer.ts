import { Reducer } from 'react';
import Content from '../../types/content';
import { actionTypes } from '../../types/actionTypes';
import appAction from '../../types/appAction';
import { Inputs } from '../../components/Form/Form';

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
      // const profilePicture = formValues.profilePicture ? formValues.profilePicture[0] : null;
      return {
        ...state,
        ...formValues,
        // profilePicture,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
