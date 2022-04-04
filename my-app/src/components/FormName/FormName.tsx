import React, { Component, RefObject } from 'react';
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
          Name:
          {!errors.isValid && <span className="error">{errors.message}</span>}
        </p>
        <input
          ref={refInput}
          onChange={errors.isValid ? null : removeError}
          type="input"
          name="firstName"
          className="form-input"
          // data-testid={`formItem-${this.props.name}`}
        />
      </FormLabel>
    );
  }
}
