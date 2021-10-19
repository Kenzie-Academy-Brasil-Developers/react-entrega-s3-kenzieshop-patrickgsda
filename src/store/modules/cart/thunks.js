import { removeCart, addCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  const listSale = JSON.parse(localStorage.getItem("cart")) || [];
  if (!listSale.map((item) => item.id).includes(product.id)) {
    const newList = [...listSale, product];
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(addCart(product));
  }
};

export const removeCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const listSale = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(listSale));
  dispatch(removeCart(listSale));
};
