import React, { Component } from 'react';
import Categories from '../Categories';
import RecipesByCategory from '../RecipesByCategory';
class CategoryPage extends Component {
  render() {
    return (
      <div className='content'>
        <Categories />
        <RecipesByCategory />
      </div>
    );
  }
}

export default CategoryPage;
