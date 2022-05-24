import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function RecipesByCategory() {
  const location = useLocation();
  const category = location.state.category;
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch(`api/${category}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setRecipe(data.recipes));
  }, [category]);

  return (
    <div className="recipe-card-list">
      {recipe.map((recipe, i) => (
        <Link
          to={`/recipes/${recipe.Title}`}
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

export default RecipesByCategory;
