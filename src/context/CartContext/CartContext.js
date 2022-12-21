import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  const [productState, productDispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
    wishlist: [],
  });

  return (
    <CartContext.Provider value={{ products, productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
