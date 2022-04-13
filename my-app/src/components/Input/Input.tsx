import React, { RefObject, useEffect, useRef, useState } from 'react';
import './Input.css';

type InputProps = {
  refInput: RefObject<HTMLInputElement>;
};

const Input = (props: InputProps) => {
  const [defaultValue, setDefaultValue] = useState('');
  const refSearchValue = useRef<string>(localStorage.getItem('input') || '');

  const addToStorage = () => {
    localStorage.setItem('input', refSearchValue.current);
  };

  useEffect(() => {
    const str = localStorage.getItem('input');
    str && setDefaultValue(str);

    window.addEventListener('beforeunload', addToStorage);

    return () => {
      addToStorage();
      window.removeEventListener('beforeunload', addToStorage);
    };
  }, []);

  return (
    <div className="input-container">
      <input
        type="text"
        name="input"
        className="input"
        autoComplete="off"
        ref={props.refInput}
        defaultValue={defaultValue}
        onChange={(ev) => {
          refSearchValue.current = ev.target.value;
        }}
      />
    </div>
  );
};

export default Input;
