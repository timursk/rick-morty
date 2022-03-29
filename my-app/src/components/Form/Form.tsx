import React, { FormEvent, RefObject } from 'react';
import './Form.css';

type InputProps = Record<string, never>;
type InputState = Record<string, never>;

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.birthDate = React.createRef();
    this.country = React.createRef();
    this.consent = React.createRef();
    this.notify = React.createRef();
    this.profilePicture = React.createRef();
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.birthDate.current.value);
    console.log(this.country.current.value);
    console.log(this.consent.current.checked);
    console.log(this.notify.current.checked);
    console.log(this.profilePicture.current.value);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-item">
          Name:
          <input type="text" name="firstName" className="form-input" ref={this.firstName} />
        </label>
        <label className="form-item">
          Surname:
          <input type="text" name="lastName" className="form-input" ref={this.lastName} />
        </label>
        <label className="form-item">
          Date of Birth
          <input type="date" name="birthDate" className="form-input" ref={this.birthDate} />
        </label>
        <label className="form-item">
          <select name="country" defaultValue={'Russia'} className="form-input" ref={this.country}>
            <option value="Usa">Usa</option>
            <option value="Russia">Russia</option>
            <option value="Sweden">Sweden</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <label>
          Consent to the processing of personal data
          <input type="checkbox" name="consent" ref={this.consent} />
        </label>
        <label>
          Receive notifications
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
