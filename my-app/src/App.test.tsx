import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('renders after loading', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(screen.getAllByText(/Album id \d{1,3}$/i)).toHaveLength(10);
      expect(screen.getAllByText(/^id \d{1,4}$/i)).toHaveLength(10);
    });
  });

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  test('localstorage works fine', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    localStorage.setItem('input', '3232');
    await screen.findByRole('textbox');
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  test('mock localstorage', async () => {
    render(
      <LocalStorageMock items={{ input: '' }}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </LocalStorageMock>
    );
    await screen.findByRole('textbox');
    expect(screen.getByRole('textbox')).toHaveValue('');
    userEvent.type(screen.getByRole('textbox'), 'React1234');
    userEvent.click(screen.getByText('About'));
    expect(localStorage.getItem('input')).toBe('React1234');
  });
});

describe('Router', () => {
  test('main page routing', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('Main');
    userEvent.click(mainLink);
    expect(await screen.findByTestId('main-page')).toBeInTheDocument();
  });

  test('about page routing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const aboutLink = screen.getByTestId('About');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('error page routing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const errorLink = screen.getByTestId('404');
    userEvent.click(errorLink);
    expect(screen.getByTestId('error-page')).toBeInTheDocument();
  });
});
