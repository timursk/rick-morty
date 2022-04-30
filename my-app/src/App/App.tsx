import RoutesComponent from '../routes/RoutesComponent';
import React from 'react';
import './App.css';
import AppProvider from '../containers/AppProvider/AppProvider';
import Header from '../components/Header/Header';

function App() {
  return (
    <AppProvider>
      <Header />
      <main className="main-container">
        <RoutesComponent />
      </main>
    </AppProvider>
  );
}

export default App;
