import { render, screen } from '@testing-library/react';
import Card from './Card';

const item = {
  albumId: 22,
  id: 1111,
  thumbnailUrl: 'https://via.placeholder.com/150/198fff',
  title: 'sed at dolorum quibusdam',
  url: 'https://via.placeholder.com/150/198fff',
};

describe('Card', () => {
  // test("card's items rendered", async () => {
  //   render(<Card item={item} />);
  //   expect(screen.getByText(/Album id \d{1,3}$/i)).toBeInTheDocument();
  //   expect(screen.getByText(/^id \d{1,4}$/i)).toBeInTheDocument();
  //   expect(screen.getByRole('img')).toBeInTheDocument();
  // });
});
