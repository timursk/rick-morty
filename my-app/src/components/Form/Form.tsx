import React, { FormEvent, RefObject } from 'react';
import { Card } from '../../routes/FormPage';
import formData from '../../Utils/formData';
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
  disableSubmit: boolean;
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
  form: RefObject<HTMLFormElement>;

  constructor(props: InputProps) {
    super(props);
    this.state = {
      errors: {},
      toAdd: false,
      disableSubmit: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ableSubmit = this.ableSubmit.bind(this);
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
      },
      toAdd: false,
      disableSubmit: true,
    }));
  }

  validate() {
    this.resetState();
    refKeys.forEach((key) => {
      const { value, type, checked, files } = this.form.current[key as keyof Form];
      switch (type) {
        case 'checkbox':
          if (!checked) {
            this.addError(key);
          }
          break;
        case 'text':
        case 'select-one':
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
          break;
      }
    });
  }

  handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    this.validate();
  }

  componentDidUpdate() {
    if (this.state.toAdd) {
      const { firstName, lastName, birthDate, country, profilePicture } = this.form.current;
      this.props.addCard({
        firstName: firstName.value,
        lastName: lastName.value,
        birthDate: birthDate.value,
        country: country.value,
        profilePicture: profilePicture.files[0],
      });
      this.setState({
        toAdd: false,
      });
      refKeys.forEach((key) => {
        this.form.current[key].value = '';
        this.form.current[key].checked = false;
      });
    }
  }

  removeError(target: HTMLInputElement) {
    const { name } = target;
    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [name]: false,
      },
    }));
    this.ableSubmit(null, name);
  }

  ableSubmit(ev: FormEvent, removedKey?: string) {
    let toAble = true;
    Object.keys(this.state.errors).forEach((key) => {
      if (key !== removedKey && this.state.errors[key] === true) {
        toAble = false;
      }
    });
    if (toAble) {
      this.setState({
        disableSubmit: false,
      });
    }
  }

  render() {
    return (
      <form
        className="form"
        ref={this.form}
        onSubmit={this.handleSubmit}
        onChange={this.state.disableSubmit ? this.ableSubmit : null}
      >
        {formData.map(
          ({ id, info, errorMessage, secondErrorMessage, type, name, className, labelClass }) => {
            return (
              <FormItem
                key={id}
                info={info}
                error={this.state.errors[name]}
                secondError={type === 'date' ? this.state.errors.isAdult : null}
                errorMessage={errorMessage}
                secondErrorMessage={secondErrorMessage}
                type={type}
                name={name}
                className={className}
                labelClass={labelClass}
                onChange={(event) => {
                  this.removeError(event.target);
                }}
              />
            );
          }
        )}

        <button disabled={this.state.disableSubmit} type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
