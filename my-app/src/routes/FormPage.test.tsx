import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import FormPage from './FormPage';

describe('FormPage', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('add card', async () => {
    global.URL.createObjectURL = jest.fn();
    const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
    await act(async () => {
      ReactDOM.render(<FormPage />, container);
    });

    await act(async () => userEvent.type(screen.getByTestId('firstName'), 'testnammmed'));
    await act(async () => userEvent.type(screen.getByTestId('lastName'), 'testurname'));
    await act(async () => userEvent.type(screen.getByTestId('birthDate'), '1990-10-10'));
    await act(async () => userEvent.type(screen.getByTestId('country'), 'Sweden'));
    await act(async () => userEvent.click(screen.getByTestId('consent')));
    await act(async () => userEvent.click(screen.getByTestId('notify')));
    await act(async () => userEvent.upload(screen.getByTestId('profilePicture'), fakeFile));

    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.getByTestId('firstName')).toHaveValue('testnammmed');
    await act(async () => userEvent.click(screen.getByRole('button')));

    expect(screen.getByText(/testnammmed/i)).toBeInTheDocument();
    expect(screen.getByText(/testurname/i)).toBeInTheDocument();
    expect(screen.getByText(/1990-10-10/i)).toBeInTheDocument();
    expect(screen.getByText(/Sweden/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
