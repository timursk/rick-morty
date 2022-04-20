import React, { RefObject, useContext, useEffect, useRef } from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/actionTypes';
import './Input.css';

type InputProps = {
  refInput: RefObject<HTMLInputElement>;
};

const Input = (props: InputProps) => {
  const { state, dispatch } = useContext(AppContext);
  const refSearchValue = useRef<string>(state.searchValue);

  useEffect(() => {
    const saveValue = () => {
      dispatch({ type: actionTypes.INPUT, payload: refSearchValue.current });
    };

    window.addEventListener('beforeunload', saveValue);

    return () => {
      saveValue();
      window.removeEventListener('beforeunload', saveValue);
    };
  }, [dispatch]);

  return (
    <div className="input-container">
      <input
        type="text"
        name="input"
        className="input"
        autoComplete="off"
        ref={props.refInput}
        defaultValue={state.searchValue}
        onChange={(ev) => {
          refSearchValue.current = ev.target.value;
        }}
      />
    </div>
  );
};

export default Input;
