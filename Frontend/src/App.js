import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        path: 'howToUse',
        element: <HowToUse />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;



// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Switch from "react-switch";
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import HowToUse from './pages/HowToUse';
// import LoginPage from './pages/LoginPage';
// import SignUpPage from './pages/SignUpPage';
// import NotFound from './pages/NotFound';
// import Error from './pages/Error';
  
// const App = () => {
//   const [user, setLoginUser] = useState({
//     // name:"", 
//     // email:"",
//     // password:""
//   });

//   return (
//     <Router>
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route
//             path="/login"
//             render={(props) => <LoginPage {...props} setLoginUser={setLoginUser} />}
//           />
//           <Route path="/signup" component={SignUpPage} />
//           <Route
//             path="/howToUse"
//             render={(props) =>
//               user && user._id ? <HowToUse {...props} /> : <LoginPage {...props} />
//             }
//           />
//           <Route component={NotFound} />
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
