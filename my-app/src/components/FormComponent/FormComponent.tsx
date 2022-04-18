import React, { FormEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
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

const FormComponent = (props: Props) => {
  const { onSubmit, errors, register, isDirty, isValid, isSubmitDisable } = props;
  return (
    <form className="form" onSubmit={onSubmit}>
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
