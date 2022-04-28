import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import initialAppState from '../../store/initialAppState';
import formReducer from '../../store/reducers/formReducer';
import mainPageReducer from '../../store/reducers/mainPageReducer';
import AppContext from '../../store/store';
import appAction from '../../types/store/appAction';
import appContent from '../../types/store/appContent';
import { isAdult } from '../../utils/utils';
import Form from './Form';

// const mockDispatch = jest.fn(); // important to name it with "mock" as a prefix; https://jestjs.io/docs/es6-class-mocks#calling-jestmock-with-the-module-factory-parameter
// jest.mock('path/MeasurementContext.js', () => {
//   const mockedContext = new React.createContext();
//   const mockedState = {};
//   return {
//     MeasurementContextProvider: ({ children }) => (
//       <Measurement.Provider value={{ state: mockedState, dispatch: mockedDispatch }}>
//         {children}
//      </Measurement.Provider>
//   );
//  };
// });

const addCard = jest.fn(() => null);
const initialState = initialAppState;
const reducer = ({ form, mainPage }: appContent, action: appAction) => ({
  form: formReducer(form, action),
  mainPage: mainPageReducer(mainPage, action),
});

const FormWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Form addCard={addCard} />
    </AppContext.Provider>
  );
};

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
      ReactDOM.render(<Form addCard={addCard} />, container);
    });
    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    // expect(screen.getByTestId('country')).toHaveValue(undefined);
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

  test('error messages', async () => {
    await act(async () => {
      ReactDOM.render(<Form addCard={addCard} />, container);
    });
    await act(async () => userEvent.type(screen.getByTestId('firstName'), 's'));
    await act(async () => userEvent.click(screen.getByRole('button')));

    expect(screen.getByText(/Invalid name value/i)).toBeInTheDocument();
    // expect(screen.getByText(/Invalid surname value/i)).toBeInTheDocument();
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
    const fakeFile = new File(['photo'], 'photo.png', { type: 'image/png' });
    await act(async () => {
      ReactDOM.render(<FormWithReducer />, container);
    });
    await act(async () => {
      userEvent.type(screen.getByTestId('firstName'), 'test');
      userEvent.type(screen.getByTestId('lastName'), 'surname');
      userEvent.type(screen.getByTestId('birthDate'), '1990-10-10');
      userEvent.type(screen.getByTestId('country'), 'Sweden');
      userEvent.click(screen.getByTestId('consent'));
      userEvent.click(screen.getByTestId('notify'));
      userEvent.upload(screen.getByTestId('profilePicture'), fakeFile);
      fireEvent.submit(screen.getByRole('button'));
    });
    screen.debug();
    expect(screen.getByTestId('firstName')).toHaveValue('');
    expect(screen.getByTestId('lastName')).toHaveValue('');
    expect(screen.getByTestId('birthDate')).toHaveValue('');
    expect(screen.getByTestId('country')).toHaveValue('Russia');
    expect(screen.getByTestId('consent')).not.toBeChecked();
    expect(screen.getByTestId('notify')).not.toBeChecked();
    expect(screen.getByTestId('profilePicture')).toHaveValue('');
  });
});
