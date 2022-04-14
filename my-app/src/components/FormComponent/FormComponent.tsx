import React, { ChangeEventHandler, Component, FormEvent } from 'react';
import { UseFormHandleSubmit, FieldValues, SubmitHandler, UseFormRegister } from 'react-hook-form';
import { Error, RefItems } from '../Form/Form';
import FormConsent from '../FormItems/FormConsent';
import FormCountry from '../FormItems/FormCountry';
import FormDate from '../FormItems/FormDate';
import FormName from '../FormItems/FormName';
import FormNotify from '../FormItems/FormNotify';
import FormPicture from '../FormItems/FormPicture';
import FormSurname from '../FormItems/FormSurname';
import './FormComponent.css';

type Props = {
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  errors: { [x: string]: unknown };
  disableSubmit: boolean;
  // refItems: RefItems;
  ableSubmit: (ev: FormEvent, removedKey?: string) => void;
  // removeError: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const FormComponent = (props: Props) => {
  const { handleSubmit, errors, register, disableSubmit, ableSubmit } = props;
  return (
    <form
      className="form"
      // ref={refItems.form}
      onSubmit={handleSubmit}
      onChange={disableSubmit ? ableSubmit : null}
    >
      <input defaultValue="test" {...(register('s'), { minLength: 2 })} />
      <input defaultValue="test2" {...register('123')} />
      {errors.test2 && <span>This field is required</span>}
      {/* <FormName refInput={refItems.firstName} errors={errors.firstName} removeError={removeError} />
      <FormSurname
        refInput={refItems.lastName}
        errors={errors.lastName}
        removeError={removeError}
      />
      <FormDate refInput={refItems.birthDate} errors={errors.birthDate} removeError={removeError} />
      <FormCountry refInput={refItems.country} errors={errors.country} removeError={removeError} />
      <FormConsent refInput={refItems.consent} errors={errors.consent} removeError={removeError} />
      <FormNotify refInput={refItems.notify} errors={errors.notify} removeError={removeError} />
      <FormPicture
        refInput={refItems.profilePicture}
        errors={errors.profilePicture}
        removeError={removeError}
      /> */}

      <button disabled={disableSubmit} type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
