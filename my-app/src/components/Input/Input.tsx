import React, { RefObject, useCallback, useEffect, useState } from 'react';
import './Input.css';

type InputProps = {
  refInput: RefObject<HTMLInputElement>;
};

const Input = (props: InputProps) => {
  const [value, setValue] = useState('');
  const [defaultValue, setDefaultValue] = useState('');
  const [firstRender, setFirstRender] = useState(true);

  const addToStorage = useCallback(() => {
    localStorage.setItem('input', value);
  }, [value]);

  useEffect(() => {
    if (firstRender) {
      const str = localStorage.getItem('input');

      if (str) {
        setValue(str);
        setDefaultValue(str);
      }
      setFirstRender(false);
    }
    window.addEventListener('beforeunload', addToStorage);

    return () => {
      addToStorage();
      window.removeEventListener('beforeunload', addToStorage);
    };
  }, [value, addToStorage, firstRender]);

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
          setValue(ev.target.value);
        }}
      />
    </div>
  );
};

export default Input;
