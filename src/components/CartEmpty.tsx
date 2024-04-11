import React from "react";

import CartEmptyImg from "../assets/img/empty-cart.png";

interface CartEmptyProps {
  // определите здесь свои пропсы
}

const CartEmpty: React.FC<CartEmptyProps> = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая{" "}
        <span role="img" aria-label="sad face">
          😕
        </span>
      </h2>

      <img src={CartEmptyImg} alt="Empty cart" />
      <a href="/" className="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default CartEmpty;
