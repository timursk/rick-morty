import React, { MouseEvent, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/store/actionTypes';
import Modal from '../Modal/Modal';
import './ModalCard.css';

const ModalCard = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unpick = () => {
      dispatch({ type: actionTypes.UNPICK_CARD });
    };

    return () => {
      unpick();
    };
  }, [dispatch]);

  if (!state.mainPage.pickedCard) {
    return (
      <>
        <p>NO INFO!</p>
        <p>REDIRECTING...</p>
      </>
    );
  }

  const { gender, image, location, name, species, status } = state.mainPage.pickedCard;

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    navigate('/');
  };

  return (
    <>
      <a onClick={handleClick} href="">
        Back
      </a>
      <div className="card modal-card" data-testid="modal-card">
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
        <button className="modal-card__btn"></button>
      </div>
    </>
  );
};

export default ModalCard;
