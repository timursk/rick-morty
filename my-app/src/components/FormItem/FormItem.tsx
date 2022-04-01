import React, { ChangeEventHandler, Component } from 'react';
import FormSelect from '../FormSelect/FormSelect';

type Props = {
  info: string;
  error: boolean;
  secondError?: boolean;
  errorMessage: string;
  secondErrorMessage?: string;
  type: string;
  name: string;
  className?: string;
  labelClass?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
type State = null;

export default class FormItem extends Component<Props, State> {
  render() {
    return (
      <label className={`form-item ${this.props.labelClass || ''}`}>
        <p>
          {this.props.info}
          {this.props.error && <span className="error">{this.props.errorMessage}</span>}
          {this.props.secondError && <span className="error">{this.props.secondErrorMessage}</span>}
        </p>
        {this.props.type === 'select' ? (
          <FormSelect name={this.props.name} className={this.props.className} />
        ) : (
          <>
            <input
              onChange={this.props.error ? this.props.onChange : null}
              type={this.props.type}
              name={this.props.name}
              className={this.props.className}
            />
            {this.props.name === 'notify' ? <span className="slider" /> : null}
          </>
        )}
      </label>
    );
  }
}
