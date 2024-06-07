import { setActiveCategory } from "../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Categories = ({ activeCategory }) => {
  const dispatch = useDispatch();

  const categories = [
    { id: 0, categoriesName: "Все" },
    { id: 1, categoriesName: "Мясные" },
    { id: 2, categoriesName: "Вегетарианская" },
    { id: 3, categoriesName: "Гриль" },
    { id: 4, categoriesName: "Острые" },
    { id: 5, categoriesName: "Закрытые" },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => dispatch(setActiveCategory(category.id))}
            className={activeCategory === category.id ? "active" : ""}
          >
            {category.categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
