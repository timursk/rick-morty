import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { isAdult } from '../../utils/utils';
import Form from './Form';

const addCard = jest.fn(() => null);

describe('Form', () => {
  test("form's items rendered", () => {
    render(<Form addCard={addCard} />);
    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    expect(screen.getByTestId('country')).toHaveValue('Russia');
    expect(screen.getByTestId('consent')).not.toBeChecked();
    expect(screen.getByTestId('notify')).not.toBeChecked();
    expect(screen.getByTestId('profilePicture')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('form button able/disable', () => {
    render(<Form addCard={addCard} />);
    const btn = screen.getByRole('button');
    const randomInput = screen.getByTestId('lastName');
    expect(btn).toBeDisabled();
    userEvent.type(randomInput, 'test');
    expect(btn).toBeEnabled();
  });

  test('error messages', () => {
    render(<Form addCard={addCard} />);
    const btn = screen.getByRole('button');
    userEvent.type(screen.getByTestId('firstName'), 'blablabla');
    userEvent.clear(screen.getByTestId('firstName'));
    userEvent.click(btn);
    expect(screen.getByText(/Invalid name value/i)).toBeInTheDocument();
    expect(screen.getByText(/Invalid surname value/i)).toBeInTheDocument();
    expect(screen.getByText(/Enter date/i)).toBeInTheDocument();
    expect(screen.getAllByText(/need consent/i)).toHaveLength(2);
    expect(screen.getByText(/Upload image/i)).toBeInTheDocument();
  });

  test('utils isAdult', () => {
    expect(isAdult('11-11-2000')).toBe(true);
    expect(isAdult('01-01-1990')).toBe(true);
    expect(isAdult('10-11-2010')).toBe(false);
    expect(isAdult('30-11-2030')).toBe(false);
  });

  test('error adult', () => {
    render(<Form addCard={addCard} />);
    const btn = screen.getByRole('button');
    userEvent.type(screen.getByTestId('firstName'), 'blablabla');
    userEvent.type(screen.getByTestId('birthDate'), '2020-11-11');
    userEvent.click(btn);
    expect(screen.getByText(/Wrong age/i));
  });

  test('form clearing', () => {
    const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
    render(<Form addCard={addCard} />);
    userEvent.type(screen.getByTestId('firstName'), 'test');
    userEvent.type(screen.getByTestId('lastName'), 'surname');
    userEvent.type(screen.getByTestId('birthDate'), '1990-10-10');
    userEvent.type(screen.getByTestId('country'), 'Sweden');
    userEvent.click(screen.getByTestId('consent'));
    userEvent.click(screen.getByTestId('notify'));
    userEvent.upload(screen.getByTestId('profilePicture'), fakeFile);
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    expect(screen.getByTestId('country')).not.toHaveValue('Russia');
    expect(screen.getByTestId('consent')).not.toBeChecked();
    expect(screen.getByTestId('notify')).not.toBeChecked();
    expect(screen.getByTestId('profilePicture')).toHaveValue('');
  });
});
