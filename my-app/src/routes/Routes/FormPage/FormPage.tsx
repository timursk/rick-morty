import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormCard from '../../../components/FormCard/FormCard';
import './FormPage.css';

export type Card = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  profilePicture: File;
};

const FormPage = () => {
  const [cardsData, setCardsData] = useState<Card[]>(null);

  const addCard = (card: Card) => {
    if (!cardsData) {
      setCardsData([card]);
      return;
    }
    setCardsData(() => [...cardsData, card]);
  };

  return (
    <div data-testid="form-page">
      <Form addCard={addCard} />
      <div className="form-cards-container">
        {cardsData &&
          cardsData.map(({ firstName, lastName, birthDate, country, profilePicture }, idx) => {
            return (
              <FormCard
                key={idx}
                firstName={firstName}
                lastName={lastName}
                birthDate={birthDate}
                country={country}
                profilePicture={profilePicture}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FormPage;
