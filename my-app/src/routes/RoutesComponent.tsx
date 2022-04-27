import React, { Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
const Main = React.lazy(() => import('./Routes/Main/Main'));
const About = React.lazy(() => import('./Routes/About/About'));
const Error404 = React.lazy(() => import('./Routes/Error404/Error404'));
const FormPage = React.lazy(() => import('./Routes/FormPage/FormPage'));
import loader from '../assets/loading.svg';
import ModalCard from '../components/ModalCard/ModalCard';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<img className="loader" src={loader} alt="loader" />}>
            <Main />
          </Suspense>
        }
      />
      <Route path="card" element={<ModalCard />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<img src={loader} alt="loader" />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/404"
        element={
          <Suspense fallback={<img src={loader} alt="loader" />}>
            <Error404 />
          </Suspense>
        }
      />
      <Route
        path="/form"
        element={
          <Suspense fallback={<img src={loader} alt="loader" />}>
            <FormPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RoutesComponent;
