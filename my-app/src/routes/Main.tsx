import React, { createRef, FormEvent, useEffect, useRef, useState } from 'react';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { getAllCharacters, getCharacterByName } from '../services/CardService';
import { Character } from '../utils/types';
import loader from '../assets/loading.svg';
import ModalCard from '../components/ModalCard/ModalCard';
import './Main.css';

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Character[]>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<Character>(null);
  const input = createRef<HTMLInputElement>();
  const _isMounted = useRef<boolean>(true);

  useEffect(() => {
    getAllCharacters().then((result) => {
      if (_isMounted.current) {
        const data = result.results;
        setLoading(false);
        setData(data);
      }
    });

    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const name = input.current.value;
    setLoading(true);

    getCharacterByName(name).then((result) => {
      if (_isMounted.current) {
        const data = result.results;
        setLoading(false);
        setData(data);
      }
    });
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

  return (
    <div data-testid="main-page">
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <Input refInput={input} />
      </form>
      {loading ? (
        <img className="loader" src={loader} alt="loader" data-testid="loader" />
      ) : data ? (
        <div className="cards-container">
          {data.map((item) => {
            return <Card onClick={handleShow} item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <p className="info-error">no info</p>
      )}
      {showModal && <ModalCard character={modalContent} onClick={handleHide} />}
    </div>
  );
};

export default Main;
