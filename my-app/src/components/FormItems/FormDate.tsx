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
          Date of birth:
          {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
        </p>
        <input
          {...register('birthDate', {
            required: ErrorMessage.birthDate,
          })}
          type="date"
          className="form-input"
          data-testid="birthDate"
        />
      </FormLabel>
    );
  }
}
