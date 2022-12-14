import React from 'react';
import './FormCard.css';

type Props = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  profilePicture: File;
};

const FormCard = ({ firstName, lastName, birthDate, country, profilePicture }: Props) => {
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
};

export default FormCard;
