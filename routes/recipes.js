const express = require('express');
const router = express.Router();

const {
  getAllRecipes,
  getRecipeCategories,
  getRecipesInCategory,
  getSingleRecipe,
  getCarouselImages,
} = require('../controllers/recipes');

router.route('/categories').get(getRecipeCategories);
router.route('/recipes').get(getAllRecipes);
router.route('/carousel').get(getCarouselImages);
router.route('/:category').get(getRecipesInCategory);
router.route('/recipes/:recipe').get(getSingleRecipe);

module.exports = router;
