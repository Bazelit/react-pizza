import { useNavigate } from "react-router-dom";
import styles from "./EmptyCart.module.scss";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.emptyCartText}>
        <h1>
          <img src="img/cart-emoji.png" alt="cart-emoji" />
          <span>Корзина пуста</span>
        </h1>
      </div>
      <div>
        <img
          className={styles.cartImg}
          src="img/empty-cart.png"
          alt="empty-cart"
        />
      </div>
      <button onClick={() => navigate("/")} className={styles.cartBtn}>
        Вернуться назад
      </button>
    </div>
  );
};

export default EmptyCart;
