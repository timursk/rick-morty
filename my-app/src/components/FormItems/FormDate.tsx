import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormDate = (props: FormItemProps) => {
  const { errors, register } = props;
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
