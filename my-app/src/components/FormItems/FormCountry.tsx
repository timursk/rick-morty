import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormCountry = (props: FormItemProps) => {
  const { errors, register } = props;
  return (
    <FormLabel>
      <p>
        Choose country:
        {errors.country && <span className="error">{errors.country.message}</span>}
      </p>
      <select
        {...register('country', {
          required: ErrorMessage.country,
        })}
        defaultValue={'Russia'}
        className="form-input"
        data-testid="country"
      >
        <option value="Usa">Usa</option>
        <option value="Russia">Russia</option>
        <option value="Sweden">Sweden</option>
        <option value="Germany">Germany</option>
      </select>
    </FormLabel>
  );
};

export default FormCountry;
