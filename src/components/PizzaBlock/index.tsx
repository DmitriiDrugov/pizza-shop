import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/slice";
import { selectCartItems } from "../../redux/features/cart/selectors";
import { Link } from "react-router-dom";
import { cartItem } from "../../redux/features/cart/types";

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: string[]; // Будем предполагать, что sizes - это массив строк
  types: number[]; // Будем предполагать, что types - это массив чисел
};

const PizzaBlock: React.FC<PizzaBlockProps> = function ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) {
  const cartItem = useSelector(selectCartItems(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState<number>(0); // Установим явно тип number
  const [selectedSize, setSelectedSize] = useState<number>(0); // Установим явно тип number

  const onClickAdd = () => {
    const item: cartItem = {
      id,
      title,
      price,
      imageUrl,
      type: selectedType,
      size: selectedSize,
      count: 0,
    };
    dispatch(addToCart(item));
  };

  const handleTypeChange = (index: number) => {
    // Установим явно тип number
    setSelectedType(index);
  };

  const handleSizeChange = (index: number) => {
    // Установим явно тип number
    setSelectedSize(index);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.length === 1
              ? ""
              : types.map((type, index) => (
                  <li
                    key={index}
                    onClick={() => handleTypeChange(index)}
                    className={selectedType === index ? "active" : ""}
                  >
                    {type === 0 ? "тонкое" : "традиционное"}
                  </li>
                ))}
            {}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => handleSizeChange(index)}
                className={selectedSize === index ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">От {price} р.</div>
          <div
            onClick={() => onClickAdd()}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PizzaBlock;
