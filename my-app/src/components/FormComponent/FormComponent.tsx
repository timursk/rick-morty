import React, { FormEvent, MutableRefObject, useContext, useEffect } from 'react';
import { UseFormRegister } from 'react-hook-form';
import AppContext from '../../store/store';
import { FormErrors } from '../../types/form/formErrors';
import { Inputs } from '../../types/form/inputs';
import { actionTypes } from '../../types/store/actionTypes';
import { storeForm } from '../../types/store/storeForm';
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
  refFormValues: MutableRefObject<storeForm>;
};

const FormComponent = ({
  onSubmit,
  errors,
  register,
  isDirty,
  isValid,
  isSubmitDisable,
  refFormValues,
}: Props) => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const saveValue = () => {
      dispatch({ type: actionTypes.FORM, payload: refFormValues.current });
    };

    window.addEventListener('beforeunload', saveValue);

    return () => {
      saveValue();
      window.removeEventListener('beforeunload', saveValue);
    };
  }, [refFormValues, dispatch]);

  const handleChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const name = target.name as keyof storeForm;
    let value: string | boolean | FileList;

    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'file') {
      value = target.files;
    } else {
      value = target.value;
    }

    refFormValues.current[name] = value;
  };

  return (
    <form className="form" onSubmit={onSubmit} onChange={handleChange}>
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
