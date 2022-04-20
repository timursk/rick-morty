import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../store/store';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

const FormPicture = (props: FormItemProps) => {
  const { errors, register } = props;

  const { state } = useContext(AppContext);
  const fileRef = useRef<HTMLInputElement>();

  useEffect(() => {
    let container = null;
    if (state.profilePicture) {
      container = new DataTransfer();
      container.items.add(state.profilePicture[0]);
    }

    fileRef.current.files = container?.files || null;
  }, [state.profilePicture]);

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
        ref={fileRef}
        type="file"
        data-testid="profilePicture"
      />
    </FormLabel>
  );
};

export default FormPicture;
