import React, { Component } from 'react';
import Form from '../components/Form/Form';

export type Card = {
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  profilePicture: string;
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
      cardsData: [
        {
          firstName: 'string',
          lastName: 'string',
          birthDate: 'string',
          country: 'string',
          profilePicture: 'string',
        },
      ],
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
              <div key={idx}>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{birthDate}</p>
                <p>{country}</p>
                <p>{profilePicture}</p>
              </div>
            );
          }
        )}
      </>
    );
  }
}
