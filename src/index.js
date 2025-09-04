import App from "./App";
import React from "react";

import { ToastContainer } from 'react-toastify';
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
        <App />
  <ToastContainer />
  </React.StrictMode>
);
reportWebVitals();
