import React, { Component } from 'react';
import { FormItemSelectProps } from '../../utils/types';
import FormLabel from '../FormLabel/FormLabel';

type Props = FormItemSelectProps;
type State = null;

export default class FormName extends Component<Props, State> {
  render() {
    const { refInput, errors, removeError } = this.props;
    return (
      <FormLabel>
        <p>
          Choose country:
          {!errors.isValid && <span className="error">{errors.message}</span>}
        </p>
        <select
          ref={refInput}
          name="country"
          defaultValue={'Russia'}
          className="form-input"
          onChange={errors.isValid ? null : removeError}
          data-testid="country"
        >
          <option value="Usa">Usa</option>
          <option value="Russia">Russia</option>
          <option value="Sweden">Sweden</option>
          <option value="Germany">Germany</option>
        </select>
      </FormLabel>
    );
  }
}
