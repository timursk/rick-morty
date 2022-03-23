import React from 'react';
import './styles.css';

type MainProps = Record<string, never>;
type MainState = { value: string; defaultValue: string };

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
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
          defaultValue={this.state.defaultValue}
          onChange={(ev) => {
            this.set(ev.target.value);
          }}
        />
      </div>
    );
  }
}

export default Main;
