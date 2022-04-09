import React from 'react';
import { Character } from '../../utils/types';
import './Card.css';

type CardProps = {
  item: Character;
};
type CardState = Record<string, never>;

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <img className="card-img" src={item.image} alt="item" />
      </div>
    );
  }
}

export default Card;
