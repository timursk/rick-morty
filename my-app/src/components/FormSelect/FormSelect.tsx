import React, { Component } from 'react';

type Props = {
  name: string;
  className: string;
};
type State = null;

export default class FormSelect extends Component<Props, State> {
  render() {
    return (
      <select name={this.props.name} defaultValue={'Russia'} className={this.props.className}>
        <option value="Usa">Usa</option>
        <option value="Russia">Russia</option>
        <option value="Sweden">Sweden</option>
        <option value="Germany">Germany</option>
      </select>
    );
  }
}
