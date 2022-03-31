import './App.css';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Error404 from './routes/Error404';
import Main from './routes/Main';
import FormPage from './routes/FormPage';

const links = [
  { link: '/', name: 'Main' },
  { link: '/about', name: 'About' },
  { link: '/404', name: '404' },
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
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
