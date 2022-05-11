import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import { ContextProvider } from "./context/Context";

axios.defaults.baseURL = "http://localhost:5000/api/";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
