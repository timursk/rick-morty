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
    this.setState({
      errors: {},
    });
    if (this.firstName.current.value === '') {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          firstName: this.firstName.current.value,
        },
      }));
    }
    if (this.lastName.current.value === '') {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          lastName: this.lastName.current.value,
        },
      }));
    }
    if (this.birthDate.current.value === '') {
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
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            isAdult: false,
          },
        }));
      }
    }
    if (!this.consent.current.checked) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          consent: this.birthDate.current.checked,
        },
      }));
    }
    if (!this.notify.current.checked) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          notify: this.notify.current.checked,
        },
      }));
    }
    console.log(this.profilePicture.current?.files[0]?.name);
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    this.validate();
    if (Object.keys(this.state.errors).length === 0) {
      console.log('New card!');
    } else {
      console.log('Get some errors: ', this.state.errors);
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-item">
          Name: {this.state.errors?.firstName === '' && <span>Error! Enter your name!</span>}
          <input type="text" name="firstName" className="form-input" ref={this.firstName} />
        </label>
        <label className="form-item">
          Surname: {this.state.errors?.lastName === '' && <span>Error! Enter your Surname!</span>}
          <input type="text" name="lastName" className="form-input" ref={this.lastName} />
        </label>
        <label className="form-item">
          Date of Birth:
          {this.state.errors?.birthDate === '' && <span>Error! Enter your Date!</span>}
          {this.state.errors?.isAdult === false && <span>Error! Wrong age!</span>}
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
          Consent to the processing of personal data
          {this.state.errors?.consent === false && <span>Error! Need true!</span>}
          <input type="checkbox" name="consent" ref={this.consent} />
        </label>
        <label>
          Receive notifications
          {this.state.errors?.notify === false && <span>Error! Need true!</span>}
          <input type="checkbox" name="notify" ref={this.notify} />
          <span></span>
        </label>
        <label className="form-item">
          Profile picture
          <input type="file" name="profilePicture" ref={this.profilePicture} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
