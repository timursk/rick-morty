import { actionTypes } from './actionTypes';
import Content from './appContent';
import { storeForm } from './storeForm';
import { storeMainPage } from './storeMainPage';

interface appAction {
  type: actionTypes;
  // payload: Partial<Content> | string;
  // payload: storeForm | storeMainPage | string;
  payload: Partial<storeForm> | Partial<storeMainPage> | string;
}

export default appAction;
