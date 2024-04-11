import React from "react";
import { useDispatch } from "react-redux";
import { cartItem } from "../redux/features/cart/types";
import { minusItem, removeItem, addToCart } from "../redux/features/cart/slice";

interface CartItemProps {
  id: string;
  title: string;
  type: number;
  size: number;
  price: number;
  count: number;
  imageUrl: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  count,
  imageUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addToCart({
        id,
      } as cartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы уверены, что хотите убрать товар?")) {
      dispatch(removeItem(id));
    }
  };

  const getTypeString = () => {
    return type === 0 ? "тонкое" : "традиционное";
  };

  const getSize = (size: number) => {
    const sizeOptions = ["26 см.", "30 см.", "40 см."];
    return sizeOptions[size];
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {getTypeString()}, {getSize(size)}
        </p>
      </div>
      <div className="cart__item-count">
        <button
          disabled={count === 1}
          onClick={onClickMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <b>{count}</b>
        <button
          onClick={onClickPlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} Р</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={onClickRemove}
          className="button button--outline button--circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
