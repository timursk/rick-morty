import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormPage from './FormPage';

describe('FormPage', () => {
  test('add card', () => {
    global.URL.createObjectURL = jest.fn();
    const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
    render(<FormPage />);
    userEvent.type(screen.getByTestId('firstName'), 'testnammmed');
    userEvent.type(screen.getByTestId('lastName'), 'testurname');
    userEvent.type(screen.getByTestId('birthDate'), '1990-10-10');
    userEvent.type(screen.getByTestId('country'), 'Sweden');
    userEvent.click(screen.getByTestId('consent'));
    userEvent.click(screen.getByTestId('notify'));
    userEvent.upload(screen.getByTestId('profilePicture'), fakeFile);
    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(/testnammmed/i)).toBeInTheDocument();
    expect(screen.getByText(/testurname/i)).toBeInTheDocument();
    expect(screen.getByText(/1990-10-10/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweden/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
