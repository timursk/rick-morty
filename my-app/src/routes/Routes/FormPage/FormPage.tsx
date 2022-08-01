import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import FormCard from '../../../components/FormCard/FormCard';
import { formCardType } from '../../../types/form/formCardType';
import './FormPage.css';

const FormPage = () => {
  const [cardsData, setCardsData] = useState<formCardType[]>(null);

  const addCard = (card: formCardType) => {
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
