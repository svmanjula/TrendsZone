import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // fetching the data
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  // retrieve data from local storage
  const handleCartLocalStorage = () => {
    let cartData = localStorage.getItem("cartData");
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      return [];
    }
  };

  const handleWishlistLocalStorage = () => {
    let wishlistData = localStorage.getItem("wishlistData");
    if (wishlistData) {
      return JSON.parse(wishlistData);
    } else {
      return [];
    }
  };

  const [productState, productDispatch] = useReducer(CartReducer, {
    products: products,
    cart: handleCartLocalStorage(),
    wishlist: handleWishlistLocalStorage(),
  });
  // saving data to the local storage
  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(productState.cart));
  }, [productState.cart]);

  useEffect(() => {
    localStorage.setItem("wishlistData", JSON.stringify(productState.wishlist));
  }, [productState.wishlist]);

  return (
    <CartContext.Provider value={{ products, productState, productDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
