import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { saveProfilePicture } from '../../store/reducers/formSlice';
import { FormItemProps } from '../../types/form/formItemProps';
import { ErrorMessage } from '../../utils/constants';
import FormLabel from '../FormLabel/FormLabel';

const FormPicture = ({ errors, register }: FormItemProps) => {
  const state = useAppSelector((state) => state.formReducer);
  const dispatch = useAppDispatch();

  const { ref, onChange, ...rest } = register('profilePicture', {
    validate: (data) => {
      if (data && data.length && data[0]) {
        return true;
      }
      return ErrorMessage.profilePicture;
    },
  });

  return (
    <FormLabel>
      <p>
        Profile picture:
        {errors.profilePicture && <span className="error">{errors.profilePicture.message}</span>}
      </p>
      <input
        {...rest}
        ref={(item: HTMLInputElement | null) => {
          ref(item);
          if (item && state.profilePicture) {
            item.files = state.profilePicture;
          }
        }}
        onChange={(e) => {
          onChange(e);
          if (e.target.files.length) {
            dispatch(saveProfilePicture(e.target.files));
          }
        }}
        type="file"
        data-testid="profilePicture"
      />
    </FormLabel>
  );
};

export default FormPicture;
