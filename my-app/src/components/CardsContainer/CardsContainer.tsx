import React from 'react';
import Card from '../Card/Card';
import { Character } from '../../types/apiTypes/character';
import { ApiMaxCards } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { pickCard } from '../../store/reducers/mainPageSlice';
import './CardsContainer.css';

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
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { cards, isLoading, currentPage, perPage } = state.mainPageReducer;
  const navigate = useNavigate();

  const slicedCards = getSlicedCards(ApiMaxCards, perPage, currentPage, cards);

  const handleClick = (item: Character) => {
    dispatch(pickCard(item));
    navigate('/card');
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !slicedCards.length) {
    return <p className="info-error">no info</p>;
  }

  return (
    <div className="cards-container">
      {slicedCards.map((item) => (
        <Card onClick={handleClick} item={!isLoading ? item : null} key={item.id} />
      ))}
    </div>
  );
};

export default CardsContainer;
