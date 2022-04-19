import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';

describe('Main page', () => {
  test('items rendered', () => {
    render(<Main />);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  test('API service works fine', async () => {
    render(<Main />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'rick');
    userEvent.keyboard('enter');
    const cardItems = await screen.findAllByTestId('card-item');
    cardItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test('API error rendered', async () => {
    render(<Main />);
    userEvent.type(screen.getByRole('textbox'), 'ddssdds{enter}');
    expect(await screen.findByText(/no info/i)).toBeInTheDocument();
  });
});
