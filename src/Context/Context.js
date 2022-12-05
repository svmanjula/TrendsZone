import { createContext, useState, useEffect,useReducer } from "react";
import axios from "axios";
import { cartReducer } from "./Reducers";

const CartContext = createContext("");

 const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(url).then((res) => {
      return setProducts(res.data);
    });
  }, []);

const [state, dispatch] = useReducer(cartReducer, {
  cart:[],
  wishlist:[],
  products: products,
})


  return (
    <CartContext.Provider value={{products,state,dispatch }}>{children}</CartContext.Provider>
  );
};

export {Context, CartContext} ;

