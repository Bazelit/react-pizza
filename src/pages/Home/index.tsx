import { RootState } from "../../redux/store";
import { PizzaType } from "../../scss/types/PizzaType";
import { AppDispatch } from "../../redux/store";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sort from "../../components/Sort";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories";
import PizzaBlock from "../../components/PizzaBlock";
import Pagination from "../../components/Pagination";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(
    (state: RootState) => state.search.searchValue
  );
  const { pizzas, status } = useSelector((state: RootState) => state.pizzas);
  const { activeCategory, activeSort } = useSelector(
    (state: RootState) => state.filter
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPizzas({ currentPage }));
  }, [dispatch, currentPage]);

  const filteredProducts =
    activeCategory === 0
      ? pizzas
      : pizzas.filter((item: PizzaType) => item.category === activeCategory);

  const searchByName = filteredProducts.filter((product: PizzaType) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (activeSort === 0) {
    searchByName.sort((a: PizzaType, b: PizzaType) => b.rating - a.rating);
  } else if (activeSort === 1) {
    searchByName.sort((a: PizzaType, b: PizzaType) => a.price - b.price);
  } else if (activeSort === 2) {
    searchByName.sort((a: PizzaType, b: PizzaType) => b.price - a.price);
  } else if (activeSort === 3) {
    searchByName.sort((a: PizzaType, b: PizzaType) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort activeSort={activeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>
              К сожалению, не удалось получить пиццы. Попробуйте повторить
              попытку позже.
            </p>
          </div>
        ) : status === "loading" ? (
          [...Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : (
          searchByName.map((obj: PizzaType) => (
            <PizzaBlock key={obj.id} {...obj} />
          ))
        )}
      </div>
      {status === "error" ? null : (
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      )}
    </div>
  );
};

export default Home;
