import { render, screen } from '@testing-library/react';
import {} from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { fakeItem } from '../Card/Card.test';
import ModalCard from './ModalCard';

describe('Modal', () => {
  // test('modal shows the children and a close button', () => {
  //   const handleClose = jest.fn();
  //   // render(<ModalCard character={fakeItem} onClick={handleClose} />);
  //   render(<ModalCard />);
  //   expect(screen.getByTestId('modal-card')).toBeInTheDocument();
  //   userEvent.click(screen.getByRole('button'));
  //   expect(handleClose).toHaveBeenCalledTimes(1);
  // });
});
