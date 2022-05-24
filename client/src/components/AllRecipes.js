// this component will create a card for each recipe that is fetched

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllRecipes() {
  const [recipeCard, setRecipeCard] = useState([]);

  useEffect(() => {
    fetch("api/recipes")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setRecipeCard(data.allRecipes));
  }, []);
  return (
    <div className="recipe-card-list">
      {recipeCard.map((recipe, i) => (
        <Link
          to={`/recipes/${recipe.Title}`}
          th
          state={{
            recipe: recipe,
          }}
          key={i}
        >
          <div className="recipe-card" key={i}>
            <div className="recipe-card-image">
              <img src={recipe.Image} alt={`${recipe}`}></img>
            </div>
            <div className="recipe-card-title">
              <h3>{recipe.Title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllRecipes;
