import React, { useContext } from 'react';
import Card from '../Card/Card';
// import AppContext from '../../store/store';
import { Character } from '../../types/apiTypes/character';
import { ApiMaxCards } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { actionTypes } from '../../types/store/actionTypes';
import Loader from '../Loader/Loader';
import { useAppSelector, useAppDispatch } from '../../store/hooks';

const getSlicedCards = (
  ApiMaxCards: number,
  perPage: number,
  currentPage: number,
  cards: Character[]
) => {
  const divider = ApiMaxCards / perPage;
  const startFactor = (currentPage - 1) % divider;
  const startIdx = perPage * startFactor;
  const lastIdx = startIdx + perPage;
  return cards.slice(startIdx, lastIdx);
};

const CardsContainer = () => {
  // const { state, dispatch } = useContext(AppContext);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { cards, isLoading, currentPage, perPage } = state.mainPageReducer;
  const navigate = useNavigate();

  const slicedCards = getSlicedCards(ApiMaxCards, perPage, currentPage, cards);

  const handleClick = (item: Character) => {
    dispatch({ type: actionTypes.PICK_CARD, payload: item });
    navigate('/card');
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : slicedCards.length ? (
        <div className="cards-container">
          {slicedCards.map((item) => {
            return <Card onClick={handleClick} item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <p className="info-error">no info</p>
      )}
    </>
  );
};

export default CardsContainer;
