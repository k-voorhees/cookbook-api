import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function RecipePage() {
  const location = useLocation();
  const recipe = location.state.recipe;

  const [recipePage, setRecipePage] = useState([]);
  useEffect(() => {
    fetch(`/api/recipes/${recipe.Title}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setRecipePage(data.singleRecipe));
  }, [recipe.Title]);

  return (
    <div className='recipe-page content'>
      <div className='recipe-content'>
        <div className='ingredient-container'>
          <img
            className='recipe-page-image'
            src={recipePage.Image}
            alt={recipePage.Title}
          />
          <div className='recipe-page-ingredients-list'>
            <h4>Ingredients</h4>
            {recipe.Ingredients.map((ingredient, i) => (
              <li key={i} className='ingredient-item'>
                {ingredient.trim()}
              </li>
            ))}
          </div>
        </div>
        <div className='recipe-page-instructions-list'>
          <h1 className='recipe-page-title'>{recipePage.Title}</h1>
          {recipe.Instructions.map((step, i) => (
            <li className='instruction-step' key={i}>
              {step.trim()}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
