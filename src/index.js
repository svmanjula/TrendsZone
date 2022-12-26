import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext/CartContext";
import FilterProvider from "./context/FilterContext/FilterContext";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
