import React from 'react';

type InputProps = Record<string, never>;
type InputState = { value: string; defaultValue: string };

class Form extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return <div>render test</div>;
  }
}

export default Form;
