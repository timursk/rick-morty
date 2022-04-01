import React, { ChangeEventHandler, Component } from 'react';

type Props = {
  name: string;
  className: string;
  onChange: ChangeEventHandler;
};
type State = null;

export default class FormSelect extends Component<Props, State> {
  render() {
    return (
      <select
        name={this.props.name}
        defaultValue={'Russia'}
        className={this.props.className}
        onChange={this.props.onChange}
        data-testid={`formItem-${this.props.name}`}
      >
        <option value="Usa">Usa</option>
        <option value="Russia">Russia</option>
        <option value="Sweden">Sweden</option>
        <option value="Germany">Germany</option>
      </select>
    );
  }
}
