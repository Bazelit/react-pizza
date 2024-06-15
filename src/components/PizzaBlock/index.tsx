import React from "react";

import { RootState } from "../../redux/store.js";
import { PizzaType } from "../../types/PizzaType.js";
import { addCartProducts } from "../../redux/slices/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";

type CartProduct = {
  id: number;
  count: number;
};

const PizzaBlock: React.FC<PizzaType> = ({
  id,
  title,
  price,
  imageUrl,
  types,
  sizes,
}) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector(
    (state: RootState) =>
      state.cart.cartProducts.find((obj: CartProduct) => obj.id === id) as
        | CartProduct
        | undefined
  );

  const addedCount = cartProduct ? cartProduct.count : 0;

  const [pizzaCount, setPizzaCount] = React.useState<number>(0);
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const typesNames: string[] = ["тонкое", "традиционное"];

  const addToCart = (): void => {
    const product = {
      id,
      title,
      price,
      imageUrl,
      type: typesNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addCartProducts(product));
  };

  const addPizza = () => {
    setPizzaCount(pizzaCount + 1);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt={title} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                onClick={() => setActiveType(index)}
                className={activeType === index ? "active" : ""}
              >
                {typesNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div onClick={addPizza} className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            onClick={addToCart}
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
