import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormConsent = ({ errors, register }: FormItemProps) => {
  return (
    <FormLabel labelClass="checkbox-item">
      <p>
        Consent to the processing of personal data :
        {errors.consent && <span className="error">{errors.consent.message}</span>}
      </p>
      <input
        {...register('consent', {
          required: ErrorMessage.consent,
        })}
        type="checkbox"
        data-testid="consent"
      />
    </FormLabel>
  );
};

export default FormConsent;
