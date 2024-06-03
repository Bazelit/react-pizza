import { useState } from "react";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0);

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
            onClick={() => setActiveCategory(category.id)}
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
