import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormSurname = (props: FormItemProps) => {
  const { errors, register } = props;
  return (
    <FormLabel>
      <p>
        Surname:
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}
      </p>
      <input
        {...register('lastName', {
          minLength: { value: 3, message: ErrorMessage.lastName },
          required: ErrorMessage.lastName,
          pattern: { value: /[A-Za-z]/, message: ErrorMessage.lastName },
        })}
        type="text"
        className="form-input"
        data-testid="lastName"
      />
    </FormLabel>
  );
};

export default FormSurname;
