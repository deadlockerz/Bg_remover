import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<App />}
          errorElement={<Error />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='signup'
            element={<SignUpPage />}
          />{' '}
          <Route
            path='howToUse'
            element={<HowToUse />}
          />{' '}
        </Route>{' '}
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      ;
    </>
  );
};

export default Router;
