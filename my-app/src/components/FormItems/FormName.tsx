import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormName = (props: FormItemProps) => {
  const { errors, register } = props;
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
