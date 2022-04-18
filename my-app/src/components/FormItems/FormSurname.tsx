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
          Surname:
          {errors.lastName && <span className="error">{errors.lastName.message}</span>}
        </p>
        <input
          {...register('lastName', {
            minLength: { value: 3, message: ErrorMessage.lastName },
            required: ErrorMessage.lastName,
            pattern: { value: /[A-Za-z]/, message: ErrorMessage.lastName },
          })}
          type="text"
          className="form-input"
          data-testid="lastName"
        />
      </FormLabel>
    );
  }
}
