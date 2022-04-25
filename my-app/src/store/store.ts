import { createContext, Dispatch } from 'react';
import appAction from '../types/store/appAction';
import appContent from '../types/store/appContent';
import initialState from './initialAppState';

const AppContext = createContext<{ state: appContent; dispatch: Dispatch<appAction> }>({
  state: initialState,
  dispatch: () => null,
});

export default AppContext;
