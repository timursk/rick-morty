import { UseFormRegister } from 'react-hook-form';
import { FormErrors } from './formErrors';
import { Inputs } from './inputs';

export type FormItemProps = {
  errors: FormErrors;
  register: UseFormRegister<Inputs>;
};
