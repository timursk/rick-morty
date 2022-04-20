import { createContext } from 'react';
import AppContent from '../types/appContent';
import initialState from './initialState';

const AppContext = createContext<AppContent>({ state: initialState, dispatch: () => null });

export default AppContext;
