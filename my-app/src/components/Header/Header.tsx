import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AppContext from '../../store/store';

const cardLink = { link: '/card', name: 'Main/card' };
const mainLink = { link: '/', name: 'Main' };
const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

const Header = () => {
  const {
    state: {
      mainPage: { pickedCard },
    },
  } = useContext(AppContext);
  links[0] = pickedCard ? cardLink : mainLink;

  return (
    <header className="App-header">
      <nav className="header-container">
        {links.map((item, id) => {
          const { link, name } = item;
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#3896ff' : 'white',
                textDecoration: 'none',
              })}
              to={link}
              key={id}
              data-testid={name}
            >
              {name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
