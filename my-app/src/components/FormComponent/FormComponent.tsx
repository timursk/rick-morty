import React, { ChangeEventHandler, Component, FormEvent } from 'react';
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
  refItems: RefItems;
  errors: Error;
  disableSubmit: boolean;
  handleSubmit: (ev: FormEvent) => void;
  ableSubmit: (ev: FormEvent, removedKey?: string) => void;
  removeError: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};
type State = null;

export default class FormComponent extends Component<Props, State> {
  render() {
    const { refItems, errors, disableSubmit, handleSubmit, ableSubmit, removeError } = this.props;
    return (
      <form
        className="form"
        ref={refItems.form}
        onSubmit={handleSubmit}
        onChange={disableSubmit ? ableSubmit : null}
      >
        <FormName
          refInput={refItems.firstName}
          errors={errors.firstName}
          removeError={removeError}
        />
        <FormSurname
          refInput={refItems.lastName}
          errors={errors.lastName}
          removeError={removeError}
        />
        <FormDate
          refInput={refItems.birthDate}
          errors={errors.birthDate}
          removeError={removeError}
        />
        <FormCountry
          refInput={refItems.country}
          errors={errors.country}
          removeError={removeError}
        />
        <FormConsent
          refInput={refItems.consent}
          errors={errors.consent}
          removeError={removeError}
        />
        <FormNotify refInput={refItems.notify} errors={errors.notify} removeError={removeError} />
        <FormPicture
          refInput={refItems.profilePicture}
          errors={errors.profilePicture}
          removeError={removeError}
        />

        <button disabled={disableSubmit} type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  }
}