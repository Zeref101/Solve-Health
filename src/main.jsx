import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthenticationProvider from "./context/AuthenticationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </React.StrictMode>
  </BrowserRouter>
);
