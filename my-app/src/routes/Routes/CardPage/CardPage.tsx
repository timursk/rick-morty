import React, { MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import ModalCard from '../../../components/ModalCard/ModalCard';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { unpickCard } from '../../../store/reducers/mainPageSlice';
import './CardPage.css';

const CardPage = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const item = state.mainPageReducer.pickedCard;
  const navigate = useNavigate();

  useEffect(() => {
    let timeId: number = null;
    if (!item) {
      timeId = window.setTimeout(() => navigate('/'), 2000);
    }

    const unpick = () => {
      dispatch(unpickCard());
    };

    return () => {
      unpick();
      clearTimeout(timeId);
    };
  }, [dispatch, navigate, item]);

  if (!state.mainPageReducer.pickedCard) {
    return (
      <>
        <p>NO INFO!</p>
        <p>REDIRECTING...</p>
        <Loader />
      </>
    );
  }

  const handleClick = (ev: MouseEvent) => {
    ev.preventDefault();
    navigate('/');
  };

  return (
    <>
      <a onClick={handleClick} className="back-card" href="">
        Back
      </a>
      <ModalCard item={item} />
    </>
  );
};

export default CardPage;
