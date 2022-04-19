import './App.css';
import { NavLink } from 'react-router-dom';
import RoutesComponent from './routes/RoutesComponent';

const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/form', name: 'Form' },
];

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
