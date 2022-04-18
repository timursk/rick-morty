import React, { Component } from 'react';
import { ErrorMessage } from '../../utils/constants';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

type Props = FormItemProps;
type State = null;

export default class FormName extends Component<Props, State> {
  render() {
    const { errors, register } = this.props;
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
  }
}
