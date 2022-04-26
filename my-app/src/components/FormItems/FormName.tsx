import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormName = ({ errors, register }: FormItemProps) => {
  return (
    <FormLabel>
      <p>
        Name:
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </p>
      <input
        {...register('firstName', {
          minLength: { value: 3, message: ErrorMessage.firstName },
          required: ErrorMessage.firstName,
          pattern: { value: /[A-Za-z]/, message: ErrorMessage.firstName },
        })}
        type="text"
        className="form-input"
        data-testid="firstName"
      />
    </FormLabel>
  );
};

export default FormName;
