import React, { FormEvent, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { input } from '../../store/reducers/mainPageSlice';
import './Input.css';

let refInput = '';

const Input = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { searchValue } = state.mainPageReducer;

  useEffect(() => {
    const saveValue = () => {
      dispatch(input(refInput));
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
    dispatch(input(name));
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
