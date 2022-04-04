import React, { ChangeEvent, FormEvent, RefObject } from 'react';
import { Card } from '../../routes/FormPage';
import { ErrorInitial } from '../../utils/constants';
import { Utils } from '../../utils/utils';
import FormComponent from '../FormComponent/FormComponent';

type ErrorItem = {
  isValid: boolean;
  message: string;
};
export type Error = {
  firstName: ErrorItem;
  lastName: ErrorItem;
  birthDate: ErrorItem;
  country: ErrorItem;
  consent: ErrorItem;
  notify: ErrorItem;
  profilePicture: ErrorItem;
};
type InputProps = {
  addCard: (item: Card) => void;
};
type InputState = {
  errors: Error;
  toAdd: boolean;
  disableSubmit: boolean;
};
export type RefItems = {
  form: RefObject<HTMLFormElement>;
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  birthDate: RefObject<HTMLInputElement>;
  country: RefObject<HTMLSelectElement>;
  consent: RefObject<HTMLInputElement>;
  notify: RefObject<HTMLInputElement>;
  profilePicture: RefObject<HTMLInputElement>;
};

class Form extends React.Component<InputProps, InputState> {
  refItems: RefItems;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      errors: {
        ...ErrorInitial,
      },
      toAdd: false,
      disableSubmit: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ableSubmit = this.ableSubmit.bind(this);
    this.refItems = {
      form: React.createRef(),
      firstName: React.createRef(),
      lastName: React.createRef(),
      birthDate: React.createRef(),
      country: React.createRef(),
      consent: React.createRef(),
      notify: React.createRef(),
      profilePicture: React.createRef(),
    };
  }

  setError(key: string, message: string) {
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [key]: {
          isValid: false,
          message,
        },
      },
      disableSubmit: true,
      toAdd: false,
    }));
  }

  validate() {
    const { firstName, lastName, birthDate, country, consent, notify, profilePicture } =
      this.refItems;
    const startMessage = ' * - ';
    let message = '';

    if (firstName.current.value.length < 2) {
      message = startMessage + 'Invalid name value!';
      this.setError('firstName', message);
    }

    if (lastName.current.value.length < 2) {
      message = startMessage + 'Invalid surname value!';
      this.setError('lastName', message);
    }

    if (birthDate.current.value === '') {
      message = startMessage + 'Enter date!';
      this.setError('birthDate', message);
    }
    if (birthDate.current.value !== '') {
      const isAdult = Utils.isAdult(birthDate.current.value);
      if (!isAdult) {
        message = startMessage + 'Wrong age(need >=18 && <=100)!';
        this.setError('birthDate', message);
      }
    }

    if (country.current.value === '') {
      message = startMessage + 'Pick country!';
      this.setError('country', message);
    }

    if (!consent.current.checked) {
      message = startMessage + 'need consent!';
      this.setError('consent', message);
    }

    if (!notify.current.checked) {
      message = startMessage + 'need consent!';
      this.setError('notify', message);
    }

    if (!profilePicture.current.files[0]) {
      message = startMessage + 'Upload image!';
      this.setError('profilePicture', message);
    }
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    this.setState({
      toAdd: true,
    });
    this.validate();
  }

  componentDidUpdate() {
    const { disableSubmit, errors, toAdd } = this.state;
    const { addCard } = this.props;

    if (disableSubmit) {
      for (const key in errors) {
        if (!errors[key as keyof Error].isValid) {
          return;
        }
      }
      this.setState({ disableSubmit: false });
      return;
    }

    if (toAdd) {
      const { firstName, lastName, birthDate, country, profilePicture } = this.refItems;
      addCard({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        birthDate: birthDate.current.value,
        country: country.current.value,
        profilePicture: profilePicture.current.files[0],
      });
      this.setState({
        toAdd: false,
      });
      this.clearForm();
    }
  }

  clearForm() {
    for (const key in this.refItems) {
      const elem = this.refItems[key as keyof RefItems].current;
      elem.value = '';
      if (elem.type === 'checkbox') {
        (elem as HTMLInputElement).checked = false;
      }
    }
  }

  removeError(ev: ChangeEvent) {
    const { name } = ev.target as HTMLInputElement;
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [name]: {
          isValid: true,
          message: '',
        },
      },
    }));
  }

  ableSubmit() {
    const { errors } = this.state;

    for (const key in errors) {
      if (!errors[key as keyof Error].isValid) {
        return;
      }
    }

    this.setState({
      disableSubmit: false,
    });
  }

  render() {
    return (
      <FormComponent
        refItems={this.refItems}
        errors={this.state.errors}
        handleSubmit={this.handleSubmit}
        disableSubmit={this.state.disableSubmit}
        ableSubmit={this.ableSubmit}
        removeError={(ev) => {
          this.removeError(ev);
        }}
      />
    );
  }
}

export default Form;
