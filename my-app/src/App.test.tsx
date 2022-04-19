import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    expect(await screen.findByTestId('loader')).toBeInTheDocument();
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

  test('error page routing', async () => {
    render(
      <MemoryRouter initialEntries={['/404']}>
        <App />
      </MemoryRouter>
    );
    expect(await screen.findByTestId('error-page')).toBeInTheDocument();
  });

  test('form page routing', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const formLink = screen.getByTestId('Form');
    userEvent.click(formLink);
    expect(await screen.findByTestId('form-page')).toBeInTheDocument();
  });
});
