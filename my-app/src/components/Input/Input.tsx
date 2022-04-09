import React, { RefObject } from 'react';
import './Input.css';

type InputProps = {
  refInput: RefObject<HTMLInputElement>;
};
type InputState = { value: string; defaultValue: string };

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { defaultValue: '', value: '' };
  }

  componentDidMount() {
    const str = localStorage.getItem('input');
    if (str) {
      this.setState({
        defaultValue: str,
        value: str,
      });
    }
    window.addEventListener('beforeunload', this.componentWillUnmount.bind(this));
  }

  componentWillUnmount() {
    localStorage.setItem('input', this.state.value);
    window.removeEventListener('beforeunload', this.componentWillUnmount.bind(this));
  }

  set(item: string) {
    this.setState({
      value: item,
    });
  }

  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          name="input"
          className="input"
          autoComplete="off"
          ref={this.props.refInput}
          defaultValue={this.state.defaultValue}
          onChange={(ev) => {
            this.set(ev.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
