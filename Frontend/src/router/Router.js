import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.js";
import HowToUse from "../pages/HowToUse.js";
import LoginPage from "../pages/LoginPage.js";
import SignUpPage from "../pages/SignUpPage.js";
import NotFound from "../pages/NotFound.js";
import Error from "../pages/Error.js";
import Result from "../pages/Result.js";
import App from "../App.js";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "howToUse",
          element: <HowToUse />,
        },
        {
          path: "result",
          element: <Result />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return router;
};

export default Router;
