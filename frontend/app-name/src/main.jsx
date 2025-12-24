import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* wrap the App with the Provider and pass the store, all the components that are nested in the Provider will have access to the store and can use it */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
