import { actionTypes } from './actionTypes';
import sortTypes from './sortTypes';
import { storeForm } from './storeForm';

type appAction =
  | { type: actionTypes.FORM; payload: storeForm }
  | { type: actionTypes.INPUT; payload: string }
  | { type: actionTypes.PER_PAGE; payload: number }
  | { type: actionTypes.SORT; payload: sortTypes };

export default appAction;
