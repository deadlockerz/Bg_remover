import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
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
