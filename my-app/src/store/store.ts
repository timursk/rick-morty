import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createContext, Dispatch } from 'react';
import appAction from '../types/store/appAction';
import appContent from '../types/store/appContent';
import initialState from './initialAppState';
// import formReducer from './reducers/formReducer';
import mainPageReducer from './reducers/mainPageSlice';
import formReducer from './reducers/formSlice';
// const AppContext = createContext<{ state: appContent; dispatch: Dispatch<appAction> }>({
//   state: initialState,
//   dispatch: () => null,
// });

const rootReducer = combineReducers({ formReducer, mainPageReducer });

export const store = configureStore({
  // reducer: {
  //   form: null,
  //   mainPage: mainPageReducer,
  // },
  reducer: rootReducer,
});

// export default AppContext;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
