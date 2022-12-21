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
            (currentElement) => currentElement.id !== action.payload.id
          ),
        ],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...productState,
        wishlist: [...productState.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...productState,
        wishlist: [
          ...productState.wishlist.filter(
            (currentElement) => currentElement.id !== action.payload.id
          ),
        ],
      };

    case "INCREMENT":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter((existingElement) =>
            existingElement.id === action.payload.id
              ? (existingElement.qty = action.payload.qty + 1)
              : existingElement.qty
          ),
        ],
      };

    case "DECREMENT":
      return {
        ...productState,
        cart: [
          ...productState.cart.filter((existElement) =>
            existElement.id === action.payload.id
              ? (existElement.qty = action.payload - 1)
              : existElement.qty
          ),
        ],
      };

      

    default:
      return productState;
  }
};
