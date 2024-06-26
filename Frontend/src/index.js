import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router/Router";
import { RouterProvider } from "react-router-dom"; //Usually loaded at starting

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router()} />
  </React.StrictMode>
);
