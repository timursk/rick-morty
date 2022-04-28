import { render, screen } from '@testing-library/react';
import {} from '@testing-library/jest-dom';
import ModalCard from './ModalCard';
import { Character } from '../../types/apiTypes/character';

const initialCharacter: Character = {
  created: 'test str',
  episode: ['1', '2', '3'],
  gender: 'gender test',
  id: 15,
  image: 'link test',
  location: {
    name: 'location test',
    url: 'test str',
  },
  name: 'name test',
  origin: {
    name: 'test str',
    url: 'test str',
  },
  species: 'species test',
  status: 'status test',
  type: 'test str',
  url: 'test str',
};

describe('Modal', () => {
  test('modal shows the children and a close button', () => {
    render(<ModalCard item={initialCharacter} />);
    expect(screen.getByTestId('modal-card')).toBeInTheDocument();
    expect(screen.getByText(/name test/i)).toBeInTheDocument();
    expect(screen.getByText(/gender test/i)).toBeInTheDocument();
    expect(screen.getByText(/location test/i)).toBeInTheDocument();
    expect(screen.getByText(/species test/i)).toBeInTheDocument();
    expect(screen.getByText(/status test/i)).toBeInTheDocument();
  });
});
