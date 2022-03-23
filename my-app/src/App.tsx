import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import About from './routes/About';
import Error404 from './routes/Error404';
import Main from './routes/Main';

function App() {
  return (
    <>
      <header className="App-header">
        <nav className="header-container">
          <Link to="/">Main</Link>
          <Link to="/about">About Us</Link>
          <Link to="/404">404</Link>
        </nav>
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
