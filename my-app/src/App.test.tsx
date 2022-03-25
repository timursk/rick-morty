import React from 'react';
import { getByRole, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LocalStorageMock } from '@react-mock/localstorage';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  

  test('renders after loading', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    localStorage.setItem('input', '3232');
    await screen.findByRole('textbox');
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    // expect(screen.getByRole('textbox')).toHaveValue('3232');
  });

  test('mock localstorage', async () => {
    render(
      <LocalStorageMock items={{ input: '' }}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalStorageMock>
    );
    await screen.findByRole('textbox');
    expect(screen.getByRole('textbox')).toHaveValue('');
    userEvent.type(screen.getByRole('textbox'), 'React1234');
    userEvent.click(screen.getByText('About'));
    expect(localStorage.getItem('input')).toBe('React1234');
  });
});
