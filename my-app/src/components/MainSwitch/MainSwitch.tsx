import React, { useState } from 'react';
import './MainSwitch.css';

const MainSwitch = () => {
  const [isDisplay, setDisplay] = useState(false);
  const [selected, setSelected] = useState('none');
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
          {selected}
        </a>
        {isDisplay && (
          <div className="main-sort__switcher">
            <label
              onClick={() => {
                setSelected('name');
                setDisplay(false);
              }}
            >
              <input type="radio" />
              name
            </label>
            <label
              onClick={() => {
                setSelected('popular');
                setDisplay(false);
              }}
            >
              <input type="radio" />
              popular
            </label>
            <label
              onClick={() => {
                setSelected('place');
                setDisplay(false);
              }}
            >
              <input type="radio" />
              place
            </label>
          </div>
        )}
        {/* <select className="main-sort" defaultValue={'0'}>
          <option value="0">None</option>
          <option value="1">Popular</option>
          <option value="2">Name</option>
          <option value="3">Best</option>
        </select> */}
      </div>
    </div>
  );
};

export default MainSwitch;
