import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import loader from '../../assets/loading.svg';
import AppContext from '../../store/store';
import { sortByType } from '../../utils/utils';
import { Character } from '../../types/apiTypes/character';

type Props = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  data: Character[];
  handleShow: (item: Character) => void;
};

const CardsContainer = (props: Props) => {
  const { state } = useContext(AppContext);
  const { loading, data, handleShow, setLoading } = props;
  const [sortedData, setSortedData] = useState<Character[]>(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  useEffect(() => {
    if (data && data.length) {
      setLoading(true);
      const sorted = sortByType(state.mainPage.sort, data);
      setSortedData(sorted);
      setLoading(false);
    }
  }, [state.mainPage.sort, data, setLoading]);

  return (
    <>
      {loading ? (
        <img className="loader" src={loader} alt="loader" data-testid="loader" />
      ) : sortedData ? (
        <div className="cards-container">
          {sortedData.map((item) => {
            return <Card onClick={handleShow} item={item} key={item.id} />;
          })}
        </div>
      ) : (
        <p className="info-error">no info</p>
      )}
    </>
  );
};

export default CardsContainer;
