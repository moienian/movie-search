import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MovieProvider } from "./context";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
