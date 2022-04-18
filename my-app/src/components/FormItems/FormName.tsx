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
          Name:
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </p>
        <input
          {...register('firstName', {
            minLength: { value: 3, message: ErrorMessage.firstName },
            required: ErrorMessage.firstName,
            pattern: { value: /[A-Za-z]/, message: ErrorMessage.firstName },
          })}
          type="text"
          className="form-input"
          data-testid="firstName"
        />
      </FormLabel>
    );
  }
}
