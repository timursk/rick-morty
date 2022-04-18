import React, { ChangeEventHandler, Component, FormEvent } from 'react';
import {
  UseFormHandleSubmit,
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  FieldError,
  DeepMap,
} from 'react-hook-form';
import { ErrorMessage } from '../../utils/constants';
import { Inputs } from '../Form/Form';
import FormConsent from '../FormItems/FormConsent';
import FormCountry from '../FormItems/FormCountry';
import FormDate from '../FormItems/FormDate';
import FormName from '../FormItems/FormName';
import FormNotify from '../FormItems/FormNotify';
import FormPicture from '../FormItems/FormPicture';
import FormSurname from '../FormItems/FormSurname';
import FormLabel from '../FormLabel/FormLabel';
import './FormComponent.css';

type FormErrors = {
  [x in keyof Inputs]?: FieldError;
};

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
      <FormLabel>
        <p>
          Name:
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </p>
        <input
          {...register('firstName', {
            minLength: { value: 3, message: ErrorMessage.firstName },
            required: ErrorMessage.firstName,
            pattern: { value: /[A-Za-z]/, message: ErrorMessage.firstName },
          })}
          type="text"
          className="form-input"
          data-testid="firstName"
        />
      </FormLabel>
      <FormLabel>
        <p>
          Surname:
          {errors.lastName && <span className="error">{errors.lastName.message}</span>}
        </p>
        <input
          {...register('lastName', {
            minLength: { value: 3, message: ErrorMessage.lastName },
            required: ErrorMessage.lastName,
            pattern: { value: /[A-Za-z]/, message: ErrorMessage.lastName },
          })}
          type="text"
          className="form-input"
          data-testid="lastName"
        />
      </FormLabel>
      <FormLabel>
        <p>
          Date of birth:
          {errors.birthDate && <span className="error">{errors.birthDate.message}</span>}
        </p>
        <input
          {...register('birthDate', {
            required: ErrorMessage.birthDate,
          })}
          type="date"
          className="form-input"
          data-testid="birthDate"
        />
      </FormLabel>
      <FormLabel>
        <p>
          Choose country:
          {errors.country && <span className="error">{errors.country.message}</span>}
        </p>
        <select
          {...register('country', {
            required: ErrorMessage.country,
          })}
          defaultValue={'Russia'}
          className="form-input"
          data-testid="country"
        >
          <option value="Usa">Usa</option>
          <option value="Russia">Russia</option>
          <option value="Sweden">Sweden</option>
          <option value="Germany">Germany</option>
        </select>
      </FormLabel>
      <FormLabel labelClass="checkbox-item">
        <p>
          Consent to the processing of personal data :
          {errors.consent && <span className="error">{errors.consent.message}</span>}
        </p>
        <input
          {...register('consent', {
            required: ErrorMessage.consent,
            validate: (value) => value === true || ErrorMessage.consent,
          })}
          onChange={(value) => {
            console.log('VALUE CONSENT', value.target.checked);
          }}
          type="checkbox"
          data-testid="consent"
        />
      </FormLabel>
      <FormLabel labelClass="checkbox-item switch">
        <p>
          Receive notifications:
          {errors.notify && <span className="error">{errors.notify.message}</span>}
        </p>
        <input
          {...register('notify', {
            required: ErrorMessage.notify,
            validate: (value) => value === true || ErrorMessage.notify,
          })}
          type="checkbox"
          data-testid="notify"
        />
        <span className="slider" />
      </FormLabel>
      <FormLabel>
        <p>
          Profile picture:
          {errors.profilePicture && <span className="error">{errors.profilePicture.message}</span>}
        </p>
        <input
          {...register('profilePicture', {
            required: ErrorMessage.profilePicture,
          })}
          type="file"
          data-testid="profilePicture"
        />
      </FormLabel>

      <button
        disabled={!isDirty || isSubmitDisable ? !isValid : false}
        type="submit"
        className="submit-btn"
      >
        Submit
      </button>
    </form>
    // <form
    //   className="form"
    //   // ref={refItems.form}
    //   onSubmit={handleSubmit}
    //   onChange={disableSubmit ? ableSubmit : null}
    // >
    //   <input defaultValue="test" {...(register('s'), { minLength: 2 })} />
    //   <input defaultValue="test2" {...register('123')} />
    //   {errors.test2 && <span>This field is required</span>}
    //   {/* <FormName refInput={refItems.firstName} errors={errors.firstName} removeError={removeError} />
    //   <FormSurname
    //     refInput={refItems.lastName}
    //     errors={errors.lastName}
    //     removeError={removeError}
    //   />
    //   <FormDate refInput={refItems.birthDate} errors={errors.birthDate} removeError={removeError} />
    //   <FormCountry refInput={refItems.country} errors={errors.country} removeError={removeError} />
    //   <FormConsent refInput={refItems.consent} errors={errors.consent} removeError={removeError} />
    //   <FormNotify refInput={refItems.notify} errors={errors.notify} removeError={removeError} />
    //   <FormPicture
    //     refInput={refItems.profilePicture}
    //     errors={errors.profilePicture}
    //     removeError={removeError}
    //   /> */}

    //   <button disabled={disableSubmit} type="submit" className="submit-btn">
    //     Submit
    //   </button>
    // </form>
  );
};

export default FormComponent;
