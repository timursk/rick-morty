import { render, screen } from '@testing-library/react';
import Form from './Form';

const addCard = jest.fn(() => null);

describe('Form', () => {
  test("form's items rendered", () => {
    render(<Form addCard={addCard} />);
    expect(screen.getByTestId('formItem-firstName')).toHaveValue('');
    expect(screen.getByTestId('formItem-lastName')).toHaveValue('');
    expect(screen.getByTestId('formItem-birthDate')).toHaveValue('');
    expect(screen.getByTestId('formItem-country')).toHaveValue('Russia');
    expect(screen.getByTestId('formItem-consent')).not.toBeChecked();
    expect(screen.getByTestId('formItem-notify')).not.toBeChecked();
    expect(screen.getByTestId('formItem-profilePicture')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
