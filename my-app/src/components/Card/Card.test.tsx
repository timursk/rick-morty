import { render, screen } from '@testing-library/react';
import Card from './Card';

const item = {
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
    render(<Card item={item} onClick={() => {}} />);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
