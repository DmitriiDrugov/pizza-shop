import React from "react";


interface CategoriesProps {
  category: number;
  onChangeCategory: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ category, onChangeCategory }) => {
 
    const categories: string[] = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(index)}
              className={category === index ? "active" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default Categories;
