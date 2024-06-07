import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Очистить корзину?</h2>
        <p>Вы уверены, что хотите очистить корзину?</p>
        <div className={styles.modalButtons}>
          <button className={styles.modalButton} onClick={onClose}>
            Нет
          </button>
          <button className={styles.modalButton} onClick={onConfirm}>
            Да
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
