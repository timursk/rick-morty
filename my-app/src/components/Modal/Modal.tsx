import React, { Component } from 'react';
import ReactDOM from 'react-dom';

type Props = Record<string, unknown>;
type State = null;
let modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

export default class Modal extends Component<Props, State> {
  el: HTMLDivElement;
  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount(): void {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount(): void {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
