import { Characters } from '../apiTypes/characters';
import { actionTypes } from './actionTypes';
import sortTypes from './sortTypes';
import { storeForm } from './storeForm';

type appAction =
  | { type: actionTypes.FORM; payload: storeForm }
  | { type: actionTypes.INPUT; payload: string }
  | { type: actionTypes.PER_PAGE; payload: number }
  | { type: actionTypes.SORT; payload: sortTypes }
  | { type: actionTypes.FETCH_CARDS; payload: Characters }
  | { type: actionTypes.FETCH_EMPTY }
  | { type: actionTypes.LOADING_START }
  | { type: actionTypes.LOADING_STOP }
  | { type: actionTypes.CHANGE_PAGE; payload: number };

export default appAction;
