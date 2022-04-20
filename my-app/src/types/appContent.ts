import { Dispatch } from 'react';
import appAction from './appAction';
import Content from './content';

type AppContent = {
  state: Content;
  dispatch: Dispatch<appAction>;
};

export default AppContent;
