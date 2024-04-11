import { cartItem } from "../redux/features/cart/types";
export const calculateTotalPrice = (items: cartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
