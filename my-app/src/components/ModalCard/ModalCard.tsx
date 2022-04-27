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
        <h2 className="card-info__item name__info">{name}</h2>
        <p className="card-info__item card-info__status">
          <span className={`status__info ${status.search(/alive/i) ? 'status-dead__info' : ''}`}>
            {status} - {species}, {gender}
          </span>
        </p>
        <p className="card-info__item location__info">Last known location:</p>
        <p className="card-info__item location__name">{location.name}</p>
      </div>
    </div>
  );
};

export default ModalCard;
