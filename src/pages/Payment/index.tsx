import { useNavigate } from "react-router-dom";
import styles from "./Payment.module.scss";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.emptyCartText}>
        <h1 className={styles.paymentText}>
          <img src="img/check-mark.svg" alt="check-mark" />
          <span>Заказа оплачен</span>
        </h1>
      </div>
      <div>
        <img className={styles.cartImg} src="img/payment.png" alt="payment" />
      </div>
      <button onClick={() => navigate("/")} className={styles.cartBtn}>
        Вернуться назад
      </button>
    </div>
  );
};

export default Payment;
