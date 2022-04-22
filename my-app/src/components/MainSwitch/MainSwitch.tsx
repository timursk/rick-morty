import React, { useContext, useState } from 'react';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/actionTypes';
import sortTypes from '../../types/sortTypes';
import './MainSwitch.css';

const radioValues = Object.values(sortTypes);

const MainSwitch = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isDisplay, setDisplay] = useState(false);
  const [selected, setSelected] = useState<sortTypes>(radioValues[0]);

  const handleClick = (item: sortTypes) => {
    setSelected(item);
    setDisplay(false);
    dispatch({ type: actionTypes.SORT, payload: item });
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
    </div>
  );
};

export default MainSwitch;
