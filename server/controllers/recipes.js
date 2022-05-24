const Recipe = require('../Models/RECIPE');
const asyncWrapper = require('../Middleware/asyncWrapper');

// route controllers
const getAllRecipes = asyncWrapper(async (req, res) => {
  const allRecipes = await Recipe.find({});
  res.status(200).json({ allRecipes });
});

const getRecipeCategories = asyncWrapper(async (req, res) => {
  const categories = await Recipe.find({}).distinct('Category');
  res.status(200).json({ categories });
});

const getRecipesInCategory = asyncWrapper(async (req, res) => {
  const { category } = req.params;
  const recipes = await Recipe.find({ Category: category });
  res.status(200).json({ recipes });
});

const getSingleRecipe = asyncWrapper(async (req, res) => {
  const { recipe } = req.params;
  const singleRecipe = await Recipe.findOne({
    Title: recipe,
  });
  res.status(200).json({ singleRecipe });
});

const getCarouselImages = asyncWrapper(async (req, res) => {
  const amount = Number(req.query.amount);
  const recipes = await Recipe.find({});
  const galleryImages = [];
  for (let i = 0; i < amount; i++) {
    const num = Math.floor(Math.random() * recipes.length);
    if (!galleryImages.includes(num)) {
      galleryImages[i] = num;
    } else {
      i--;
    }
  }
  const carousel = [];
  galleryImages.map((image, i) => {
    carousel[i] = recipes[image].Image;
  });
  res.status(200).json({ carousel });
});

module.exports = {
  getAllRecipes,
  getRecipeCategories,
  getRecipesInCategory,
  getSingleRecipe,
  getCarouselImages,
};
