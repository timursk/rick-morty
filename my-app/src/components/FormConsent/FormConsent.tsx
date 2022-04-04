import React, { Component } from 'react';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

type Props = FormItemProps;
type State = null;

export default class FormName extends Component<Props, State> {
  render() {
    const { refInput, errors, removeError } = this.props;
    return (
      <FormLabel labelClass="checkbox-item">
        <p>
          Consent to the processing of personal data :
          {!errors.isValid && <span className="error">{errors.message}</span>}
        </p>
        <input
          ref={refInput}
          onChange={errors.isValid ? null : removeError}
          type="checkbox"
          name="consent"
          data-testid="consent"
        />
      </FormLabel>
    );
  }
}
