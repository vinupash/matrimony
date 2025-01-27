import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./style.scss";
import { NavigationProvider } from "./context/Navigation";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
