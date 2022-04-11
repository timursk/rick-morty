import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

export const fakeItem = {
  created: 'test',
  episode: ['test1', 'test2'],
  gender: 'test',
  id: 222,
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  location: {
    name: 'test',
    url: 'test',
  },
  name: 'test',
  origin: {
    name: 'test',
    url: 'test',
  },
  species: 'test',
  status: 'test',
  type: 'test',
  url: 'test',
};

describe('Card', () => {
  test("card's items rendered", () => {
    const mockFn = jest.fn(() => {});
    render(<Card item={fakeItem} onClick={mockFn} />);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('card-item'));
    expect(mockFn).toBeCalled();
  });
});
