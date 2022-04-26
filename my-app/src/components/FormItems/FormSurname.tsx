import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormSurname = ({ errors, register }: FormItemProps) => {
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
