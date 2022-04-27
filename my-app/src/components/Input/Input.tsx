import React, { FormEvent, useContext, useEffect } from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/store/actionTypes';
import './Input.css';

let refInput = '';

const Input = () => {
  const { state, dispatch } = useContext(AppContext);
  const { searchValue } = state.mainPage;

  useEffect(() => {
    const saveValue = () => {
      dispatch({ type: actionTypes.INPUT, payload: refInput });
    };

    window.addEventListener('beforeunload', saveValue);

    return () => {
      saveValue();
      window.removeEventListener('beforeunload', saveValue);
    };
  }, [dispatch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = refInput;
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
          defaultValue={searchValue}
          onChange={(ev) => {
            refInput = ev.target.value;
          }}
        />
      </div>
    </form>
  );
};

export default Input;
