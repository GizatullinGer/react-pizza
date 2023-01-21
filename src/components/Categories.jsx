import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (activeIndex) => {
    setActiveIndex(activeIndex);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li
            key={idx}
            onClick={() => onClickCategory(idx)}
            className={activeIndex === idx ? 'active' : ''}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
