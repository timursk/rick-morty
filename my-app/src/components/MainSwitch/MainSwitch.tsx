import React, { ChangeEvent, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setPerPage, sort } from '../../store/reducers/mainPageSlice';
import sortTypes from '../../types/store/sortTypes';
import './MainSwitch.css';

const radioValues = Object.values(sortTypes);

const MainSwitch = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isDisplay, setDisplay] = useState(false);

  const handleSortClick = (item: sortTypes) => {
    setDisplay(false);
    dispatch(sort(item));
  };

  const handlePageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const number = +e.target.value;
    dispatch(setPerPage(number));
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
          {state.mainPageReducer.sort}
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
        <select onChange={(e) => handlePageSelect(e)} defaultValue={state.mainPageReducer.perPage}>
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
