import { createContext, Dispatch } from 'react';
import appAction from '../types/store/appAction';
import Content from '../types/store/content';
import initialState from './initialState';

const AppContext = createContext<{ state: Content; dispatch: Dispatch<appAction> }>({
  state: initialState,
  dispatch: () => null,
});

export default AppContext;
