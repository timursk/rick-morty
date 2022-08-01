import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
const fakeData = {
  firstName: 'name',
  lastName: 'surname',
  birthDate: 'date',
  country: 'country',
  profilePicture: fakeFile,
};
global.URL.createObjectURL = jest.fn();

describe('FormCard', () => {
  test('FormCard rendered', () => {
    render(<FormCard {...fakeData} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/surname/i)).toBeInTheDocument();
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(global.URL.createObjectURL).toBeCalled();
  });
});
