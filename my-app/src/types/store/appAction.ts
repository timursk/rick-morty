import { actionTypes } from './actionTypes';
import Content from './appContent';
import sortTypes from './sortTypes';
import { storeForm } from './storeForm';
import { storeMainPage } from './storeMainPage';

type appAction =
  | { type: actionTypes.FORM; payload: storeForm }
  | { type: actionTypes.INPUT; payload: string }
  | { type: actionTypes.PER_PAGE; payload: number }
  | { type: actionTypes.SORT; payload: sortTypes };
// interface appAction {
//   type: actionTypes;
//   // payload: Partial<Content> | string;
//   // payload: storeForm | storeMainPage | string;
//   payload: Partial<storeForm> | Partial<storeMainPage> | string;
// }

export default appAction;
