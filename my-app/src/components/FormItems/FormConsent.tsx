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
      <FormLabel labelClass="checkbox-item">
        <p>
          Consent to the processing of personal data :
          {errors.consent && <span className="error">{errors.consent.message}</span>}
        </p>
        <input
          {...register('consent', {
            required: ErrorMessage.consent,
            validate: (value) => value === true || ErrorMessage.consent,
          })}
          type="checkbox"
          data-testid="consent"
        />
      </FormLabel>
    );
  }
}
