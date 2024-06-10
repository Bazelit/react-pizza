import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <h1 className={styles.text}>😕 Страница не найдена</h1>
      <button onClick={() => navigate("/")} className="button" style={{fontSize: 18}}>
        Вернуть на главную
      </button>
    </div>
  );
};

export default NotFound;
