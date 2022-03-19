// assets 
import { Provider } from "react-redux";
import { store } from "./toolkit/index.js";  
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; 

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
