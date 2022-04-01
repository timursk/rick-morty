import React, { Component } from 'react';
import './FormCard.css';

type Props = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  profilePicture: File;
};
type State = Record<string, never>;

export default class FormCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { firstName, lastName, birthDate, country, profilePicture } = this.props;
    const url = URL.createObjectURL(profilePicture);
    return (
      <div className="form-card">
        <img className="form-card__img" src={url} alt="avatar" />
        <p>
          {firstName} {lastName}
        </p>
        <p>
          {birthDate}, {country}
        </p>
      </div>
    );
  }
}
