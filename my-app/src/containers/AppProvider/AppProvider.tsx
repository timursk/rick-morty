import React, { FC, useReducer } from 'react';
import initialState from '../../store/initialAppState';
import appReducer from '../../store/reducers/appReducer';
import formReducer from '../../store/reducers/formReducer';
import mainPageReducer from '../../store/reducers/mainPageReducer';
import AppContext from '../../store/store';
import appAction from '../../types/store/appAction';
import appContent from '../../types/store/appContent';

//https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
const mainReducer = ({ form, mainPage }: appContent, action: appAction) => ({
  form: formReducer(form, action),
  mainPage: mainPageReducer(mainPage, action),
});

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
// const AppProvider: FC = ({ children }) => {
//   const [state, dispatch] = useReducer(appReducer, initialState);
//   return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
// };

export default AppProvider;
