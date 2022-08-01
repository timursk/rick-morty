import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormNotify = ({ errors, register }: FormItemProps) => {
  return (
    <FormLabel labelClass="checkbox-item switch">
      <p>
        Receive notifications:
        {errors.notify && <span className="error">{errors.notify.message}</span>}
      </p>
      <input
        {...register('notify', {
          required: ErrorMessage.notify,
          validate: (value) => value === true || ErrorMessage.notify,
        })}
        type="checkbox"
        data-testid="notify"
      />
      <span className="slider" />
    </FormLabel>
  );
};

export default FormNotify;
