import React from 'react';
import { Character } from '../../types/apiTypes/character';
import './ModalCard.css';

type Props = {
  item: Character;
};

const ModalCard = ({ item: { image, location, name, species, status, gender } }: Props) => {
  return (
    <div className="card modal-card" data-testid="modal-card">
      <img className="card-img modal-card__img" src={image} alt="item" />
      <div className="modal-card__info">
        <p>{name}</p>
        <p>
          <span className="status__info">
            {status} - {species}, {gender}
          </span>
        </p>
        <p className="location__info">Last known location:</p>
        <p className="location__name">{location.name}</p>
      </div>
    </div>
  );
};

export default ModalCard;
