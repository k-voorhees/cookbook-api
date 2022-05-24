// this is the controllers that will allow POST PATCH DELETE methods after authentication
const Recipe = require('../Models/RECIPE');
const asyncWrapper = require('../Middleware/asyncWrapper');

const getPageControl = asyncWrapper(async (req, res) => {
  res.send(
    '<h1>PAGE CONTROL PAGE</h1><a href="/page-control/update">UPDATE RECIPE</a><a href="/page-control/delete">DELETE RECIPE</a>'
  );
});

const addRecipe = asyncWrapper(async (req, res) => {
  const newRecipe = await Recipe.create(req.body);
  res.status(200).json({ newRecipe });
});

const updateRecipe = asyncWrapper(async (req, res) => {
  const { recipe } = req.params;

  const updatedRecipe = await Recipe.findOneAndUpdate(
    { Title: recipe },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedRecipe) {
    res.status(404).json({ msg: `no recipe exists with name: ${recipe} ` });
  }
  res.status(200).json({ updatedRecipe });
});

const deleteRecipe = asyncWrapper(async (req, res) => {
  const { recipe } = req.params;
  const deletedRecipe = await Recipe.findOneAndDelete({ Title: recipe });

  if (!deletedRecipe) {
    return res
      .status(404)
      .json({ msg: `${recipe} does not exist in the database` });
  }
  res.status(200).json({ deletedRecipe });
});

module.exports = { getPageControl, addRecipe, updateRecipe, deleteRecipe };
