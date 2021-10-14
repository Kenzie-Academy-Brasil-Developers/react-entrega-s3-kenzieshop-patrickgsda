import { removeCart, addCart } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  console.log(product);
  const listSale = JSON.parse(localStorage.getItem("cart")) || [];
  // if (!listSale.map((item) => item.id).includes(product.id)) {
  // const newList = [...listSale, product];
  listSale.push(product);
  console.log(listSale);

  localStorage.setItem("cart", JSON.stringify(listSale));
  dispatch(addCart(product));
  // }
};

export const removeCartThunk = (jose) => (dispatch, getStore) => {
  const { cart } = getStore();
  console.log(jose);
  const listSale = JSON.parse(cart).filter((item) => item.id !== jose);
  // localStorage.setItem("cart", JSON.stringify(listSale));
  dispatch(removeCart(listSale));
};
