import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormDate = ({ errors, register }: FormItemProps) => {
  return (
    <FormLabel>
      <p>
        Date of birth:
        {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
      </p>
      <input
        {...register('birthDate', {
          required: ErrorMessage.birthDate,
        })}
        type="date"
        className="form-input"
        data-testid="birthDate"
      />
    </FormLabel>
  );
};

export default FormDate;
