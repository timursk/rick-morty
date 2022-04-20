import { NavLink } from 'react-router-dom';
import RoutesComponent from './routes/RoutesComponent';
import React, { useReducer } from 'react';
import './App.css';
import AppContext from './store/store';
import initialState from './store/initialState';
import appReducer from './store/reducers/appReducer';

const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
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
    </AppContext.Provider>
  );
}

export default App;
