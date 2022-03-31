import React, { FormEvent, RefObject } from 'react';
import { Card } from '../../routes/FormPage';
import { Utils } from '../../Utils/Utils';
import FormItem from '../FormItem/FormItem';
import './Form.css';

type Error = {
  [key: string]: boolean;
  firstName?: boolean;
  lastName?: boolean;
  birthDate?: boolean;
  country?: boolean;
  consent?: boolean;
  notify?: boolean;
  profilePicture?: boolean;
  isAdult?: boolean;
};
type InputProps = {
  addCard: (item: Card) => void;
};
type InputState = {
  errors: Error;
  toAdd: boolean;
};
const refKeys = [
  'firstName',
  'lastName',
  'birthDate',
  'country',
  'consent',
  'notify',
  'profilePicture',
];

class Form extends React.Component<InputProps, InputState> {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthDate: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  consent: RefObject<HTMLInputElement>;
  notify: RefObject<HTMLInputElement>;
  profilePicture: RefObject<HTMLInputElement>;
  form: RefObject<HTMLFormElement>;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      errors: {},
      toAdd: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthDate = React.createRef();
    this.country = React.createRef();
    this.consent = React.createRef();
    this.notify = React.createRef();
    this.profilePicture = React.createRef();
    this.form = React.createRef();
  }

  resetState() {
    this.setState({
      errors: {},
      toAdd: true,
    });
  }

  addError(key: string) {
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [key]: true,
        toAdd: false,
      },
    }));
  }

  validate() {
    this.resetState();
    refKeys.forEach((key) => {
      const { value, type, checked, files } = this.form.current[key as keyof Form];
      console.log(type);
      switch (type) {
        case 'checkbox':
          if (!checked) {
            this.addError(key);
          }
          break;
        case 'text':
          if (value === '') {
            this.addError(key);
          }
          break;
        case 'date':
          if (value === '') {
            this.addError(key);
          } else {
            const isAdult = Utils.isAdult(value);
            if (!isAdult) {
              this.addError('isAdult');
            }
          }
          break;
        case 'file':
          const file = files[0];
          if (!file) {
            this.addError(key);
          }
      }
    });
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    this.validate();
  }

  componentDidUpdate() {
    if (Object.keys(this.state.errors).length === 0 && this.state.toAdd) {
      this.props.addCard({
        firstName: this.firstName.current.value,
        lastName: this.lastName.current.value,
        birthDate: this.birthDate.current.value,
        country: this.country.current.value,
        profilePicture: this.profilePicture.current.files[0],
      });
      this.setState({
        toAdd: false,
      });
    }
  }

  render() {
    return (
      <form className="form" ref={this.form} onSubmit={this.handleSubmit}>
        <FormItem
          info="Name: "
          error={this.state.errors.firstName}
          errorMessage="* - Enter your name!"
          type="text"
          name="firstName"
          className="form-input"
          innerRef={this.firstName}
        />
        <FormItem
          info="Surname: "
          error={this.state.errors.lastName}
          errorMessage="* - Enter your Surname!"
          type="text"
          name="lastName"
          className="form-input"
          innerRef={this.lastName}
        />
        <FormItem
          info="Date of Birth: "
          error={this.state.errors.birthDate}
          errorMessage="* - Enter your Date!"
          //  Wrong age!
          type="date"
          name="birthDate"
          className="form-input"
          innerRef={this.birthDate}
        />
        <label className="form-item">
          Choose country:
          <select name="country" defaultValue={'Russia'} className="form-input" ref={this.country}>
            <option value="Usa">Usa</option>
            <option value="Russia">Russia</option>
            <option value="Sweden">Sweden</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <FormItem
          info="Consent to the processing of personal data "
          error={this.state.errors.consent}
          errorMessage="* - Need your consent!"
          type="checkbox"
          name="consent"
          innerRef={this.consent}
          labelClass="checkbox-item"
        />
        <FormItem
          info="Receive notifications "
          error={this.state.errors.notify}
          errorMessage="* - Need your consent!"
          type="checkbox"
          name="notify"
          innerRef={this.notify}
          labelClass="checkbox-item"
        />
        <FormItem
          info="Profile picture "
          error={this.state.errors.profilePicture}
          errorMessage="* - Upload image!"
          type="file"
          name="profilePicture"
          innerRef={this.profilePicture}
          // accept="image/*"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
