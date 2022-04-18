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
          Choose country:
          {errors.country && <span className="error">{errors.country.message}</span>}
        </p>
        <select
          {...register('country', {
            required: ErrorMessage.country,
          })}
          defaultValue={'Russia'}
          className="form-input"
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
