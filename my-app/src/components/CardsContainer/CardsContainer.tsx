import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import loader from '../../assets/loading.svg';
import AppContext from '../../store/store';
import { sortByType } from '../../utils/utils';
import { Character } from '../../types/apiTypes/character';
import { ApiMaxCards } from '../../utils/constants';

type Props = {
  // isLoading: boolean;
  // setLoading: Dispatch<SetStateAction<boolean>>;
  // data: Character[];
  // handleShow: (item: Character) => void;
};

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

const CardsContainer = (props: Props) => {
  const { state } = useContext(AppContext);
  const { cards, isLoading, currentPage, perPage } = state.mainPage;
  // const { isLoading } = props;
  // const { loading, data, handleShow, setLoading } = props;
  // const [sortedData, setSortedData] = useState<Character[]>(cards);

  // useEffect(() => {
  //   setSortedData(data);
  // }, [data]);

  // useEffect(() => {
  //   if (data && data.length) {
  //     setLoading(true);
  //     const sorted = sortByType(state.mainPage.sort, data);
  //     setSortedData(sorted);
  //     setLoading(false);
  //   }
  // }, [state.mainPage.sort, data, setLoading]);

  // let indexOfLastCard = currentPage * cardsPerPage;
  // indexOfLastCard =
  //   indexOfLastCard % ApiMaxCards === 0 ? ApiMaxCards : indexOfLastCard % ApiMaxCards;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);

  const handleClick = (item: Character) => {
    console.log(item);
  };

  const slicedCards = getSlicedCards(ApiMaxCards, perPage, currentPage, cards);

  // const divider = ApiMaxCards / perPage;
  // const startFactor = (currentPage - 1) % divider;
  // const startIdx = perPage * startFactor;
  // const lastIdx = startIdx + perPage;
  // const cardsShort = cards.slice(startIdx, lastIdx);

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
