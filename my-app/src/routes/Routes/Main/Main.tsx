import React, { createRef, FormEvent, useEffect, useRef, useState } from 'react';
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
import { ApiMaxCards } from '../../../utils/constants';
import './Main.css';
import { Character } from '../../../types/apiTypes/character';

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Character[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Character>(null);

  const [paginationInfo, setPaginationInfo] = useState<paginationInfo>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [apiPage, setApiPage] = useState(1);
  const [currentLink, setCurrentLink] = useState(
    `https://rickandmortyapi.com/api/character?page=1&name=`
  );
  const input = createRef<HTMLInputElement>();
  const _isMounted = useRef<boolean>(true);

  useEffect(() => {
    _isMounted.current = true;
    // getCharactersByPage(apiPage).then((result) => {
    getCharactersByLink(currentLink).then((result) => {
      if (_isMounted.current) {
        const data = result.results;

        setPaginationInfo(result.info);
        setData(data);
        setLoading(false);
      }
    });

    return () => {
      _isMounted.current = false;
    };
  }, [apiPage, currentLink]);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const name = input.current.value;
    setLoading(true);
    setCurrentLink(currentLink.replace(/name=.{0,}/, `name=${name}`));
    // getCharacterByName(name).then((result) => {
    //   console.log(result);
    //   if (_isMounted.current) {
    //     const data = result.results;
    //     setPaginationInfo(result.info);
    //     setData(data);
    //     setLoading(false);
    //   }
    // });
  };

  const handleShow = (item: Character) => {
    if (item) {
      setShowModal(true);
      setModalContent(item);
    }
  };

  const handleHide = () => {
    setShowModal(false);
  };

  let indexOfLastCard = currentPage * cardsPerPage;
  indexOfLastCard =
    indexOfLastCard % ApiMaxCards === 0 ? ApiMaxCards : indexOfLastCard % ApiMaxCards;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (number: number) => {
    setCurrentPage(number);
  };
  console.log(currentLink);
  return (
    <div data-testid="main-page">
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <Input refInput={input} />
      </form>
      <MainSwitch setCardsPerPage={setCardsPerPage} />

      <CardsContainer
        loading={loading}
        setLoading={setLoading}
        data={currentCards}
        handleShow={handleShow}
      />
      <Pagination
        paginationInfo={paginationInfo}
        cardsPerPage={cardsPerPage}
        paginate={paginate}
        currentPage={currentPage}
        apiPage={apiPage}
        setApiPage={setApiPage}
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      />

      {showModal && <ModalCard character={modalContent} onClick={handleHide} />}
    </div>
  );
};

export default Main;
