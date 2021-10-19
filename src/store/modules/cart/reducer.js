import { CART_REMOVE, CART_ADD } from "./actionsTypes";
const initialValue = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CART_REMOVE:
      const { listSale } = action;
      return listSale;

    case CART_ADD:
      const { product } = action;
      return [...state, product];

    default:
      return state;
  }
};

export default cartReducer;
