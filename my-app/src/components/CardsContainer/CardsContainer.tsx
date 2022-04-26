import React, { useContext } from 'react';
import Card from '../Card/Card';
import loader from '../../assets/loading.svg';
import AppContext from '../../store/store';
import { Character } from '../../types/apiTypes/character';
import { ApiMaxCards } from '../../utils/constants';

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
  const { state } = useContext(AppContext);
  const { cards, isLoading, currentPage, perPage } = state.mainPage;

  const slicedCards = getSlicedCards(ApiMaxCards, perPage, currentPage, cards);

  const handleClick = (item: Character) => {
    console.log(item);
  };

  return (
    <>
      {isLoading ? (
        <img className="loader" src={loader} alt="loader" data-testid="loader" />
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
