const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');
const fs = require('fs');
const PORT = 8001;

const url = 'https://www.sipandfeast.com/category/recipe/salads/';

const app = express();

axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);

  const recipes = [];
  let recipeID = 1;
  const Category = 'salad';
  $('.entry', html).each(function () {
    const ID = recipeID;
    recipeID++;
    const Title = $(this).find('.entry-title-link').text();
    const Image = $(this).find('img').attr('data-lazy-src');
    const recipeUrl = $(this).find('.entry-title-link').attr('href');

    axios(recipeUrl).then((response) => {
      const recipeHtml = response.data;
      const $recipe = cheerio.load(recipeHtml);

      $('.wprm-recipe-ingredients-container', recipeHtml).each(function () {
        let recipeIngredients = $recipe(this)
          .find('.wprm-recipe-ingredient')
          .text();

        // clean up ingredients list
        const Ingredients = recipeIngredients.split('▢');
        Ingredients.shift();

        const recipeInstructions = $recipe(
          'body div.wprm-recipe-instruction-text span'
        ).text();

        // clean up instructions
        const Instructions = recipeInstructions.split('.');
        if (Instructions[Instructions.length - 1] === '') {
          Instructions.pop();
        }

        recipes.push({
          Category,
          Title,
          Image,
          Ingredients,
          Instructions,
        });
        const recipeList = JSON.stringify(recipes);
        fs.writeFileSync('saladsrecipes.json', recipeList);
      });
    });
  });
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
