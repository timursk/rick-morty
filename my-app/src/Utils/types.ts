import { ChangeEventHandler, RefObject } from 'react';

export type FormItemProps = {
  refInput: RefObject<HTMLInputElement>;
  errors: {
    isValid: boolean;
    message: string;
  };
  removeError: ChangeEventHandler<HTMLInputElement>;
};

export type FormItemSelectProps = {
  refInput: RefObject<HTMLSelectElement>;
  errors: {
    isValid: boolean;
    message: string;
  };
  removeError: ChangeEventHandler<HTMLSelectElement>;
};
