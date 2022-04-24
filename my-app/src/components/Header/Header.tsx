import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

const Header = () => {
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
