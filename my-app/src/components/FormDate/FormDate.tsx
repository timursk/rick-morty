import React, { Component } from 'react';
import { FormItemProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

type Props = FormItemProps;
type State = null;

export default class FormName extends Component<Props, State> {
  render() {
    const { refInput, errors, removeError } = this.props;
    return (
      <FormLabel>
        <p>
          Date of birth:
          {!errors.isValid && <span className="error">{errors.message}</span>}
        </p>
        <input
          ref={refInput}
          onChange={errors.isValid ? null : removeError}
          type="date"
          name="birthDate"
          className="form-input"
          data-testid="birthDate"
        />
      </FormLabel>
    );
  }
}
