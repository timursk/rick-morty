import React, { Component } from 'react';

type Props = {
  labelClass?: string;
};
type State = null;

export default class FormLabel extends Component<Props, State> {
  render() {
    return (
      <label className={`form-item ${this.props.labelClass || ''}`}>{this.props.children}</label>
    );
  }
}
