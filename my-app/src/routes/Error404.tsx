import React from 'react';
import gif from '../assets/error404.gif';

const Error404 = () => {
  return (
    <img
      data-testid="error-page"
      style={{ margin: '0 auto', display: 'block' }}
      src={gif}
      alt="this slowpoke moves"
    />
  );
};

export default Error404;
