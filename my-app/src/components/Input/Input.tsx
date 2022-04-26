import React, { createRef, FormEvent, useContext, useEffect, useRef } from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/store/actionTypes';
import './Input.css';

const Input = () => {
  const { state, dispatch } = useContext(AppContext);
  const { searchValue } = state.mainPage;

  const refSearchValue = useRef<string>(searchValue);
  const refInput = createRef<HTMLInputElement>();

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = refInput.current.value;
    dispatch({ type: actionTypes.INPUT, payload: name });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-container">
        <input
          type="text"
          name="input"
          className="input"
          autoComplete="off"
          ref={refInput}
          defaultValue={searchValue}
          onChange={(ev) => {
            refSearchValue.current = ev.target.value;
          }}
        />
      </div>
    </form>
  );
};

export default Input;
