import React from 'react';
import { Character } from '../../types/apiTypes/character';
import './Card.css';

type CardProps = {
  item: Character;
  onClick: (item: Character) => void;
};

const Card = ({ item, onClick }: CardProps) => {
  return (
    <div onClick={() => onClick(item)} className="card" data-testid="card-item">
      <img className="card-img" src={item.image} alt="item" />
    </div>
  );
};

export default Card;
