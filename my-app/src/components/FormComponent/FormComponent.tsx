import React, { FormEvent, useContext, useEffect, useRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/actionTypes';
import Content from '../../types/content';
import { FormErrors } from '../../utils/types';
import { Inputs } from '../Form/Form';
import FormConsent from '../FormItems/FormConsent';
import FormCountry from '../FormItems/FormCountry';
import FormDate from '../FormItems/FormDate';
import FormName from '../FormItems/FormName';
import FormNotify from '../FormItems/FormNotify';
import FormPicture from '../FormItems/FormPicture';
import FormSurname from '../FormItems/FormSurname';
import './FormComponent.css';

type Props = {
  onSubmit: (e?: FormEvent<HTMLFormElement>) => Promise<void>;
  errors: FormErrors;
  register: UseFormRegister<Inputs>;
  isDirty: boolean;
  isValid: boolean;
  isSubmitDisable: boolean;
};

const formInitial: Partial<Content> = {
  firstName: '',
  lastName: '',
  birthDate: '',
  country: '',
  consent: false,
  notify: false,
  profilePicture: null,
};

const FormComponent = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const refFormValues = useRef<Partial<Content>>(state);
  const { onSubmit, errors, register, isDirty, isValid, isSubmitDisable } = props;

  useEffect(() => {
    const saveValue = () => {
      dispatch({ type: actionTypes.FORM, payload: refFormValues.current });
    };

    window.addEventListener('beforeunload', saveValue);

    return () => {
      saveValue();
      window.removeEventListener('beforeunload', saveValue);
    };
  }, [dispatch]);

  return (
    <form
      className="form"
      onSubmit={onSubmit}
      onChange={(e: FormEvent) => {
        const target = e.target as HTMLInputElement;
        const name = target.name as keyof Content;
        let value: string | boolean | FileList;

        if (target.type === 'checkbox') {
          value = target.checked;
        } else if (target.type === 'file') {
          value = target.files;
        } else {
          value = target.value;
        }

        refFormValues.current[name] = value;
      }}
    >
      <FormName errors={errors} register={register} />
      <FormSurname errors={errors} register={register} />
      <FormDate errors={errors} register={register} />
      <FormCountry errors={errors} register={register} />
      <FormConsent errors={errors} register={register} />
      <FormNotify errors={errors} register={register} />
      <FormPicture errors={errors} register={register} />

      <button
        disabled={!isDirty || isSubmitDisable ? !isValid : false}
        type="submit"
        className="submit-btn"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
