import { Inputs } from '../components/Form/Form';
import { actionTypes } from './actionTypes';
import Content from './content';

interface appAction {
  type: actionTypes;
  payload: Partial<Content> | string;
  // payload: string | Inputs;
}

export default appAction;
