import React from 'react';
import loader from '../../assets/loading.svg';

const Loader = () => {
  return <img className="loader" src={loader} alt="loader" data-testid="loader" />;
};

export default Loader;
