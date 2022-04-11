import React from 'react';
import { Character } from '../../utils/types';
import './Card.css';

type CardProps = {
  item: Character;
  onClick: (item: Character) => void;
};

const Card = (props: CardProps) => {
  const { item, onClick } = props;
  return (
    <div onClick={() => onClick(item)} className="card" data-testid="card-item">
      <img className="card-img" src={item.image} alt="item" />
    </div>
  );
};

export default Card;
