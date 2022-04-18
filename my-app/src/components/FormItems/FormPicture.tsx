import React from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormPicture = (props: FormItemProps) => {
  const { errors, register } = props;
  return (
    <FormLabel>
      <p>
        Profile picture:
        {errors.profilePicture && <span className="error">{errors.profilePicture.message}</span>}
      </p>
      <input
        {...register('profilePicture', {
          required: ErrorMessage.profilePicture,
        })}
        type="file"
        data-testid="profilePicture"
      />
    </FormLabel>
  );
};

export default FormPicture;
