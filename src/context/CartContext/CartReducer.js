export const CartReducer = (productState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...productState,
        cart: [...productState.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter(
            (product) => product.id !== action.payload.id
          ),
        ],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...productState,
        wishlist: [...productState.wishlist, action.payload],
        cart:[...productState.cart.filter((product)=> product.id !== action.payload.id ) ]
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlist: [
          ...productState.wishlist.filter(
            (product) => product.id !== action.payload.id
          ),
        ],
      };

    case "INCREMENT":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter((product) =>
          product.id === action.payload.id
              ? (product.qty = action.payload.qty + 1)
              : product.qty
          ),
        ],
      };

    case "DECREMENT":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter((product) =>
          product.id === action.payload.id
              ? (product.qty = action.payload - 1)
              : product.qty
          ),
        ],
      };

      

    default:
      return productState;
  }
};
