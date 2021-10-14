import { CART_REMOVE, CART_ADD } from "./actionsTypes";

export const removeCart = (listSale) => ({
  type: CART_REMOVE,
  listSale,
});

export const addCart = (product) => ({
  type: CART_ADD,
  product,
});
