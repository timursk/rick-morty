import { NavLink } from 'react-router-dom';
import RoutesComponent from './routes/RoutesComponent';
import React from 'react';
import './App.css';
import AppProvider from './components/AppProvider/AppProvider';

const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

function App() {
  return (
    <AppProvider>
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
      <main className="main-container">
        <RoutesComponent />
      </main>
    </AppProvider>
  );
}

export default App;
