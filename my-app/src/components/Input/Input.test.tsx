import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Input from './Input';

const InputComponent = () => (
  <Provider store={store}>
    <Input />
  </Provider>
);

describe('Input', () => {
  test('input rendered', () => {
    render(<InputComponent />);
    expect(screen.getByTestId('formMainInput')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('');
  });

  test('input value saved to store', () => {
    render(<InputComponent />);
    userEvent.type(screen.getByRole('textbox'), 'test 123{enter}');
    expect(store.getState().mainPageReducer.searchValue).toBe('test 123');
  });
});
