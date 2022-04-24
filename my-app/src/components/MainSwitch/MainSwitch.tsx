import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/actionTypes';
import sortTypes from '../../types/sortTypes';
import './MainSwitch.css';

type Props = {
  setCardsPerPage: Dispatch<SetStateAction<number>>;
};
const radioValues = Object.values(sortTypes);

const MainSwitch = (props: Props) => {
  const { setCardsPerPage } = props;
  const { state, dispatch } = useContext(AppContext);
  const [isDisplay, setDisplay] = useState(false);

  useEffect(() => {
    setCardsPerPage(+state.perPage);
  }, [setCardsPerPage, state.perPage]);

  const handleClick = (item: sortTypes) => {
    setDisplay(false);
    dispatch({ type: actionTypes.SORT, payload: item });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const number = +e.target.value;
    setCardsPerPage(number);
    dispatch({ type: actionTypes.PER_PAGE, payload: { perPage: `${number}` } });
  };

  return (
    <div className="main-switch">
      <div className="main-sort">
        <p>Sort by: </p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setDisplay(!isDisplay);
          }}
        >
          {state.sort}
        </a>
        {isDisplay && (
          <div className="main-sort__switcher">
            {radioValues.map((item, id) => (
              <label key={id} onClick={() => handleClick(item)}>
                <input type="radio" />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div>
        <span>Per page: </span>
        <select onChange={(e) => handleSelect(e)} defaultValue={state.perPage}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default MainSwitch;
