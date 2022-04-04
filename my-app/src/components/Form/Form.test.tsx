import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('form button able/disable', () => {
    render(<Form addCard={addCard} />);
    const btn = screen.getByRole('button');
    const randomInput = screen.getByTestId('formItem-lastName');
    expect(btn).toBeDisabled();
    userEvent.type(randomInput, 'test');
    expect(btn).toBeEnabled();
  });

  // test('validate', () => {
  //   render(<Form addCard={addCard} />);
  //   const btn = screen.getByRole('button');
  //   userEvent.type(screen.getByTestId('formItem-firstName'), 'blablabla');
  //   userEvent.click(btn);
  // });
});
