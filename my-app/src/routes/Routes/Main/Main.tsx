import React, { createRef, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import Input from '../../../components/Input/Input';
import {
  getCharacterByName,
  getCharactersByLink,
  getCharactersByPage,
} from '../../../services/CardService';
import ModalCard from '../../../components/ModalCard/ModalCard';
import MainSwitch from '../../../components/MainSwitch/MainSwitch';
import CardsContainer from '../../../components/CardsContainer/CardsContainer';
import Pagination from '../../../components/Pagination/Pagination';
import paginationInfo from '../../../types/switch/paginationInfo';
import { ApiMaxCards, URL } from '../../../utils/constants';
import './Main.css';
import { Character } from '../../../types/apiTypes/character';
import AppContext from '../../../store/store';
import { actionTypes } from '../../../types/store/actionTypes';
import { sortByType } from '../../../utils/utils';

const getLink = (page = 0, name = '') => {
  return `${URL}/character?page=${page}&name=${name}`;
};

const getApiPage = (currentPage: number, cardsPerPage: number) => {
  const divider = ApiMaxCards / cardsPerPage;
  return Math.floor((currentPage - 1) / divider) + 1;
};

const Main = () => {
  const { state, dispatch } = useContext(AppContext);
  const {
    searchValue,
    sort,
    isFetching,
    currentPage,
    perPage,
    totalCardsCount,
    totalPagesCount,
    cards,
    pickedCard,
  } = state.mainPage;

  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [data, setData] = useState<Character[]>([]);
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [modalContent, setModalContent] = useState<Character>(null);

  // const [paginationInfo, setPaginationInfo] = useState<paginationInfo>(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [cardsPerPage, setCardsPerPage] = useState(20);
  // const [apiPage, setApiPage] = useState(1);
  // const [currentLink, setCurrentLink] = useState(
  //   `https://rickandmortyapi.com/api/character?page=1&name=`
  // );

  // const refInput = createRef<HTMLInputElement>();
  const _isMounted = useRef<boolean>(true);

  useEffect(() => {
    // setIsLoading(true);
    dispatch({ type: actionTypes.LOADING_START });
    _isMounted.current = true;
    const apiPage = getApiPage(currentPage, perPage);
    const link = getLink(apiPage, searchValue);

    getCharactersByLink(link).then((result) => {
      if (_isMounted.current) {
        if (!result.results || !result.results.length) {
          dispatch({ type: actionTypes.FETCH_EMPTY, payload: result });
          // setIsLoading(false);
          dispatch({ type: actionTypes.LOADING_STOP });
          return;
        }

        dispatch({ type: actionTypes.FETCH_CARDS, payload: result });
        // setIsLoading(false);
        dispatch({ type: actionTypes.LOADING_STOP });
      }
    });

    return () => {
      _isMounted.current = false;
    };
  }, [currentPage, searchValue, perPage, dispatch]);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const name = refInput.current.value;
  //   dispatch({ type: actionTypes.INPUT, payload: name });
  // };

  // const handleShow = (item: Character) => {
  //   if (item) {
  //     setShowModal(true);
  //     setModalContent(item);
  //   }
  // };

  // const handleHide = () => {
  //   setShowModal(false);
  // };

  // let indexOfLastCard = currentPage * cardsPerPage;
  // indexOfLastCard =
  //   indexOfLastCard % ApiMaxCards === 0 ? ApiMaxCards : indexOfLastCard % ApiMaxCards;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);

  // const paginate = (number: number) => {
  //   setCurrentPage(number);
  // };

  return (
    <div data-testid="main-page">
      {/* <form onSubmit={(e) => handleSubmit(e)}> */}
      <Input />
      {/* </form> */}
      <MainSwitch
      // setCardsPerPage={setCardsPerPage}
      />

      <CardsContainer
      // isLoading={isLoading}
      // setLoading={setLoading}
      // data={currentCards}
      // handleShow={handleShow}
      />
      <Pagination
      // paginationInfo={paginationInfo}
      // cardsPerPage={cardsPerPage}
      // paginate={paginate}
      // currentPage={currentPage}
      // apiPage={apiPage}
      // setApiPage={setApiPage}
      // currentLink={currentLink}
      // setCurrentLink={setCurrentLink}
      />

      {/* {showModal && <ModalCard character={modalContent} onClick={handleHide} />} */}
    </div>
  );
};

export default Main;
