import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const cardLink = { link: '/card', name: 'Main/card' };
const mainLink = { link: '/', name: 'Main' };
const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

const Header = () => {
  const location = useLocation();
  links[0] = location.pathname === '/card' ? cardLink : mainLink;

  return (
    <header className="App-header">
      <nav className="header-container">
        {links.map((item, id) => {
          const { link, name } = item;
          return (
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#3896ff' : '#bfbfbf',
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
