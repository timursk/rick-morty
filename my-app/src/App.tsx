import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="header-container">
          <Link to="/">Main</Link>
          <Link to="/about">About Us</Link>
          <Link to="/404">404</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
