import React from 'react';
import { Character } from '../../utils/types';
import './Card.css';

type CardProps = {
  item: Character;
  onClick: (item: Character) => void;
};
type CardState = Record<string, never>;

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { item, onClick } = this.props;
    return (
      <div onClick={() => onClick(item)} className="card" data-testid="card-item">
        <img className="card-img" src={item.image} alt="item" />
      </div>
    );
  }
}

export default Card;
