import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type Props = Record<string, unknown>;
let modalRoot = document.getElementById('modal-root');
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

const Modal = (props: Props) => {
  const el = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(props.children, el);
};

export default Modal;
