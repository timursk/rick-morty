import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { isAdult } from '../../utils/utils';
import Form from './Form';

const addCard = jest.fn(() => null);

const FormComponent = () => (
  <Provider store={store}>
    <Form addCard={addCard} />
  </Provider>
);

describe('Form', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test("form's items rendered", async () => {
    await act(async () => {
      ReactDOM.render(<FormComponent />, container);
    });
    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    expect(screen.getByTestId('consent')).not.toBeChecked();
    expect(screen.getByTestId('notify')).not.toBeChecked();
    expect(screen.getByTestId('profilePicture')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('form button able/disable', async () => {
    await act(async () => {
      ReactDOM.render(<FormComponent />, container);
    });
    const btn = screen.getByRole('button');
    const randomInput = screen.getByTestId('lastName');
    expect(btn).toBeDisabled();
    await act(async () => {
      userEvent.type(randomInput, 'test');
    });
    expect(btn).toBeEnabled();
  });

  test('error messages', async () => {
    await act(async () => {
      ReactDOM.render(<FormComponent />, container);
    });
    await act(async () => userEvent.type(screen.getByTestId('firstName'), 's'));
    await act(async () => userEvent.click(screen.getByRole('button')));

    expect(screen.getByText(/Invalid name value/i)).toBeInTheDocument();
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

  test('form clearing', async () => {
    // const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
    await act(async () => {
      ReactDOM.render(<FormComponent />, container);
    });
    // await act(async () => {
    //   userEvent.type(screen.getByTestId('firstName'), 'test');
    //   userEvent.type(screen.getByTestId('lastName'), 'surname');
    //   userEvent.type(screen.getByTestId('birthDate'), '1990-10-10');
    //   userEvent.selectOptions(screen.getByTestId('country'), 'Sweden');
    //   userEvent.click(screen.getByTestId('consent'));
    //   userEvent.click(screen.getByTestId('notify'));
    //   userEvent.upload(screen.getByTestId('profilePicture'), fakeFile);
    //   fireEvent.submit(screen.getByRole('button'));
    // });
    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    expect(screen.getByTestId('consent')).not.toBeChecked();
    expect(screen.getByTestId('notify')).not.toBeChecked();
    expect(screen.getByTestId('profilePicture')).toHaveValue('');
  });
});
