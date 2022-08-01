import { FieldError } from 'react-hook-form';
import { Inputs } from './inputs';

export type FormErrors = {
  [x in keyof Inputs]?: FieldError;
};
