import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormConsent = (props: FormItemProps) => {
  const { errors, register } = props;
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
