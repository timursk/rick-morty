import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormNotify = (props: FormItemProps) => {
  const { errors, register } = props;
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
