import React, { Component } from 'react';
import AllRecipes from '../AllRecipes';
import Categories from '../Categories';
class Recipes extends Component {
  render() {
    return (
      <div className='content'>
        <Categories />
        <AllRecipes />
      </div>
    );
  }
}

export default Recipes;
