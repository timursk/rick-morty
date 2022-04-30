import RoutesComponent from '../routes/RoutesComponent';
import React from 'react';
import Header from '../components/Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="main-container">
        <RoutesComponent />
      </main>
    </>
  );
}

export default App;
