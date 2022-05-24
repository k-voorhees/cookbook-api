// this component will return all of the categories currently inside the database

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setCategoryList(data.categories));
  }, []);

  return (
    <div className='category-list'>
      {CategoryList.map((Category, i) => (
        <Link to={`/${Category}`} state={{ category: Category }} key={i}>
          <button className='category-button'>{Category}</button>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
