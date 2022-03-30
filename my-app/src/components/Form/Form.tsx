import React, { FormEvent, RefObject } from 'react';
import './Form.css';

type Error = {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  country?: string;
  consent?: boolean;
  notify?: boolean;
  profilePicture?: RefObject<HTMLInputElement>;
  isAdult?: boolean;
};
type InputProps = Record<string, never>;
type InputState = {
  errors: Error;
};

class Form extends React.Component<InputProps, InputState> {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthDate: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  consent: RefObject<HTMLInputElement>;
  notify: RefObject<HTMLInputElement>;
  profilePicture: RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthDate = React.createRef();
    this.country = React.createRef();
    this.consent = React.createRef();
    this.notify = React.createRef();
    this.profilePicture = React.createRef();
  }

  validate() {
    let isErr = false;
    this.setState({
      errors: {},
    });
    if (this.firstName.current.value === '') {
      isErr = true;
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          firstName: this.firstName.current.value,
        },
      }));
    }
    if (this.lastName.current.value === '') {
      isErr = true;
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          lastName: this.lastName.current.value,
        },
      }));
    }
    if (this.birthDate.current.value === '') {
      isErr = true;
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          birthDate: this.birthDate.current.value,
        },
      }));
    }
    if (this.birthDate.current.value !== '') {
      const now = new Date().valueOf();
      const picked = new Date(this.birthDate.current.value).valueOf();
      const years = Math.floor((now - picked) / 1000 / 60 / 60 / 24 / 365);
      const isAdult = years >= 18 && years <= 100;
      if (!isAdult) {
        isErr = true;
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            isAdult: false,
          },
        }));
      }
    }
    if (!this.consent.current.checked) {
      isErr = true;
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          consent: this.birthDate.current.checked,
        },
      }));
    }
    if (!this.notify.current.checked) {
      isErr = true;
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          notify: this.notify.current.checked,
        },
      }));
    }
    const url = URL.createObjectURL(this.profilePicture.current.files[0]);
    console.log(url);
    return isErr;
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const isErr = this.validate();
    if (Object.keys(this.state.errors).length === 0 && !isErr) {
      console.log('New card!');
    } else {
      console.log('Get some errors: ', this.state.errors);
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-item">
          <p>
            Name:
            {this.state.errors?.firstName === '' && (
              <span className="error">Error! Enter your name!</span>
            )}
          </p>
          <input type="text" name="firstName" className="form-input" ref={this.firstName} />
        </label>
        <label className="form-item">
          <p>
            Surname:{' '}
            {this.state.errors?.lastName === '' && (
              <span className="error">Error! Enter your Surname!</span>
            )}
          </p>
          <input type="text" name="lastName" className="form-input" ref={this.lastName} />
        </label>
        <label className="form-item">
          <p>
            Date of Birth:
            {this.state.errors?.birthDate === '' && (
              <span className="error">Error! Enter your Date!</span>
            )}
            {this.state.errors?.isAdult === false && (
              <span className="error">Error! Wrong age!</span>
            )}
          </p>

          <input type="date" name="birthDate" className="form-input" ref={this.birthDate} />
        </label>
        <label className="form-item">
          Choose country:
          <select name="country" defaultValue={'Russia'} className="form-input" ref={this.country}>
            <option value="Usa">Usa</option>
            <option value="Russia">Russia</option>
            <option value="Sweden">Sweden</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <label>
          <p style={{ display: 'inline' }}>
            Consent to the processing of personal data
            {this.state.errors?.consent === false && (
              <span className="error">Error! Need true!</span>
            )}
          </p>
          <input type="checkbox" name="consent" ref={this.consent} />
        </label>
        <label>
          <p style={{ display: 'inline' }}>
            Receive notifications
            {this.state.errors?.notify === false && (
              <span className="error">Error! Need true!</span>
            )}
          </p>
          <input type="checkbox" name="notify" ref={this.notify} />
          <span></span>
        </label>
        <label className="form-item">
          Profile picture
          <input type="file" name="profilePicture" accept="image/*" ref={this.profilePicture} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
