import React, { Suspense } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
const Main = React.lazy(() => import('./Routes/Main/Main'));
const About = React.lazy(() => import('./Routes/About/About'));
const Error404 = React.lazy(() => import('./Routes/Error404/Error404'));
const FormPage = React.lazy(() => import('./Routes/FormPage/FormPage'));
import CardPage from './Routes/CardPage/CardPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Main />
          </Suspense>
        }
      />
      <Route path="card" element={<CardPage />} />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/404"
        element={
          <Suspense fallback={<Loader />}>
            <Error404 />
          </Suspense>
        }
      />
      <Route
        path="/form"
        element={
          <Suspense fallback={<Loader />}>
            <FormPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default RoutesComponent;
