import { actionTypes } from './actionTypes';
import Content from './content';

interface appAction {
  type: actionTypes;
  payload: Partial<Content> | string;
}

export default appAction;
