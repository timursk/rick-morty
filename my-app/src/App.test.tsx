import React from 'react';
import { getByRole, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders after loading', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  await waitFor(() => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByText(/Album id \d{1,2}$/i)).toHaveLength(10);
    expect(screen.getAllByText(/^id \d{1,4}$/i)).toHaveLength(10);
  });
});
