import React, { useContext, useEffect, useRef } from 'react';
import Input from '../../../components/Input/Input';
import { getCharactersByLink } from '../../../services/CardService';
import MainSwitch from '../../../components/MainSwitch/MainSwitch';
import CardsContainer from '../../../components/CardsContainer/CardsContainer';
import Pagination from '../../../components/Pagination/Pagination';
import { ApiMaxCards, URL } from '../../../utils/constants';
import './Main.css';
// import AppContext from '../../../store/store';
import { actionTypes } from '../../../types/store/actionTypes';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  fetchCards,
  fetchEmpty,
  startLoading,
  stopLoading,
} from '../../../store/reducers/mainPageSlice';

const getLink = (page = 0, name = '') => {
  return `${URL}/character?page=${page}&name=${name}`;
};

const getApiPage = (currentPage: number, cardsPerPage: number) => {
  const divider = ApiMaxCards / cardsPerPage;
  return Math.floor((currentPage - 1) / divider) + 1;
};

let prevLink = getLink();

const Main = () => {
  // const state = useAppSelector((state) => state.mainPage);
  const state = useAppSelector((state) => state.mainPageReducer);
  const dispatch = useAppDispatch();
  // const { state, dispatch } = useContext(AppContext);
  const { searchValue, currentPage, perPage } = state;
  const isMounted = useRef<boolean>(true);

  useEffect(() => {
    isMounted.current = true;
    const apiPage = getApiPage(currentPage, perPage);
    const link = getLink(apiPage, searchValue);

    if (link !== prevLink) {
      // dispatch({ type: actionTypes.LOADING_START });
      dispatch(startLoading());
      prevLink = link;

      getCharactersByLink(link).then((result) => {
        if (isMounted.current) {
          if (result.results && result.results.length) {
            // dispatch({ type: actionTypes.FETCH_CARDS, payload: result });
            dispatch(fetchCards(result));
          } else {
            // dispatch({ type: actionTypes.FETCH_EMPTY });
            dispatch(fetchEmpty());
          }
        }
        // dispatch({ type: actionTypes.LOADING_STOP });
        dispatch(stopLoading());
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [currentPage, searchValue, perPage, dispatch]);

  return (
    <div data-testid="main-page">
      <Input />
      <MainSwitch />

      <CardsContainer />
      <Pagination />
    </div>
  );
};

export default Main;
