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
      <FormLabel labelClass="checkbox-item switch">
        <p>
          Receive notifications:
          {errors.notify && <span className="error">{errors.notify.message}</span>}
        </p>
        <input
          {...register('notify', {
            required: ErrorMessage.notify,
            validate: (value) => value === true || ErrorMessage.notify,
          })}
          type="checkbox"
          data-testid="notify"
        />
        <span className="slider" />
      </FormLabel>
    );
  }
}
