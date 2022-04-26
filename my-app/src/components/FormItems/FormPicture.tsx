import React from 'react';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormPicture = ({ errors, register }: FormItemProps) => {
  return (
    <FormLabel>
      <p>
        Profile picture:
        {errors.profilePicture && <span className="error">{errors.profilePicture.message}</span>}
      </p>
      <input
        {...register('profilePicture', {
          validate: (data) => {
            if (data && data.length && data[0]) {
              return true;
            }
            return ErrorMessage.profilePicture;
          },
        })}
        type="file"
        data-testid="profilePicture"
      />
    </FormLabel>
  );
};

export default FormPicture;
