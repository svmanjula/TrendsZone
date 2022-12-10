import ProductPage from "../pages/ProductPage";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        quantity: state.quantity + 1
      };
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
        wishlist: [
          ...state.wishlist.filter((prod) => prod.id !== action.payload.id),
        ],
      };

    // case "INCREMENT":
    //   return {
    //     ...state,
    //     cart: [
    //       ...state.cart.filter(
    //         (prod) =>
    //           prod.id == action.payload.id &&
    //           (state.quantity = action.payload.quantity)
    //       ),
    //     ],
    //   };
    default:
      return state;
  }
};

export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };
    case "SORT_BY_SEARCH":
      return {
        ...state,
        bySearch: action.payload,
      };
    case "SORT_BY_CATEGORIES":
      return {
        ...state,
        byCategories:[ ...state.byCategories, action.payload],
      };

      // case "SORT_BY_PRICE":
      //   return{
      //     ...state, sort:action.payload
      //   }
  

    default:
      return state;
  }
};
