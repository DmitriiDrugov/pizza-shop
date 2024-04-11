import { cartItem } from "../redux/features/cart/types";
import { calculateTotalPrice } from "./calcTotalPrice";

export const getItemFromLocalStorage = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calculateTotalPrice(items);

  return {
    items: items as cartItem[],
    totalPrice,
  };
};
