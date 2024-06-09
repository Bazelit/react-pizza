import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";

import Sort from "../../components/Sort";
import Categories from "../../components/Categories";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Pagination from "../../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { pizzas, status } = useSelector((state) => state.pizzas);
  const searchValue = useSelector((state) => state.search.searchValue);
  const { activeCategory, activeSort } = useSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPizzas(currentPage));
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
        {status === "loading"
          ? [...Array(8)].map((_, index) => <Skeleton key={index} />)
          : searchByName.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
