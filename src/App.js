import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import LoginPage from './pages/LoginPage';
import SignUpPage  from './pages/SignUpPage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage  />,
      },
      {
        path: '/howToUse',
        element: <HowToUse />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
export default router;
