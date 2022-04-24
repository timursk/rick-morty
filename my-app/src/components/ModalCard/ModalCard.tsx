import React, { MouseEvent } from 'react';
import { Character } from '../../types/apiTypes/character';
import Modal from '../Modal/Modal';
import './ModalCard.css';

type Props = {
  character: Character;
  onClick: () => void;
};

const ModalCard = (props: Props) => {
  const handleClick = (ev: MouseEvent) => {
    ev.stopPropagation();
  };

  const { onClick } = props;
  const { gender, image, location, name, species, status } = props.character;

  return (
    <Modal>
      <div onClick={onClick} className="modal-container">
        <div onClick={(ev) => handleClick(ev)} className="card modal-card" data-testid="modal-card">
          <img className="card-img modal-card__img" src={image} alt="item" />
          <div className="modal-card__info">
            <p>
              Name: <span className="modal-card__content">{name}</span>
            </p>
            <p>
              Gender: <span className="modal-card__content">{gender}</span>
            </p>
            <p>
              Location: <span className="modal-card__content">{location.name}</span>
            </p>
            <p>
              Species: <span className="modal-card__content">{species}</span>
            </p>
            <p>
              Status: <span className="modal-card__content">{status}</span>
            </p>
          </div>
          <button onClick={onClick} className="modal-card__btn"></button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
