import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Sort from "../../components/Sort";
import Categories from "../../components/Categories";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Pagination from "../../components/Pagination";

const Home = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const { activeCategory, activeSort } = useSelector((state) => state.filter);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://665d9f80e88051d604078e90.mockapi.io/pizzas?page=${currentPage}&limit=8`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredProducts =
    activeCategory === 0
      ? pizzas
      : pizzas.filter((item) => item.category == activeCategory);

  const searchByName = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (activeSort === 0) {
    searchByName.sort((a, b) => b.rating - a.rating);
  } else if (activeSort === 1) {
    searchByName.sort((a, b) => a.price - b.price);
  } else if (activeSort === 2) {
    searchByName.sort((a, b) => b.price - a.price);
  } else if (activeSort === 3) {
    searchByName.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort activeSort={activeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
          : searchByName.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
