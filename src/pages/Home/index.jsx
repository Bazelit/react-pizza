import axios from "axios";
import { useEffect, useState } from "react";

import Sort from "../../components/Sort";
import Categories from "../../components/Categories";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://665d9f80e88051d604078e90.mockapi.io/pizzas")
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
