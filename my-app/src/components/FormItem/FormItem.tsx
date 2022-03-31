import React, { Component, RefObject } from 'react';

type Props = {
  info: string;
  error: boolean;
  errorMessage: string;
  type: string;
  name: string;
  className?: string;
  innerRef: RefObject<HTMLInputElement>;
  labelClass?: string;
};
type State = null;

export default class FormItem extends Component<Props, State> {
  render() {
    const { innerRef } = this.props;
    return (
      <label className={`form-item ${this.props.labelClass || ''}`}>
        <p>
          {this.props.info}
          {this.props.error && <span className="error">{this.props.errorMessage}</span>}
        </p>
        <input
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          ref={innerRef}
        />
      </label>
    );
  }
}
