import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import initialAppState from '../../../store/initialAppState';
import mainPageReducer from '../../../store/reducers/mainPageReducer';
import Main from './Main';
import { createContext, Dispatch, useReducer } from 'react';
import formReducer from '../../../store/reducers/formReducer';
import appAction from '../../../types/store/appAction';
import appContent from '../../../types/store/appContent';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const initialState = initialAppState;
const AppContext = createContext<{ state: appContent; dispatch: Dispatch<appAction> }>({
  state: initialState,
  dispatch: () => null,
});
const mainReducer = ({ form, mainPage }: appContent, action: appAction) => ({
  form: formReducer(form, action),
  mainPage: mainPageReducer(mainPage, action),
});

const MainForTest = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Router location={''} navigator={undefined}>
        <Main />
      </Router>
    </AppContext.Provider>
  );
};

describe('Main page', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('items rendered', () => {
    render(<MainForTest />);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('API service works fine', async () => {
    await act(async () => {
      ReactDOM.render(<MainForTest />, container);
    });
    const input = screen.getByRole('textbox');
    await act(async () => {
      userEvent.type(input, 'rick');
      userEvent.keyboard('enter');
    });
    const cardItems = await screen.findAllByTestId('card-item');
    cardItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test('API error rendered', async () => {
    render(
      <Router location={'/'} navigator={undefined}>
        <Main />
      </Router>
    );
    userEvent.type(screen.getByRole('textbox'), 'ddssdds{enter}');
    expect(await screen.findByText(/no info/i)).toBeInTheDocument();
  });
});
