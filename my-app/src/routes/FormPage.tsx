import React, { Component } from 'react';
import Form from '../components/Form/Form';
import FormCard from '../components/FormCard/FormCard';

export type Card = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  profilePicture: File;
};

type FormPageProps = Record<string, never>;
type FormPageState = {
  cardsData: Card[];
};

export default class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      cardsData: [],
    };
  }

  addCard(card: Card) {
    this.setState(({ cardsData }) => ({
      cardsData: [...cardsData, card],
    }));
  }

  render() {
    return (
      <>
        <Form addCard={this.addCard} />
        {this.state.cardsData.map(
          ({ firstName, lastName, birthDate, country, profilePicture }, idx) => {
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
            // const url = URL.createObjectURL(profilePicture);
            // return (
            //   <div key={idx}>
            //     <p>{firstName}</p>
            //     <p>{lastName}</p>
            //     <p>{birthDate}</p>
            //     <p>{country}</p>
            //     <img src={url} alt="avatar" />
            //   </div>
            // );
          }
        )}
      </>
    );
  }
}
