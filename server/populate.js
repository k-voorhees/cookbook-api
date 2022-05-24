// this will populate the database with the starting json files/recipes. It will delete all entries before populating. DO NOT RUN AFTER DEPLOYMENT

require('dotenv').config();

const CONNECT_DB = require('./DB/connect');
const Recipe = require('./Models/RECIPE');

const appetizerJson = require('./DB/RecipeData/AppetizersRecipes.json');
const drinksJson = require('./DB/RecipeData/DrinksRecipes.json');
const mainsJson = require('./DB/RecipeData/MaincourseRecipes.json');
const pastaJson = require('./DB/RecipeData/pastaRecipes.json');
const saladJson = require('./DB/RecipeData/SaladsRecipes.json');

const start = async () => {
  try {
    await CONNECT_DB(process.env.MONGO_URI);
    await Recipe.deleteMany();
    await Recipe.create(appetizerJson);
    await Recipe.create(drinksJson);
    await Recipe.create(mainsJson);
    await Recipe.create(pastaJson);
    await Recipe.create(saladJson);
    console.log('SUCCESS');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// start();
