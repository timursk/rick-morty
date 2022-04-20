import React, { FC, useReducer } from 'react';
import initialState from '../../store/initialState';
import appReducer from '../../store/reducers/appReducer';
import AppContext from '../../store/store';

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;
