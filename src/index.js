import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/store";
import "react-loading-skeleton/dist/skeleton.css";
import "react-circular-progressbar/dist/styles.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
