import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { RefObject } from 'react';
import Input from './Input';

describe('Input', () => {
  const input = React.createRef() as RefObject<HTMLInputElement>;
  const setIsLoading = jest.fn();
  // const { unmount } = render(<Input setIsLoading={setIsLoading} />);
  const { unmount } = render(<Input />);
  test("input's value is equal to ls item", () => {
    const value = localStorage.getItem('input') || '';
    expect(screen.getByRole('textbox')).toHaveValue(value);
    userEvent.type(screen.getByRole('textbox'), 'test str');
    unmount();
    expect(localStorage.getItem('input')).toBe('test str');
  });
});
