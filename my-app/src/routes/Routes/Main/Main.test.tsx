import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

const MainPageComponent = () => (
  <MemoryRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </MemoryRouter>
);

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
    render(<MainPageComponent />);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('API service works fine', async () => {
    await act(async () => {
      ReactDOM.render(<MainPageComponent />, container);
    });

    const input = screen.getByRole('textbox');
    await act(async () => {
      userEvent.type(input, 'rick{enter}');
    });

    const cardItems = await screen.findAllByTestId('card-item');
    cardItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test('API error rendered', async () => {
    render(<MainPageComponent />);
    userEvent.type(screen.getByRole('textbox'), 'ddssdds{enter}');
    expect(await screen.findByText(/no info/i)).toBeInTheDocument();
  });
});
