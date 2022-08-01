import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainPageReducer from './reducers/mainPageSlice';
import formReducer from './reducers/formSlice';

const rootReducer = combineReducers({ formReducer, mainPageReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
