import ProductPage from "../Pages/ProductPage";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((prod) => prod.id !== action.payload.id)],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
        cart: [...state.cart.filter((prod) => prod.id !== action.payload.id)],
      };
      case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist.filter((prod)=> prod.id !== action.payload.id)],
        
      };
    default:
      return state;
  }
};
