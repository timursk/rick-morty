import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  const { unmount } = render(<Input />);
  test("input's value is equal to ls item", () => {
    expect(screen.getByRole('textbox')).toHaveValue('');
    userEvent.type(screen.getByRole('textbox'), 'test str');
    unmount();
  });
});
