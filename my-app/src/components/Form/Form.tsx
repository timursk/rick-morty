import React, { FormEvent, RefObject } from 'react';

type InputProps = Record<string, never>;
type InputState = {
  firstName: RefObject<unknown>;
  lastName: RefObject<unknown>;
  birthDate: RefObject<unknown>;
  country: RefObject<unknown>;
  consent: RefObject<unknown>;
  notify: RefObject<unknown>;
  profilePicture: RefObject<unknown>;
};

class Form extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: React.createRef(),
      lastName: React.createRef(),
      birthDate: React.createRef(),
      country: React.createRef(),
      consent: React.createRef(),
      notify: React.createRef(),
      profilePicture: React.createRef(),
    };
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">
          Name:
          <input type="text" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Surname:
          <input type="text" name="lastName" />
        </label>
        <label htmlFor="birthDate">
          Date of Birth
          <input type="date" name="birthDate" id="" />
        </label>
        <label htmlFor="country">
          <select name="country" id="">
            <option value="1">USA</option>
            <option value="2" selected>
              Russia
            </option>
            <option value="3">Sweden</option>
            <option value="4">Germany</option>
          </select>
        </label>
        <label htmlFor="consent">
          Consent to the processing of personal data
          <input type="checkbox" name="consent" id="" />
        </label>
        <label htmlFor="notify">
          Receive notifications
          <input type="checkbox" name="notify" id="" />
          <span></span>
        </label>
        <label htmlFor="profilePicture">
          Profile picture
          <input type="file" name="profilePicture" id="" />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
