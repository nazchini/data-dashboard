import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChartsContextProvider } from "./store/charts-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChartsContextProvider>
    <App />
  </ChartsContextProvider>
);
