import React from 'react';
import gif from '../../../assets/error404.gif';
import './Error404.css';

const Error404 = () => {
  return (
    <img data-testid="error-page" className="error-image" src={gif} alt="this slowpoke moves" />
  );
};

export default Error404;
