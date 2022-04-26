import React, { ChangeEvent, useContext, useState } from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/store/actionTypes';
import sortTypes from '../../types/store/sortTypes';
import './MainSwitch.css';

const radioValues = Object.values(sortTypes);

const MainSwitch = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isDisplay, setDisplay] = useState(false);

  const handleSortClick = (item: sortTypes) => {
    setDisplay(false);
    dispatch({ type: actionTypes.SORT, payload: item });
  };

  const handlePageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const number = +e.target.value;
    dispatch({ type: actionTypes.PER_PAGE, payload: number });
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
          {state.mainPage.sort}
        </a>
        {isDisplay && (
          <div className="main-sort__switcher">
            {radioValues.map((item, id) => (
              <label key={id} onClick={() => handleSortClick(item)}>
                <input type="radio" />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
      <div>
        <span>Per page: </span>
        <select onChange={(e) => handlePageSelect(e)} defaultValue={state.mainPage.perPage}>
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
